<?php

    require_once "config.php";
    $username = $new_password = $confirm_password = "";
    $username_err = $new_password_err = $confirm_password_err = $reser_err = "";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        // validate username
        if (empty(trim($_POST["username"]))) {
            $username_err = "Please enter your username.";
        } 
        else {
            $username = trim($_POST["username"]);
        }

        // validate new password
        if (empty(trim($_POST["new_password"]))) {
            $new_password_err = "Please enter the new password.";
        } 
        elseif (strlen(trim($_POST["new_password"])) < 6) {
            $new_password_err = "Password must have at least 6 characters.";
        } 
        else {
            $new_password = trim($_POST["new_password"]);
        }

        // validate confirm password
        if (empty(trim($_POST["confirm_password"]))) {
            $confirm_password_err = "Please confirm the password.";
        } 
        else {
            $confirm_password = trim($_POST["confirm_password"]);
            if (empty($new_password_err) && ($new_password != $confirm_password)) {
                $confirm_password_err = "Password did not match.";
            }
        }

        // check input errors before updating the database
        if (empty($username_err) && empty($new_password_err) && empty($confirm_password_err)) {
            // prepare a select statement to check if the username exists
            $sql = "SELECT id FROM users WHERE username = ?";

            if ($stmt = $mysqli->prepare($sql)) {
                // bind variables to the prepared statement as parameters
                $stmt->bind_param("s", $param_username);

                //set parameters
                $param_username = $username;

                //attempt to execute the prepared statement
                if ($stmt->execute()) {
                    //store result
                    $stmt->store_result();

                    //check if username exists
                    if ($stmt->num_rows == 1) {
                        //username exists, now update the password
                        $stmt->close();

                        //prepare an update statement
                        $sql = "UPDATE users SET password = ? WHERE username = ?";

                        if ($stmt = $mysqli->prepare($sql)) {
                            // bind variables to the prepared statement as parameters
                            $stmt->bind_param("ss", $param_password, $param_username);

                            //set parameters
                            $param_password = password_hash($new_password, PASSWORD_DEFAULT);

                            //attempt to execute the prepared statement
                            if ($stmt->execute()) {
                                //password updated successfully, redirect to login page
                                header("location: login.php");
                                exit();
                            } else {
                                $reset_err = "Oops! Something went wrong. Please try again later.";
                            }
                            $stmt->close();
                        }
                    } else {
                        // if username doesn't exist
                        $username_err = "No account found with that username.";
                    }
                } else {
                    $reset_err = "Oops! Something went wrong. Please try again later.";
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
    <title>Password Rest Page</title>
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
            <form class="reset-form" method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <h2>Reset Password</h2>

                <!-- displaying the signin error -->
                <?php 
                    if(!empty($reset_err)){
                        echo '<div class="alert">'. $reset_err . '</div>';
                    }
                ?>
                

                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" class="<?php echo (!empty($username_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $username; ?>">
                    <!-- displaying the error -->
                    <span class="invalid-feedback"><?php echo $username_err?></span>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="new_password" class="<?php echo (!empty($new_password_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $new_password; ?>">
                    <!-- displaying the error -->
                <span class="invalid-feedback"><?php echo $new_password_err; ?></span>
                </div>
                <div class="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirm_password" class="<?php echo (!empty($confirm_password_err)) ? 'is-invalid' : ''; ?>" value="<?php echo $confirm_password; ?>">
                    <!-- displaying the error -->
                    <span class="invalid-feedback"><?php echo $confirm_password_err; ?></span>
                </div>
                <button type="submit" class="submit-btn">Reset</button>
                <div class="sign-up">
                    <p><a href="login.php">Log In</a></p>
                </div>
            </form>
        </div>
    </div>
</body>
</html>