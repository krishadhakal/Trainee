<?php 
    //initiating a new session
    session_start();
    //check if user is already logged in, if yes redirect them to login page
    if(isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true){
        header("location: welcome.php");
        exit;
    }

    require_once "config.php";

    $username = $password = "";
    $username_err = $password_err = $login_err = "";

    if($_SERVER['REQUEST_METHOD'] == "POST"){

        //checking if username is empty
        if(empty(trim($_POST['username']))){
            $username_err = "Please enter a username";
        }
        else{
            $username = trim($_POST['username']);
        }

        //checking if password is empty
        if(empty(trim($_POST['password']))){ 
            $password_err = "Please enter your password.";
        }
        else{
            $password = trim($_POST['password']);
        }

        //validate crenditals
        //checking if username and password are empty
        if(empty($username_err) && empty($password_err)){
            $sql = "SELECT * FROM users WHERE username = ?";
            if($stmt = $mysqli->prepare($sql)){
                $stmt->bind_param("s", $param_username);

                $param_username = $username;

                if($stmt->execute()){
                    //storing the result
                    $stmt->store_result();

                    //check if user name exists, if yes then verify password
                    if($stmt->num_rows==1){
                        $stmt->bind_result($id, $username, $hashed_password);
                        if($stmt->fetch()){
                            if(password_verify($password, $hashed_password)){
                                session_start();
                                //store data in session variables
                                $_SESSION['loggedin'] = true;
                                $_SESSION['id'] = $id;
                                $_SESSION['username'] = $username;

                                header("location:welcome.php");
                            }
                            else{
                                $login_err = "Invalid username or password.";
                            }
                        }
                    }
                    else{
                        $login_err =  "Oops! Something went wrong.Please try again later.";
                    }
                    
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
    <title>Login page</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <div class="left-side">
            <div class="text">
               <!-- <h2>Experiences of a lifetime</h2>
               <p>NirvanaNepal where nature, culture and travel unites.</p> -->
            </div>    
        </div>

        <div class="right-side">
            <form class="login-form" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <h2>Welcome Back!</h2>

                <!-- displaying the login error -->
                <?php 
                    if(!empty($login_err)){
                        echo '<div class="alert">'. $login_err . '</div>';
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
                <button type="submit" class="submit-btn">Log In</button>

                <div class="sign-up">
                    <p>Don't have an account? <a href="signup.php">Sign Up</a></p>
                    <p><a href="forgotpassword.php">Forgot Password?</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
</body>
</html>