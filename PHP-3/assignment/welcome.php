<?php

    session_start();
    //check if user is already logged in, if yes redirect them to login page
    if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true){
        header("location: login.php");
        exit;
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="welcome_style.css">
</head>
<body>

    <nav>
        <div class="nav__logo">
            <a href="welcome.php">
                <h2>Nirvana Nepal</h2>
            </a>
        </div>
        <div class="nav__links">
            <ul>
                <li><a href="#welcome_section">Destinations</a></li>
                <li><a href="#thingstodo">Things to do</a></li>
                <li><a href="#about">About</a></li>
            </ul>
            <div class="nav__user">
                <span>Hi, <b><?php echo htmlspecialchars($_SESSION['username']); ?></b></span>
                <a href="logout.php" class="logout-btn">Logout</a>
            </div>
        </div>
    </nav>

    <header>
        <div class="conatiner">
            <div class="home_header_info">
                <h1 class="typewrite">
                    <span>Welcome To Nepal</span>
                </h1>
                <p>Heaven is myth, Nepal is real.</p>
            </div>
        </div>
        <div class="video">
            <video id="video" autoplay loop muted>
                <source type="video/mp4" src="media/nepalbeauty.mp4" />
            </video>
        </div>
    </header>

    <section id="welcome_section">
        <div class="tripidea">
            <h2><span>Trips Ideas this year</span></h2>
        </div>
    </section>
    <section id="slides">
        <div class="slides__images">
            <div class="slide_1">
                <div class="slide__info">
                    <p>Sagarmatha Base Camp</p>
                </div>
            </div>
            <div class="slide_1 slide_2">
                <div class="slide__info">
                    <p>Lumbini</p>
                </div>
            </div>
            <div class="slide_1 slide_3">
                <div class="slide__info">
                    <p>Swaymbu</p>
                </div>
            </div>
            <div class="slide_1 slide_4">
                <div class="slide__info">
                    <p>Mustang</p>
                </div>
            </div>
            <div class="slide_1 slide_5">
                <div class="slide__info">
                    <p>Shey Phoksundo</p>
                </div>
            </div>
            <div class="slide_1 slide_6">
                <div class="slide__info">
                    <p>Pokhara</p>
                </div>
            </div>
            <div class="slide_1 slide_7">
                <div class="slide__info">
                    <p>Gorkha</p>
                </div>
            </div>
        </div>
    </section>

    <section id="festival">
        <div class="festival__image">
                <h3 class="festival__title">Be part of local festivals</h3>
                <div class="button__festival">
                   <a href="#festival" class="fest-btn">Read More</a>
                </div>
            </div>
    </section>

    <section id="thingstodo">
        <div class="todotitle">
            <h2>Things to do</h2>
        </div>
        <div class="todo">
            <div class="activities">
                <div class="activities__image">
                    <img src="media/images/raftty.jpg" alt="This is things to do image">
                </div>
                <div class="activities__desc">
                    <h3>Rafting</h3>
                    
                </div>
            </div>
            <div class="activities">
                <div class="activities__image">
                    <img src="media/images/zipfly.jpg" alt="This is things to do image">
                </div>
                <div class="activities__desc">
                    <h3>Zipfly</h3>
                </div>
            </div>
            <div class="activities">
                <div class="activities__image">
                    <img src="media/images/paragliding.jpg" alt="This is things to do image">
                </div>
                <div class="activities__desc">
                    <h3>Paragliding</h3>
                </div>
            </div>
            <div class="activities">
                <div class="activities__image">
                    <img src="media/images/mountainbiking.jpg" alt="This is things to do image">
                </div>
                <div class="activities__desc">
                    <h3>Mountain Biking</h3>
                    
                </div>
            </div>
            <div class="activities">
                <div class="activities__image">
                    <img src="media/images/trekk.jpg" alt="This is things to do image">
                </div>
                <div class="activities__desc">
                    <h3>Trekking</h3>
                    
                </div>
                    
            </div>
            <div class="activities">
                <div class="activities__image">
                    <img src="media/images/temple.jpg" alt="This is things to do image">
                </div>
                <div class="activities__desc">
                    <h3>Heritage Walks</h3>
            
                </div>
            </div>
            <div class="activities">
                <div class="activities__image">
                    <img src="media/images/safari.jpg" alt="This is things to do image">
                </div>
                <div class="activities__desc">
                    <h3>Jungle Safari</h3>
            
                </div>
            </div>
        </div>
    </section>

    <section id="about">
        <div class="aboutus">
            <div class="about__title">
                <h2>About Us</h2>
            </div>
            <div class="about__desc">
                <p>
                We aim to inspire and guide travelers seeking the breathtaking beauty and rich cultural heritage of Nepal. Our platform provides curated information on Nepal's top destinations, adventurous activities, and unique festivals, helping you create unforgettable experiences. From the towering Himalayas to serene temples, Nepal offers something for every traveler. Let us be your companion in exploring this incredible country, ensuring your journey is memorable and seamless.
                </p>
            </div>
        </div>
    </section>

    <footer>
        <div class="footer">
            <div class="footer__logo">
                <a href="welcome.php">
                    <h2>Nirvana Nepal</h2>
                    <p>Kathmandu, Nepal</p>
                </a>
            </div>
            <div class="footer__follow">
                <h3>Follow Us</h3>
                <div class="footer__icons">
                    <ul>
                        <li><a href="www.facebook.com"><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href="www.instagram.com"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="www.twitter.com"><i class="fa-brands fa-x-twitter"></i></a></li>
                        <li><a href="www.tiktok.com"><i class="fa-brands fa-tiktok"></i></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer__more">
                <h3>Get in Touch</h3>
                <div class="footer__more__icons">
                    <div class="footer__phone">
                        <i class="fa-solid fa-phone"></i>
                        <p>+977-9861566979</p>
                    </div>
                    <div class="footer__phone">
                        <a href="mailto:nirvananepal@gmail.com" class="email-link">
                            <i class="fa-solid fa-envelope"></i>
                            <span>nirvananepal@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
    </footer>


    <!-- javascript for nav to postion fixed when scrolling the site -->
    <script>
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 100) {
                $('nav').addClass('nav-fixed');
            } else {
                $('nav').removeClass('nav-fixed');
            }
        });
    </script>
</body>
</html>
