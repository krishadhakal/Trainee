<?php
    require_once "config.php";

    $username = $password = $confirm_password = "";
    $username_err = $password_err = $confirm_password_err = $signin_err = "";
    if($_SERVER["REQUEST_METHOD"] == "POST"){

        //validating username
        //checking if username is empty or not
        if(empty(trim($_POST['username']))){
            $username_err = "Please enter a username";
        }
        //preg_match is used to check if the string matched a certain pattern or not
        elseif(!preg_match('/^[a-zA-Z0-9_]+$/', trim($_POST['username']))){ 
            $username_err = "Username can only contain letters, numbers, and underscores.";
        }
        else{
            //checking if the username exists in the table 
            //? allows query to be parameterized
            $sql = "SELECT id FROM users WHERE username = ? ";

            //stmt is prepared statement object which helps to securely execute the dynamic data that allows you to separate SQL code from data inputs and prevent SQL injections
            if($stmt = $mysqli->prepare($sql)){
                //binding the variables to the prepared statement as parameters
                $stmt->bind_param("s", $param_username); //here type "s" is a string
                //set parameters
                $param_username = trim($_POST['username']);

                //attempt to execute the prepared statement
                if($stmt->execute()){
                    //storeing the result
                    $stmt->store_result();
                    
                    if($stmt->num_rows==1){
                        $username_err = "This username is already taken.";
                    }
                    else{
                        $username = trim($_POST['username']);
                    }
                }
                else{
                    $signin_err =  "Oops! Something went wrong. PLease try again later.";
                }
                $stmt->close();
            }
        }

        //validating password
        //checking if password is empty or not
        if(empty(trim($_POST['password']))){ 
            $password_err = "Please enter a password.";
        }
        //checking the length of the password
        elseif(strlen(trim($_POST['password']))<6){
            $password_err = "Password must have atleast 6 characters.";
        }
        else{
            $password = trim($_POST['password']);
        }

        //validating confirm password
        //checking is confirm password is empty or not
        if(empty($_POST['confirm_password'])){
            $confirm_password_err = "Please confrim password.";
        }
        else{
            $confirm_password = trim($_POST['confirm_password']);
            //checking if the password and confirm password match or not
            if(empty($password_err)&&($password != $confirm_password)){
                $confirm_password_err = "Password did not match.";
            }
        }

        //checking input errors before inserting in the database
        if(empty($username_err) && empty($password_err) && empty($confirm_password_err)){
            //prepare insert statement
            $sql = "INSERT INTO users (username, password) VALUES (?,?)";
            if($stmt = $mysqli->prepare($sql)){
                //binding the variables to the prepared statement as parameters
                $stmt->bind_param("ss", $param_username, $param_password);

                //set parameters
                $param_username = $username;
                //using password_hash securely hash the password before storing it in the database.
                $param_password = password_hash($password, PASSWORD_DEFAULT);

                //attempt to execute the prepared statement
                if($stmt->execute()){
                    //redirect to login page
                    header("location:login.php");
                }
                else{
                    $signin_err = "Oops! Something went wrong. Please try again later.";
                }
                $stmt->close();
            }
        }
        $mysqli->close();
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Page</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <div class="container">
        <div class="left-side">
            <div class="text">
               <!-- image is added here from css -->
            </div>    
        </div>

        <div class="right-side">
            <form class="signup-form" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <h2>Create Your Account</h2>

                <!-- displaying the signin error -->
                <?php 
                    if(!empty($signin_err)){
                        echo '<div class="alert">'. $signin_err . '</div>';
                    }
                ?>

                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" class="<?php echo (!empty($username_err)) ? 'is-invalid':'';?>" value="<?php echo $username;?>">
                    <!-- displaying the error -->
                    <span class="invalid-feedback"><?php echo $username_err?></span>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" class="<?php echo (!empty($password_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $password; ?>">
                    <!-- displaying the error -->
                    <span class="invalid-feedback"><?php echo $password_err; ?></span>
                </div>
                <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirm_password" class="<?php echo (!empty($confirm_password_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $confirm_password; ?>">
                    <!-- displaying the error -->
                    <span class="invalid-feedback"><?php echo $confirm_password_err; ?></span>
                </div>
                <button type="submit" class="submit-btn">Sign Up</button>

                <div class="sign-up">
                    <p>Already have an account?<a href="login.php">Log In</a></p>
                </div>
            </form>
        </div>
    </div>
</body>
</html>