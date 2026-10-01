<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=0.9, shrink-to-fit=no" />
		<title>Play Free Games Now!</title>
        <link rel="canonical" href="https://freegames.io/" />
		<meta name="description" content="Play free games online! Web games in your browser! Free Games has the best online game selection of io games, sports games, and puzzle games">
						<link rel="stylesheet" type="text/css" href="https://freegames.io/content/themes/bluewizard-theme/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="https://freegames.io/content/themes/bluewizard-theme/css/jquery-comments.css" />
		<link rel="stylesheet" type="text/css" href="https://freegames.io/content/themes/bluewizard-theme/css/user.css" />
		<link rel="stylesheet" type="text/css" href="https://freegames.io/content/themes/bluewizard-theme/css/style.css" />
		<link rel="stylesheet" type="text/css" href="https://freegames.io/content/themes/bluewizard-theme/css/custom.css" />
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css" />
		<!-- Font Awesome icons (free version)-->
		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
		<!-- Google fonts-->
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
		<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XZD4TJ9773"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XZD4TJ9773', { cookie_flags: 'secure;samesite=none' });
</script><!-- AdinPlay Ads -->
<script>
  var aiptag = aiptag || {};
  aiptag.cmd = aiptag.cmd || [];
  aiptag.cmd.display = aiptag.cmd.display || [];
  aiptag.cmd.player = aiptag.cmd.player || [];

  // CMP tool settings
  aiptag.cmp = {
    show: true,
    position: "centered", // Options: 'centered' or 'bottom'
    button: true,
    buttonText: "Privacy settings",
    buttonPosition: "bottom-left" // Options: 'bottom-left', 'bottom-right', 'top-left', 'top-right'
  };

  // Function to check and set user properties based on aiptag.stack
  function fn() {
    // Check if aiptag exists and stack is defined
    if (typeof aiptag !== 'undefined' && aiptag.stack) {
      if (aiptag.stack === "prosper") {
        gtag('set', 'user_properties', {
          'aip_stack': 'prosper'
        });
      } else if (aiptag.stack === "legacy-aip") {
        gtag('set', 'user_properties', {
          'aip_stack': 'legacy'
        });
      }
    } else {
      // Retry function if aiptag or aiptag.stack isn't available yet
      setTimeout(() => {
        fn();
      }, 100);
    }
  }

  // Wait until DOM is fully loaded before running the function
  document.addEventListener('DOMContentLoaded', fn, false);
</script>

<!-- Load the AdinPlay script asynchronously -->
<script async src="//api.adinplay.com/libs/aiptag/pub/SSK/freegames.io/tag.min.js"></script><!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NDZJBJK');</script>
<!-- End Google Tag Manager -->		<script>
	aiptag.cmd.player.push(function() {
		aiptag.adplayer = new aipPlayer({
			AD_WIDTH: 960,
			AD_HEIGHT: 540,
			AD_DISPLAY: 'default', //default, fullscreen, fill, center, modal-center
			LOADING_TEXT: 'loading advertisement',
			PREROLL_ELEM: function() {
				return document.getElementById('aip-video-ad');
			},
			AIP_COMPLETE: function(state) {
				videoAdFinished(state);
				// alert("Video Ad Completed: " + state);
			}
		});
	});

	function overlayShow(show) {
		const overlay = document.getElementById('free-games-overlay');
		if (overlay) {
			overlay.style.display = show ? 'block' : 'none';
			const html = document.documentElement;
			html.classList.toggle('overflow-hidden', show);
		}
	}

	function show_videoad() {
		overlayShow(true);

		if (typeof aiptag.adplayer !== 'undefined') {
			aiptag.cmd.player.push(function() {
				aiptag.adplayer.startVideoAd();
			});
		} else {
			videoAdFinished('error');
		}
	}

	function videoAdFinished(state) {
		console.log('Video Ad Finished: ' + state);
		overlayShow(false);
		const iframe = document.getElementById('game-area');
		iframe.contentWindow.postMessage('aipRemoveSplash', '*');
	}
</script>	</head>
	<body id="page-top">
		<!-- Navigation-->
		<nav class="navbar navbar-expand-lg navbar-dark top-nav sticky-top" id="mainNav">
			<div class="container-fluid">
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<a class="navbar-brand js-scroll-trigger" href="https://freegames.io/"><img src="https://freegames.io/images/site-logo.png" class="site-logo" alt="site-logo"></a>
				<div class="d-lg-none">
														</div>
				<div class="navbar-collapse collapse justify-content-end" id="nav-menu">
					<ul class="navbar-nav">
											</ul>
					<nav class="mt-4 d-lg-none">
						<ul class="custom-category-list category-list-wrapper"><a href="https://freegames.io/category/io-games">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="io Games" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">io Games</span>
			<!-- <div class="cat-game-amount">102 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/sports">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/sport.svg" alt="Sports" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Sports</span>
			<!-- <div class="cat-game-amount">33 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/action">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/actions.svg" alt="Action" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Action</span>
			<!-- <div class="cat-game-amount">77 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/casual">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/casual.svg" alt="Casual" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Casual</span>
			<!-- <div class="cat-game-amount">105 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/puzzle">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/puzzle.svg" alt="Puzzle" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Puzzle</span>
			<!-- <div class="cat-game-amount">69 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/arcade">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/arcade.svg" alt="Arcade" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Arcade</span>
			<!-- <div class="cat-game-amount">65 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/survival">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Survival" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Survival</span>
			<!-- <div class="cat-game-amount">40 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/adventure">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/adventure.svg" alt="Adventure" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Adventure</span>
			<!-- <div class="cat-game-amount">59 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/match-3">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/match-3.svg" alt="Match 3" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Match 3</span>
			<!-- <div class="cat-game-amount">12 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/minecraft">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Minecraft" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Minecraft</span>
			<!-- <div class="cat-game-amount">8 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/2-player-games">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="2 Player" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">2 Player</span>
			<!-- <div class="cat-game-amount">29 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/cards">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/cards.svg" alt="Cards" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Cards</span>
			<!-- <div class="cat-game-amount">7 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/classics">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/classic.svg" alt="Classics" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Classics</span>
			<!-- <div class="cat-game-amount">17 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/dress-up">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Dress-up" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Dress-up</span>
			<!-- <div class="cat-game-amount">3 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/driving-games">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Driving" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Driving</span>
			<!-- <div class="cat-game-amount">31 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/educational">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Educational" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Educational</span>
			<!-- <div class="cat-game-amount">17 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/hypercasual">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/casual.svg" alt="Hypercasual" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Hypercasual</span>
			<!-- <div class="cat-game-amount">10 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/mobile">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Mobile" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Mobile</span>
			<!-- <div class="cat-game-amount">155 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/multiplayer">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/multiplayer.svg" alt="Multiplayer" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Multiplayer</span>
			<!-- <div class="cat-game-amount">54 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/quiz">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/quiz.svg" alt="Quiz" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Quiz</span>
			<!-- <div class="cat-game-amount">6 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/racing">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/racing.svg" alt="Racing" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Racing</span>
			<!-- <div class="cat-game-amount">22 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/shooting-games">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Shooting" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Shooting</span>
			<!-- <div class="cat-game-amount">48 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/snake-games">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Snake" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Snake</span>
			<!-- <div class="cat-game-amount">10 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/strategy">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Strategy" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Strategy</span>
			<!-- <div class="cat-game-amount">30 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/trivia">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/trivia.svg" alt="Trivia" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Trivia</span>
			<!-- <div class="cat-game-amount">9 games</div> -->
		</div>
	</li>
</a></ul>					</nav>
					<form class="form-inline my-2 my-lg-0 search-bar" action="/index.php">
						<div class="input-group">
							<input type="hidden" name="viewpage" value="search" />
							<i class="bi bi-search"></i>
							<input type="text" class="form-control search" placeholder="Search game" name="slug" minlength="2" required />
						</div>
					</form>
					<nav class="d-flex gap-3">
						<a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" title="Show math"><i class="free-games-icon bi text-warning bi-eye-slash"></i></a>
						<a href="https://discord.com/invite/bluewizard" target="_blank" title="Go to Blue Wizard Discord"><i class="free-games-icon bi bi-discord"></i></a>
						<a href="https://bluewizard.com/subscribe-to-bwd" target="_blank" title="Subscribe to newsletter!"><i class="free-games-icon bi bi-envelope-fill"></i></a>
					</nav>
				</div>
				<div class="d-none d-lg-flex">
														</div>
			</div>
		</nav>
<div class="container-fluid px-4">
	<div class="row">
		<div class="sidebar col-sm-12 col-md-2 d-none d-lg-block">
	<div class="category-list-global sticky-top">
		<ul class="custom-category-list category-list-wrapper"><a href="https://freegames.io/category/io-games">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="io Games" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">io Games</span>
			<!-- <div class="cat-game-amount">102 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/sports">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/sport.svg" alt="Sports" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Sports</span>
			<!-- <div class="cat-game-amount">33 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/action">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/actions.svg" alt="Action" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Action</span>
			<!-- <div class="cat-game-amount">77 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/casual">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/casual.svg" alt="Casual" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Casual</span>
			<!-- <div class="cat-game-amount">105 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/puzzle">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/puzzle.svg" alt="Puzzle" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Puzzle</span>
			<!-- <div class="cat-game-amount">69 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/arcade">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/arcade.svg" alt="Arcade" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Arcade</span>
			<!-- <div class="cat-game-amount">65 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/survival">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Survival" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Survival</span>
			<!-- <div class="cat-game-amount">40 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/adventure">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/adventure.svg" alt="Adventure" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Adventure</span>
			<!-- <div class="cat-game-amount">59 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/match-3">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/match-3.svg" alt="Match 3" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Match 3</span>
			<!-- <div class="cat-game-amount">12 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/minecraft">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Minecraft" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Minecraft</span>
			<!-- <div class="cat-game-amount">8 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/2-player-games">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="2 Player" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">2 Player</span>
			<!-- <div class="cat-game-amount">29 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/cards">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/cards.svg" alt="Cards" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Cards</span>
			<!-- <div class="cat-game-amount">7 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/classics">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/classic.svg" alt="Classics" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Classics</span>
			<!-- <div class="cat-game-amount">17 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/dress-up">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Dress-up" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Dress-up</span>
			<!-- <div class="cat-game-amount">3 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/driving-games">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Driving" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Driving</span>
			<!-- <div class="cat-game-amount">31 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/educational">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Educational" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Educational</span>
			<!-- <div class="cat-game-amount">17 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/hypercasual">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/casual.svg" alt="Hypercasual" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Hypercasual</span>
			<!-- <div class="cat-game-amount">10 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/mobile">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Mobile" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Mobile</span>
			<!-- <div class="cat-game-amount">155 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/multiplayer">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/multiplayer.svg" alt="Multiplayer" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Multiplayer</span>
			<!-- <div class="cat-game-amount">54 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/quiz">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/quiz.svg" alt="Quiz" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Quiz</span>
			<!-- <div class="cat-game-amount">6 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/racing">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/racing.svg" alt="Racing" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Racing</span>
			<!-- <div class="cat-game-amount">22 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/shooting-games">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Shooting" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Shooting</span>
			<!-- <div class="cat-game-amount">48 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/snake-games">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Snake" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Snake</span>
			<!-- <div class="cat-game-amount">10 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/strategy">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/other.svg" alt="Strategy" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Strategy</span>
			<!-- <div class="cat-game-amount">30 games</div> -->
		</div>
	</li>
</a><a href="https://freegames.io/category/trivia">
	<li class="cat-item">
		<span class="icon-category">
			<img src="https://freegames.io/content/themes/bluewizard-theme/images/icon/trivia.svg" alt="Trivia" width="40" height="40">
		</span>
		<div class="cat-info">
			<span class="cat-name">Trivia</span>
			<!-- <div class="cat-game-amount">9 games</div> -->
		</div>
	</li>
</a></ul>	</div>
</div>
		<div class="main-content col">
			<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDZJBJK"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
          	<!-- Featured Games section -->
			<h3 class="section-title"><img src="https://freegames.io/files/images/freegames_robot.png" width="30" height="30"> Featured Games</h3>
			<div class="row grid-container">
				<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://gulfguardian.io/">
	<a id="game-id-391-36149340"  href="https://freegames.io/game/gulf-guardian" class="">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/gulf-guardian_2.jpg" class="small-thumb img-rounded lazy-game" alt="Gulf Guardian"></div>
				<div class="list-info">
					<div class="list-title">Gulf Guardian</div>
				</div>
			</div>
		</div>
	</a>
</div><div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://baseballbros.io/">
	<a id="game-id-387-282ddf9c" data-video-thumb="baseballbros2" href="https://freegames.io/game/baseball-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/baseball-bros_2.png" class="small-thumb img-rounded lazy-game" alt="Baseball Bros"></div>
				<div class="list-info">
					<div class="list-title">Baseball Bros</div>
				</div>
			</div>
		</div>
	</a>
</div><div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://simplegameslab.github.io/OrbitzGame11/">
	<a id="game-id-393-6f500f82"  href="https://freegames.io/game/orbitz" class="">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/games/orbitz/thumb_2.png" class="small-thumb img-rounded lazy-game" alt="ORBITZ"></div>
				<div class="list-info">
					<div class="list-title">ORBITZ</div>
				</div>
			</div>
		</div>
	</a>
</div><div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://deadshot.io/">
	<a id="game-id-165-186889e5" data-video-thumb="deadshot_compressed_ns" href="https://freegames.io/game/deadshot-io" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/512_dead_firefly_20240424161537.jpg" class="small-thumb img-rounded lazy-game" alt="Deadshot.io"></div>
				<div class="list-info">
					<div class="list-title">Deadshot.io</div>
				</div>
			</div>
		</div>
	</a>
</div><div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://kartbros.io/">
	<a id="game-id-386-6113b6d0" data-video-thumb="kartbros-video" href="https://freegames.io/game/kart-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/kart-bros_2.jpg" class="small-thumb img-rounded lazy-game" alt="Kart Bros"></div>
				<div class="list-info">
					<div class="list-title">Kart Bros</div>
				</div>
			</div>
		</div>
	</a>
</div><div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://powerline.io/">
	<a id="game-id-138-17644cec" data-video-thumb="powerline-io-video" href="https://freegames.io/game/powerline-io" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/powerline-io-powerline_sq-512.webp" class="small-thumb img-rounded lazy-game" alt="Powerline.io"></div>
				<div class="list-info">
					<div class="list-title">Powerline.io</div>
				</div>
			</div>
		</div>
	</a>
</div>			</div>
				<!-- Popular Games section -->
				<!-- Moved from Below the new games -->

			
		<h3 class="section-title"><img src="https://freegames.io/files/images/freegames_robot.png" width="30" height="30"> Most Popular Games</h3>
		<div class="row grid-container">
							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://shellshock.io">
	<a id="game-id-16-cc7975fc" data-video-thumb="shell-shockers-video2_1__compressed" href="https://freegames.io/game/shell-shockers" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/thumb_shellshockers_512_512.png" class="small-thumb img-rounded lazy-game" alt="Shell Shockers"></div>
				<div class="list-info">
					<div class="list-title">Shell Shockers</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://footballbros.io">
	<a id="game-id-371-2980773f" data-video-thumb="footballbros" href="https://freegames.io/game/football-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/football-bros_2.webp" class="small-thumb img-rounded lazy-game" alt="Football Bros"></div>
				<div class="list-info">
					<div class="list-title">Football Bros</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://deadshot.io/">
	<a id="game-id-165-cbf4ebdd" data-video-thumb="deadshot_compressed_ns" href="https://freegames.io/game/deadshot-io" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/512_dead_firefly_20240424161537.jpg" class="small-thumb img-rounded lazy-game" alt="Deadshot.io"></div>
				<div class="list-info">
					<div class="list-title">Deadshot.io</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://badegg.io">
	<a id="game-id-17-5fdf6aaf" data-video-thumb="bad-egg-video_compressed" href="https://freegames.io/game/bad-egg" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/thumb_badegg_512_512.png" class="small-thumb img-rounded lazy-game" alt="Bad Egg"></div>
				<div class="list-info">
					<div class="list-title">Bad Egg</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://wrestlebros.io">
	<a id="game-id-10-4d4b683e" data-video-thumb="wrestle-bros-video_compressed" href="https://freegames.io/game/wrestle-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/thumb_wrestlebros_512_512.png" class="small-thumb img-rounded lazy-game" alt="Wrestle Bros"></div>
				<div class="list-info">
					<div class="list-title">Wrestle Bros</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://soccerbros.gg">
	<a id="game-id-146-c539dc64" data-video-thumb="soccer-bros-video_compressed" href="https://freegames.io/game/soccer-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/firefly_20240424114324.png" class="small-thumb img-rounded lazy-game" alt="Soccer Bros"></div>
				<div class="list-info">
					<div class="list-title">Soccer Bros</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://basketbros.io">
	<a id="game-id-11-d0fe4257" data-video-thumb="basketbros" href="https://freegames.io/game/basket-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/thumb_basketbros_512_512.png" class="small-thumb img-rounded lazy-game" alt="Basket Bros"></div>
				<div class="list-info">
					<div class="list-title">Basket Bros</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://sandstrike.io">
	<a id="game-id-133-bf3cea47" data-video-thumb="sand_compressed" href="https://freegames.io/game/sandstrike" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/modernstrike_512x512.png" class="small-thumb img-rounded lazy-game" alt="SandStrike"></div>
				<div class="list-info">
					<div class="list-title">SandStrike</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://smashkarts.io">
	<a id="game-id-19-985f96e6" data-video-thumb="smash_compressed" href="https://freegames.io/game/smash-karts" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/512_smash.jpg" class="small-thumb img-rounded lazy-game" alt="Smash Karts"></div>
				<div class="list-info">
					<div class="list-title">Smash Karts</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://blockcraft.online/">
	<a id="game-id-166-6bd69401" data-video-thumb="miniblox" href="https://freegames.io/game/miniblox" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/miniblox_512.jpg" class="small-thumb img-rounded lazy-game" alt="MiniBlox"></div>
				<div class="list-info">
					<div class="list-title">MiniBlox</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/a55c9cc9c21e4fc683c8c6857f3d0c75/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-111-2c716fa9" data-video-thumb="fire_water_3_compressed" href="https://freegames.io/game/fireboy-and-watergirl-1-forest-temple" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/fireboy-and-watergirl-1-forest-temple-a55c9cc9c21e4fc683c8c6857f3d0c75-512x512.webp" class="small-thumb img-rounded lazy-game" alt="Fireboy and Watergirl 1 Forest Temple"></div>
				<div class="list-info">
					<div class="list-title">Fireboy and Watergirl 1 Forest Temple</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://kour.io/">
	<a id="game-id-369-a34afda1"  href="https://freegames.io/game/kour-io" class="">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/kour-io_2.webp" class="small-thumb img-rounded lazy-game" alt="Kour.io"></div>
				<div class="list-info">
					<div class="list-title">Kour.io</div>
				</div>
			</div>
		</div>
	</a>
</div>					</div>

					<!-- Trending section -->
			<!-- Moved to BELOW new games -->
          
			<!-- New games section -->
			<h3 class="section-title"><img src="https://freegames.io/files/images/freegames_robot.png" width="30" height="30"> New Games</h3>			<div class="row gx-5 grid-container" id="new-games-section">
									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://simplegameslab.github.io/OrbitzGame11/">
	<a id="game-id-393-31581251"  href="https://freegames.io/game/orbitz" class="">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/games/orbitz/thumb_2.png" class="small-thumb img-rounded lazy-game" alt="ORBITZ"></div>
				<div class="list-info">
					<div class="list-title">ORBITZ</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://gulfguardian.io/">
	<a id="game-id-391-3b8989a2"  href="https://freegames.io/game/gulf-guardian" class="">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/gulf-guardian_2.jpg" class="small-thumb img-rounded lazy-game" alt="Gulf Guardian"></div>
				<div class="list-info">
					<div class="list-title">Gulf Guardian</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://playcrossbird.com/">
	<a id="game-id-390-d65fe1ee"  href="https://freegames.io/game/crossbird" class="">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/crossbird_2.jpg" class="small-thumb img-rounded lazy-game" alt="CrossBird"></div>
				<div class="list-info">
					<div class="list-title">CrossBird</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://playsecretcode.com/">
	<a id="game-id-389-a129df33"  href="https://freegames.io/game/secret-code" class="">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/secret-code_2.jpg" class="small-thumb img-rounded lazy-game" alt="Secret Code"></div>
				<div class="list-info">
					<div class="list-title">Secret Code</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://www.popsafari.net/">
	<a id="game-id-388-eec180da"  href="https://freegames.io/game/pop-safari" class="">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/pop-safari_2.png" class="small-thumb img-rounded lazy-game" alt="Pop Safari"></div>
				<div class="list-info">
					<div class="list-title">Pop Safari</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://baseballbros.io/">
	<a id="game-id-387-2a876176" data-video-thumb="baseballbros2" href="https://freegames.io/game/baseball-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/baseball-bros_2.png" class="small-thumb img-rounded lazy-game" alt="Baseball Bros"></div>
				<div class="list-info">
					<div class="list-title">Baseball Bros</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://kartbros.io/">
	<a id="game-id-386-9bb57d31" data-video-thumb="kartbros-video" href="https://freegames.io/game/kart-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/kart-bros_2.jpg" class="small-thumb img-rounded lazy-game" alt="Kart Bros"></div>
				<div class="list-info">
					<div class="list-title">Kart Bros</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://splatoon.io/">
	<a id="game-id-385-81d25b1e" data-video-thumb="thumbnailvideo" href="https://freegames.io/game/splatoon-io" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/splatoon-io_2.png" class="small-thumb img-rounded lazy-game" alt="Splatoon.io"></div>
				<div class="list-info">
					<div class="list-title">Splatoon.io</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://eonfall.com/play">
	<a id="game-id-384-aa521b43"  href="https://freegames.io/game/eonfall" class="">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/eonfall_2.png" class="small-thumb img-rounded lazy-game" alt="Eonfall"></div>
				<div class="list-info">
					<div class="list-title">Eonfall</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://cwl.proclive.io">
	<a id="game-id-383-361e914e"  href="https://freegames.io/game/castle-wars-legacy" class="">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/castle-wars-legacy_2.png" class="small-thumb img-rounded lazy-game" alt="Castle Wars: Legacy"></div>
				<div class="list-info">
					<div class="list-title">Castle Wars: Legacy</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/2825d56c03fc49918c47c104a6c170ca/?gd_sdk_referrer_url=https://freegames.io/game/fillwords-find-all-the-words">
	<a id="game-id-382-7893613b" data-video-thumb="fillwords" href="https://freegames.io/game/fillwords-find-all-the-words" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/fillwords-find-all-the-words_2.webp" class="small-thumb img-rounded lazy-game" alt="Fillwords: Find All the Words"></div>
				<div class="list-info">
					<div class="list-title">Fillwords: Find All the Words</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/096146cf258d4000a0ac904766059294/?gd_sdk_referrer_url=https://freegames.io/game/ninja-dash-cozy-tactic-puzzle">
	<a id="game-id-381-af858bca"  href="https://freegames.io/game/ninja-dash-cozy-tactic-puzzle" class="">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/ninja-dash-cozy-tactic-puzzle_2.webp" class="small-thumb img-rounded lazy-game" alt="Ninja dash Cozy tactic puzzle"></div>
				<div class="list-info">
					<div class="list-title">Ninja dash Cozy tactic puzzle</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://www.tripgeo.com/scrambledmaps">
	<a id="game-id-380-296b0b65"  href="https://freegames.io/game/scrambled-maps" class="">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/scrambled-maps_2.webp" class="small-thumb img-rounded lazy-game" alt="Scrambled Maps"></div>
				<div class="list-info">
					<div class="list-title">Scrambled Maps</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://typingbowl.com/">
	<a id="game-id-379-eb1a986d" data-video-thumb="typing-bowl" href="https://freegames.io/game/typing-bowl" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/typing-bowl_2.webp" class="small-thumb img-rounded lazy-game" alt="Typing Bowl"></div>
				<div class="list-info">
					<div class="list-title">Typing Bowl</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/70e4504d160745999f83669d13e86a0b/?gd_sdk_referrer_url=https://freegames.io/game/airways-maze">
	<a id="game-id-377-4eaa2165" data-video-thumb="airways-comp" href="https://freegames.io/game/airways-maze" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/airways-maze_2.webp" class="small-thumb img-rounded lazy-game" alt="Airways Maze"></div>
				<div class="list-info">
					<div class="list-title">Airways Maze</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/15622637a8f1434fb43b1273cd1e163a/?gd_sdk_referrer_url=https://freegames.io/game/dog-escape">
	<a id="game-id-376-f0b8b5b9" data-video-thumb="dog-escape" href="https://freegames.io/game/dog-escape" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/dog-escape_2.webp" class="small-thumb img-rounded lazy-game" alt="Dog Escape"></div>
				<div class="list-info">
					<div class="list-title">Dog Escape</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/5fd7ae34b61c42649aecb9a0ea44e572/?gd_sdk_referrer_url=https://freegames.io/game/dynamons-8/">
	<a id="game-id-375-ddcd0c89"  href="https://freegames.io/game/dynamons-8" class="">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/dynamons-8_2.webp" class="small-thumb img-rounded lazy-game" alt="Dynamons 8"></div>
				<div class="list-info">
					<div class="list-title">Dynamons 8</div>
				</div>
			</div>
		</div>
	</a>
</div>									<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/25d7537b06534084b44aa672007645cc/?gd_sdk_referrer_url=https://freegames.io/game/jab-jab-boxing">
	<a id="game-id-374-057c1d91" data-video-thumb="jibjabboxing" href="https://freegames.io/game/jab-jab-boxing" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/jab-jab-boxing_2.webp" class="small-thumb img-rounded lazy-game" alt="Jab Jab Boxing"></div>
				<div class="list-info">
					<div class="list-title">Jab Jab Boxing</div>
				</div>
			</div>
		</div>
	</a>
</div>							</div>
			<div class="b-load-more text-center">
				<button class="btn btn-load-more btn-md" id="load-more1">Load More</button>
			</div>

					<h3 class="section-title"><img src="https://freegames.io/files/images/freegames_robot.png" width="30" height="30"> Trending</h3>
		<div class="row-list-1 grid-container">
			<div class="list-1-wrapper">
									<div class="game-item list-1">
	<a href="https://freegames.io/game/deadshot-io">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/files/images/512_dead_firefly_20240424161537.jpg" class="small-thumb img-rounded" alt="Deadshot.io"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/shell-shockers">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/files/images/thumb_shellshockers_512_512.png" class="small-thumb img-rounded" alt="Shell Shockers"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/ev-io">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/files/images/ev_512.jpg" class="small-thumb img-rounded" alt="ev.io"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/kart-bros">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/thumbs/kart-bros_2.jpg" class="small-thumb img-rounded" alt="Kart Bros"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/smash-karts">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/files/images/512_smash.jpg" class="small-thumb img-rounded" alt="Smash Karts"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/baseball-bros">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/thumbs/baseball-bros_2.png" class="small-thumb img-rounded" alt="Baseball Bros"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/basket-bros">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/files/images/thumb_basketbros_512_512.png" class="small-thumb img-rounded" alt="Basket Bros"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/football-bros">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/thumbs/football-bros_2.webp" class="small-thumb img-rounded" alt="Football Bros"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/kour-io">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/thumbs/kour-io_2.webp" class="small-thumb img-rounded" alt="Kour.io"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/sandstrike">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/files/images/modernstrike_512x512.png" class="small-thumb img-rounded" alt="SandStrike"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/wrestle-bros">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/files/images/thumb_wrestlebros_512_512.png" class="small-thumb img-rounded" alt="Wrestle Bros"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/bad-egg">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/files/images/thumb_badegg_512_512.png" class="small-thumb img-rounded" alt="Bad Egg"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/taming-io">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/thumbs/taming-io-512x512.webp" class="small-thumb img-rounded" alt="Taming.io"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/bloxd">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/thumbs/bloxd-512.webp" class="small-thumb img-rounded" alt="Bloxd"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/moto-x3m-bike-race-game">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/thumbs/moto-x3m-bike-race-game-5b0abd4c0faa4f5eb190a9a16d5a1b4c-512x512.webp" class="small-thumb img-rounded" alt="Moto X3M Bike Race Game"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/krunker-io">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/files/images/krunker%20512x512.jpg" class="small-thumb img-rounded" alt="Krunker.io"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/soccer-bros">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/files/images/firefly_20240424114324.png" class="small-thumb img-rounded" alt="Soccer Bros"></div>
	</div>
	</a>
</div>									<div class="game-item list-1">
	<a href="https://freegames.io/game/skribbl-io">
	<div class="list-game">
		<div class="list-thumbnail"><img src="https://freegames.io/files/images/512_scribbl.png" class="small-thumb img-rounded" alt="Skribbl.io"></div>
	</div>
	</a>
</div>							</div>
				<button type="button" class="b-left btn btn-default btn-circle btn-lg" id="t-prev">
					<i class="bi bi-caret-left-fill"></i>
				</button>
				<button type="button" class="b-right btn btn-default btn-circle btn-lg" id="t-next">
					<i class="bi bi-caret-right-fill"></i>
				</button>
		</div>
		<br />
		
            <!-- Testing new category section -->
					<h3 class="section-title"><img src="https://freegames.io/files/images/freegames_robot.png" width="30" height="30"> Sports Games</h3>		<div class="row grid-container">
							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://footballbros.io">
	<a id="game-id-371-541850ff" data-video-thumb="footballbros" href="https://freegames.io/game/football-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/football-bros_2.webp" class="small-thumb img-rounded lazy-game" alt="Football Bros"></div>
				<div class="list-info">
					<div class="list-title">Football Bros</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://wrestlebros.io">
	<a id="game-id-10-92f33a28" data-video-thumb="wrestle-bros-video_compressed" href="https://freegames.io/game/wrestle-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/thumb_wrestlebros_512_512.png" class="small-thumb img-rounded lazy-game" alt="Wrestle Bros"></div>
				<div class="list-info">
					<div class="list-title">Wrestle Bros</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://soccerbros.gg">
	<a id="game-id-146-761cf4c8" data-video-thumb="soccer-bros-video_compressed" href="https://freegames.io/game/soccer-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/firefly_20240424114324.png" class="small-thumb img-rounded lazy-game" alt="Soccer Bros"></div>
				<div class="list-info">
					<div class="list-title">Soccer Bros</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://basketbros.io">
	<a id="game-id-11-d88f572e" data-video-thumb="basketbros" href="https://freegames.io/game/basket-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/thumb_basketbros_512_512.png" class="small-thumb img-rounded lazy-game" alt="Basket Bros"></div>
				<div class="list-info">
					<div class="list-title">Basket Bros</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/5b0abd4c0faa4f5eb190a9a16d5a1b4c/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-115-7d08fe44" data-video-thumb="moto_x3m_bike_race_game" href="https://freegames.io/game/moto-x3m-bike-race-game" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/moto-x3m-bike-race-game-5b0abd4c0faa4f5eb190a9a16d5a1b4c-512x512.webp" class="small-thumb img-rounded lazy-game" alt="Moto X3M Bike Race Game"></div>
				<div class="list-info">
					<div class="list-title">Moto X3M Bike Race Game</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://play.gamepix.com/fishing-online/embed?sid=4EASE">
	<a id="game-id-125-92628eca" data-video-thumb="fishing_simulator_online" href="https://freegames.io/game/fishing-simulator-online" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/fishing-simulator-online-medium.webp" class="small-thumb img-rounded lazy-game" alt="Fishing Simulator Online"></div>
				<div class="list-info">
					<div class="list-title">Fishing Simulator Online</div>
				</div>
			</div>
		</div>
	</a>
</div>					</div>
		<br />
							<h3 class="section-title"><img src="https://freegames.io/files/images/freegames_robot.png" width="30" height="30"> Driving Games</h3>		<div class="row grid-container">
							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://smashkarts.io">
	<a id="game-id-19-05d4fec2" data-video-thumb="smash_compressed" href="https://freegames.io/game/smash-karts" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/512_smash.jpg" class="small-thumb img-rounded lazy-game" alt="Smash Karts"></div>
				<div class="list-info">
					<div class="list-title">Smash Karts</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/571357d055374f078e471057d4fcdbea/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-55-34a0774e" data-video-thumb="bikes_1_" href="https://freegames.io/game/rider-io" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://img.gamedistribution.com/571357d055374f078e471057d4fcdbea-512x512.jpeg" class="small-thumb img-rounded lazy-game" alt="Rider.io"></div>
				<div class="list-info">
					<div class="list-title">Rider.io</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/337302b23b5943d8bcfc501d81d50cdb/?gd_sdk_referrer_url=https://freegames.io/">
	<a id="game-id-291-eafafca5" data-video-thumb="traffic_jam_3d" href="https://freegames.io/game/traffic-jam-3d" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/traffic_jam_3d_512.jpg" class="small-thumb img-rounded lazy-game" alt="Traffic Jam 3D"></div>
				<div class="list-info">
					<div class="list-title">Traffic Jam 3D</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://kartbros.io/">
	<a id="game-id-386-11848d4c" data-video-thumb="kartbros-video" href="https://freegames.io/game/kart-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/kart-bros_2.jpg" class="small-thumb img-rounded lazy-game" alt="Kart Bros"></div>
				<div class="list-info">
					<div class="list-title">Kart Bros</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/2c122cee7ef04222a962449e32a34e98/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-51-be98d3f3" data-video-thumb="asphalt_retro" href="https://freegames.io/game/asphalt-retro" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://img.gamedistribution.com/2c122cee7ef04222a962449e32a34e98-512x512.jpeg" class="small-thumb img-rounded lazy-game" alt="Asphalt Retro"></div>
				<div class="list-info">
					<div class="list-title">Asphalt Retro</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/f804d079d19f44d3b951ead4588e974a/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-81-2edf83a3" data-video-thumb="moto_x3m_bike_race_game" href="https://freegames.io/game/moto-x3m-pool-party" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://img.gamedistribution.com/f804d079d19f44d3b951ead4588e974a-512x512.jpeg" class="small-thumb img-rounded lazy-game" alt="Moto X3M Pool Party"></div>
				<div class="list-info">
					<div class="list-title">Moto X3M Pool Party</div>
				</div>
			</div>
		</div>
	</a>
</div>					</div>
		<br />
							<h3 class="section-title"><img src="https://freegames.io/files/images/freegames_robot.png" width="30" height="30"> Shooting Games</h3>		<div class="row grid-container">
							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://shellshock.io">
	<a id="game-id-16-465879d4" data-video-thumb="shell-shockers-video2_1__compressed" href="https://freegames.io/game/shell-shockers" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/thumb_shellshockers_512_512.png" class="small-thumb img-rounded lazy-game" alt="Shell Shockers"></div>
				<div class="list-info">
					<div class="list-title">Shell Shockers</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://deadshot.io/">
	<a id="game-id-165-69948e25" data-video-thumb="deadshot_compressed_ns" href="https://freegames.io/game/deadshot-io" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/512_dead_firefly_20240424161537.jpg" class="small-thumb img-rounded lazy-game" alt="Deadshot.io"></div>
				<div class="list-info">
					<div class="list-title">Deadshot.io</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://badegg.io">
	<a id="game-id-17-48660257" data-video-thumb="bad-egg-video_compressed" href="https://freegames.io/game/bad-egg" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/thumb_badegg_512_512.png" class="small-thumb img-rounded lazy-game" alt="Bad Egg"></div>
				<div class="list-info">
					<div class="list-title">Bad Egg</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://sandstrike.io">
	<a id="game-id-133-aa9e0e48" data-video-thumb="sand_compressed" href="https://freegames.io/game/sandstrike" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/modernstrike_512x512.png" class="small-thumb img-rounded lazy-game" alt="SandStrike"></div>
				<div class="list-info">
					<div class="list-title">SandStrike</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://kour.io/">
	<a id="game-id-369-3b6e6ab0"  href="https://freegames.io/game/kour-io" class="">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/kour-io_2.webp" class="small-thumb img-rounded lazy-game" alt="Kour.io"></div>
				<div class="list-info">
					<div class="list-title">Kour.io</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://krunker.io">
	<a id="game-id-75-c9367fa1" data-video-thumb="krunk_compressed_ns" href="https://freegames.io/game/krunker-io" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/krunker%20512x512.jpg" class="small-thumb img-rounded lazy-game" alt="Krunker.io"></div>
				<div class="list-info">
					<div class="list-title">Krunker.io</div>
				</div>
			</div>
		</div>
	</a>
</div>					</div>
		<br />
							<h3 class="section-title"><img src="https://freegames.io/files/images/freegames_robot.png" width="30" height="30"> Puzzle Games</h3>		<div class="row grid-container">
							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://bloxd.io">
	<a id="game-id-190-3b579d1f" data-video-thumb="bloxd_compressed_ns" href="https://freegames.io/game/bloxd" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/bloxd-512.webp" class="small-thumb img-rounded lazy-game" alt="Bloxd"></div>
				<div class="list-info">
					<div class="list-title">Bloxd</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://ispy.heihei.resn.co">
	<a id="game-id-271-c85c653a" data-video-thumb="i-spy" href="https://freegames.io/game/i-spy" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/i-spy_512.jpg" class="small-thumb img-rounded lazy-game" alt="i-Spy"></div>
				<div class="list-info">
					<div class="list-title">i-Spy</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/56da8a54fe204845b34ccff750d4a60b/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-102-c637aa6a" data-video-thumb="fire_water_3_compressed" href="https://freegames.io/game/fireboy---watergirl-6--fairy-tales" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/fireboy---watergirl-6--fairy-tales-56da8a54fe204845b34ccff750d4a60b-512x512.webp" class="small-thumb img-rounded lazy-game" alt="Fireboy & Watergirl 6: Fairy Tales"></div>
				<div class="list-info">
					<div class="list-title">Fireboy & Watergirl 6: Fairy Tales</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://bluewizard.com/nate/_games/slashycamp.php">
	<a id="game-id-15-28dcb982" data-video-thumb="slashy_camp" href="https://freegames.io/game/slashy-camp" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/thumb_slashycamp_512_512.png" class="small-thumb img-rounded lazy-game" alt="Slashy Camp"></div>
				<div class="list-info">
					<div class="list-title">Slashy Camp</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://play.gamepix.com/cut-the-rope/embed?sid=4EASE">
	<a id="game-id-32-a0d5f771" data-video-thumb="cut_the_rope" href="https://freegames.io/game/cut-the-rope" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://games.assets.gamepix.com/40071/thumbnail/medium.png" class="small-thumb img-rounded lazy-game" alt="Cut The Rope"></div>
				<div class="list-info">
					<div class="list-title">Cut The Rope</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/d17b6419e70140308d010ca5d74eba9a/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-136-87de6e54" data-video-thumb="banana_cat_escape" href="https://freegames.io/game/banana-cat-escape" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/banana-cat-escape-d17b6419e70140308d010ca5d74eba9a-512x512.webp" class="small-thumb img-rounded lazy-game" alt="Banana Cat Escape"></div>
				<div class="list-info">
					<div class="list-title">Banana Cat Escape</div>
				</div>
			</div>
		</div>
	</a>
</div>					</div>
		<br />
							<h3 class="section-title"><img src="https://freegames.io/files/images/freegames_robot.png" width="30" height="30"> Casual Games</h3>		<div class="row grid-container">
							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://powerline.io/">
	<a id="game-id-138-538b237a" data-video-thumb="powerline-io-video" href="https://freegames.io/game/powerline-io" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/powerline-io-powerline_sq-512.webp" class="small-thumb img-rounded lazy-game" alt="Powerline.io"></div>
				<div class="list-info">
					<div class="list-title">Powerline.io</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://ispy.heihei.resn.co">
	<a id="game-id-271-46804a7d" data-video-thumb="i-spy" href="https://freegames.io/game/i-spy" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/i-spy_512.jpg" class="small-thumb img-rounded lazy-game" alt="i-Spy"></div>
				<div class="list-info">
					<div class="list-title">i-Spy</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://hole-io.com/">
	<a id="game-id-177-34df1fc0" data-video-thumb="hole_compressed_ns" href="https://freegames.io/game/hole-io" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/hole512.jpg" class="small-thumb img-rounded lazy-game" alt="Hole.io"></div>
				<div class="list-info">
					<div class="list-title">Hole.io</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/1461d40bb77f48e6be72489959a1ac04/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-122-7a992fb5" data-video-thumb="parkour2_compressed" href="https://freegames.io/game/parkour-block-3d" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/parkour-block-3d-1461d40bb77f48e6be72489959a1ac04-512x512.webp" class="small-thumb img-rounded lazy-game" alt="Parkour Block 3D"></div>
				<div class="list-info">
					<div class="list-title">Parkour Block 3D</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/ec5a0aa39f5c4cd19d1e6153de22650d/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-217-b0c7a74b" data-video-thumb="only_up" href="https://freegames.io/game/only-up" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/only-up-ec5a0aa39f5c4cd19d1e6153de22650d-512x512.webp" class="small-thumb img-rounded lazy-game" alt="Only Up"></div>
				<div class="list-info">
					<div class="list-title">Only Up</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/337302b23b5943d8bcfc501d81d50cdb/?gd_sdk_referrer_url=https://freegames.io/">
	<a id="game-id-291-c2e16835" data-video-thumb="traffic_jam_3d" href="https://freegames.io/game/traffic-jam-3d" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/traffic_jam_3d_512.jpg" class="small-thumb img-rounded lazy-game" alt="Traffic Jam 3D"></div>
				<div class="list-info">
					<div class="list-title">Traffic Jam 3D</div>
				</div>
			</div>
		</div>
	</a>
</div>					</div>
		<br />
							<h3 class="section-title"><img src="https://freegames.io/files/images/freegames_robot.png" width="30" height="30"> Snake Games</h3>		<div class="row grid-container">
							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://powerline.io/">
	<a id="game-id-138-0a49ae9e" data-video-thumb="powerline-io-video" href="https://freegames.io/game/powerline-io" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/powerline-io-powerline_sq-512.webp" class="small-thumb img-rounded lazy-game" alt="Powerline.io"></div>
				<div class="list-info">
					<div class="list-title">Powerline.io</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/5dd0b18fb81d49da82ff459f08737390/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-119-800015dd" data-video-thumb="worm" href="https://freegames.io/game/worms-zone-a-slithery-snake" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/worms-zone-a-slithery-snake-5dd0b18fb81d49da82ff459f08737390-512x512.webp" class="small-thumb img-rounded lazy-game" alt="Worms Zone a Slithery Snake"></div>
				<div class="list-info">
					<div class="list-title">Worms Zone a Slithery Snake</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/24c7905f9e6b4b00bb7f1b7b1751b657/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-118-6b491efb" data-video-thumb="slither" href="https://freegames.io/game/slither-io---snake-io-game" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/slither-io---snake-io-game-24c7905f9e6b4b00bb7f1b7b1751b657-512x512.webp" class="small-thumb img-rounded lazy-game" alt="Slither.io : Snake io game"></div>
				<div class="list-info">
					<div class="list-title">Slither.io : Snake io game</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/2651a52596c64093b0309ff166d13a6f/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-120-e8cc1bc3" data-video-thumb="happy" href="https://freegames.io/game/happy-snakes" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/happy-snakes-2651a52596c64093b0309ff166d13a6f-512x512.webp" class="small-thumb img-rounded lazy-game" alt="Happy Snakes"></div>
				<div class="list-info">
					<div class="list-title">Happy Snakes</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/bde26e84b9414b40892cf4561368134d/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-53-38910153" data-video-thumb="slither_dragon.io" href="https://freegames.io/game/slither-dragon-io" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://img.gamedistribution.com/bde26e84b9414b40892cf4561368134d-512x512.jpeg" class="small-thumb img-rounded lazy-game" alt="Slither Dragon.io"></div>
				<div class="list-info">
					<div class="list-title">Slither Dragon.io</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/62014c3dd1dc4b13b8fb3013a8949639/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-117-64c47c7f" data-video-thumb="paper_snakes_2_" href="https://freegames.io/game/paper-snakes" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/paper-snakes-62014c3dd1dc4b13b8fb3013a8949639-512x512.webp" class="small-thumb img-rounded lazy-game" alt="Paper Snakes"></div>
				<div class="list-info">
					<div class="list-title">Paper Snakes</div>
				</div>
			</div>
		</div>
	</a>
</div>					</div>
		<br />
							<h3 class="section-title"><img src="https://freegames.io/files/images/freegames_robot.png" width="30" height="30"> Multiplayer Games</h3>		<div class="row grid-container">
							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://shellshock.io">
	<a id="game-id-16-40c65ea6" data-video-thumb="shell-shockers-video2_1__compressed" href="https://freegames.io/game/shell-shockers" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/thumb_shellshockers_512_512.png" class="small-thumb img-rounded lazy-game" alt="Shell Shockers"></div>
				<div class="list-info">
					<div class="list-title">Shell Shockers</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://deadshot.io/">
	<a id="game-id-165-2e816e32" data-video-thumb="deadshot_compressed_ns" href="https://freegames.io/game/deadshot-io" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/512_dead_firefly_20240424161537.jpg" class="small-thumb img-rounded lazy-game" alt="Deadshot.io"></div>
				<div class="list-info">
					<div class="list-title">Deadshot.io</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://wrestlebros.io">
	<a id="game-id-10-b4b85f2d" data-video-thumb="wrestle-bros-video_compressed" href="https://freegames.io/game/wrestle-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/thumb_wrestlebros_512_512.png" class="small-thumb img-rounded lazy-game" alt="Wrestle Bros"></div>
				<div class="list-info">
					<div class="list-title">Wrestle Bros</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://basketbros.io">
	<a id="game-id-11-493cb091" data-video-thumb="basketbros" href="https://freegames.io/game/basket-bros" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/thumb_basketbros_512_512.png" class="small-thumb img-rounded lazy-game" alt="Basket Bros"></div>
				<div class="list-info">
					<div class="list-title">Basket Bros</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://sandstrike.io">
	<a id="game-id-133-f3ad8c65" data-video-thumb="sand_compressed" href="https://freegames.io/game/sandstrike" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/modernstrike_512x512.png" class="small-thumb img-rounded lazy-game" alt="SandStrike"></div>
				<div class="list-info">
					<div class="list-title">SandStrike</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://smashkarts.io">
	<a id="game-id-19-22e17491" data-video-thumb="smash_compressed" href="https://freegames.io/game/smash-karts" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/512_smash.jpg" class="small-thumb img-rounded lazy-game" alt="Smash Karts"></div>
				<div class="list-info">
					<div class="list-title">Smash Karts</div>
				</div>
			</div>
		</div>
	</a>
</div>					</div>
		<br />
							<h3 class="section-title"><img src="https://freegames.io/files/images/freegames_robot.png" width="30" height="30"> Classic Games</h3>		<div class="row grid-container">
							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/5b0abd4c0faa4f5eb190a9a16d5a1b4c/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-115-b79a3115" data-video-thumb="moto_x3m_bike_race_game" href="https://freegames.io/game/moto-x3m-bike-race-game" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/moto-x3m-bike-race-game-5b0abd4c0faa4f5eb190a9a16d5a1b4c-512x512.webp" class="small-thumb img-rounded lazy-game" alt="Moto X3M Bike Race Game"></div>
				<div class="list-info">
					<div class="list-title">Moto X3M Bike Race Game</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://uno-online.io/">
	<a id="game-id-231-9c551d46" data-video-thumb="uno" href="https://freegames.io/game/uno-online" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/uno-online-uno_512.webp" class="small-thumb img-rounded lazy-game" alt="Uno Online"></div>
				<div class="list-info">
					<div class="list-title">Uno Online</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamemonetize.co/iz9n0kx3zqfl4mo657zpb5y7v7qfbxij/">
	<a id="game-id-282-e9cb7c84" data-video-thumb="plants_vs_zombies_tower_defence_game_1_" href="https://freegames.io/game/plants-vs-zombies-tower-defence-game" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/plants-vs-zombies-tower-defence-game-plants_vs_zombies-512x512.webp" class="small-thumb img-rounded lazy-game" alt="Plants vs Zombies Tower Defence Game"></div>
				<div class="list-info">
					<div class="list-title">Plants vs Zombies Tower Defence Game</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/a186dc9ac7f548f884db8ff54df6dd9f/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-218-a473e6dd" data-video-thumb="fruit_ninja" href="https://freegames.io/game/fruit-ninja" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/fruit-ninja-fruit_ninja_-_512x512.webp" class="small-thumb img-rounded lazy-game" alt="Fruit Ninja"></div>
				<div class="list-info">
					<div class="list-title">Fruit Ninja</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/6b8f1ea5393c4311ae800345c23deae3/?gd_sdk_referrer_url=https://freegames.io/game/pinball-simulator">
	<a id="game-id-356-97461e4e" data-video-thumb="pinball simulator" href="https://freegames.io/game/pinball-simulator" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/pinball-simulator_2.webp" class="small-thumb img-rounded lazy-game" alt="Pinball Simulator"></div>
				<div class="list-info">
					<div class="list-title">Pinball Simulator</div>
				</div>
			</div>
		</div>
	</a>
</div>							<div class=" col-4 col-md-4 col-xxl-2 grid-1" data-game-url="https://html5.gamedistribution.com/16882be2fefa4ea6a2d656e7ec4e5a06/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-130-6d06fa7e" data-video-thumb="jewel_block" href="https://freegames.io/game/jewel-block" class="game-has-video">
		<div class="game-item">
			<div class="list-game">
				<div class="list-thumbnail"><img data-src="https://freegames.io/thumbs/jewel-block-16882be2fefa4ea6a2d656e7ec4e5a06-512x512.webp" class="small-thumb img-rounded lazy-game" alt="Jewel Block"></div>
				<div class="list-info">
					<div class="list-title">Jewel Block</div>
				</div>
			</div>
		</div>
	</a>
</div>					</div>
		<br />
					
		<h3 class="section-title"><img src="https://freegames.io/files/images/freegames_robot.png" width="30" height="30"> You may also like</h3>
		<div class="row grid-container">
							<div class=" col-6 col-sm-6 col-xl-3 col-xxl-2 grid-3" data-game-url="https://html5.gamedistribution.com/15694b737e774b04ad92d185d5747718/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-240-3c335d71" data-video-thumb="bucket_crusher" href="https://freegames.io/game/bucket-crusher-" class="game-has-video">
	<div class="game-item">
		<div class="list-game">
			<div class="list-thumbnail"><img data-src="/thumbs/bucket-crusher--bucket_crusher_384.webp" alt="Bucket Crusher " class="lazy-game"></div>
			<div class="list-info">
				<div class="list-title">Bucket Crusher </div>
<!-- 				<span>4392 plays</span> -->
			</div>
		</div>
	</div>
	</a>
</div>							<div class=" col-6 col-sm-6 col-xl-3 col-xxl-2 grid-3" data-game-url="https://html5.gamedistribution.com/804bc8be4560455a9f42192ac9f1974b/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-135-baea78b5" data-video-thumb="classic_solitaire-_time_and_score" href="https://freegames.io/game/classic-solitaire--time-and-score" class="game-has-video">
	<div class="game-item">
		<div class="list-game">
			<div class="list-thumbnail"><img data-src="/thumbs/classic-solitaire--time-and-score-804bc8be4560455a9f42192ac9f1974b-512x384.webp" alt="Classic Solitaire: Time and Score" class="lazy-game"></div>
			<div class="list-info">
				<div class="list-title">Classic Solitaire: Time and Score</div>
<!-- 				<span>9487 plays</span> -->
			</div>
		</div>
	</div>
	</a>
</div>							<div class=" col-6 col-sm-6 col-xl-3 col-xxl-2 grid-3" data-game-url="https://html5.gamedistribution.com/d3e45d10678749aba5597b9975e86409/?gd_sdk_referrer_url=https://freegames.io/game/color-tunnel">
	<a id="game-id-361-ad82c343" data-video-thumb="color tunnel(1)" href="https://freegames.io/game/color-tunnel" class="game-has-video">
	<div class="game-item">
		<div class="list-game">
			<div class="list-thumbnail"><img data-src="/thumbs/color-tunnel_1.webp" alt="Color Tunnel" class="lazy-game"></div>
			<div class="list-info">
				<div class="list-title">Color Tunnel</div>
<!-- 				<span>7336 plays</span> -->
			</div>
		</div>
	</div>
	</a>
</div>							<div class=" col-6 col-sm-6 col-xl-3 col-xxl-2 grid-3" data-game-url="https://html5.gamedistribution.com/e070a105ee1944bab21795441760a839/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-61-4f01627a" data-video-thumb="bubble_shooter_free_2" href="https://freegames.io/game/bubble-shooter-free-2" class="game-has-video">
	<div class="game-item">
		<div class="list-game">
			<div class="list-thumbnail"><img data-src="https://img.gamedistribution.com/e070a105ee1944bab21795441760a839-512x384.jpeg" alt="Bubble Shooter Free 2" class="lazy-game"></div>
			<div class="list-info">
				<div class="list-title">Bubble Shooter Free 2</div>
<!-- 				<span>8655 plays</span> -->
			</div>
		</div>
	</div>
	</a>
</div>							<div class=" col-6 col-sm-6 col-xl-3 col-xxl-2 grid-3" data-game-url="https://html5.gamedistribution.com/0579e50d58c448f7aa88205b28c88ec4/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-5-8a516886" data-video-thumb="summer_match_3" href="https://freegames.io/game/summer-match-3" class="game-has-video">
	<div class="game-item">
		<div class="list-game">
			<div class="list-thumbnail"><img data-src="https://img.gamedistribution.com/0579e50d58c448f7aa88205b28c88ec4-512x384.jpeg" alt="Summer Match 3" class="lazy-game"></div>
			<div class="list-info">
				<div class="list-title">Summer Match 3</div>
<!-- 				<span>4575 plays</span> -->
			</div>
		</div>
	</div>
	</a>
</div>							<div class=" col-6 col-sm-6 col-xl-3 col-xxl-2 grid-3" data-game-url="https://html5.gamedistribution.com/a6e9188ac6fd4424a135dc637d1ccac3/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-114-45e73c87" data-video-thumb="cyberpunk_ninja_runner" href="https://freegames.io/game/cyberpunk-ninja-runner" class="game-has-video">
	<div class="game-item">
		<div class="list-game">
			<div class="list-thumbnail"><img data-src="/thumbs/cyberpunk-ninja-runner-a6e9188ac6fd4424a135dc637d1ccac3-512x384.webp" alt="Cyberpunk Ninja Runner" class="lazy-game"></div>
			<div class="list-info">
				<div class="list-title">Cyberpunk Ninja Runner</div>
<!-- 				<span>7263 plays</span> -->
			</div>
		</div>
	</div>
	</a>
</div>							<div class=" col-6 col-sm-6 col-xl-3 col-xxl-2 grid-3" data-game-url="https://html5.gamedistribution.com/5fd7ae34b61c42649aecb9a0ea44e572/?gd_sdk_referrer_url=https://freegames.io/game/dynamons-8/">
	<a id="game-id-375-66efdc7f"  href="https://freegames.io/game/dynamons-8" class="">
	<div class="game-item">
		<div class="list-game">
			<div class="list-thumbnail"><img data-src="/thumbs/dynamons-8_1.webp" alt="Dynamons 8" class="lazy-game"></div>
			<div class="list-info">
				<div class="list-title">Dynamons 8</div>
<!-- 				<span>9313 plays</span> -->
			</div>
		</div>
	</div>
	</a>
</div>							<div class=" col-6 col-sm-6 col-xl-3 col-xxl-2 grid-3" data-game-url="https://html5.gamedistribution.com/7f4ec93d20634af1b4c3c5dda07c43e0/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-233-bb37c6d1" data-video-thumb="offroad_island" href="https://freegames.io/game/offroad-island" class="game-has-video">
	<div class="game-item">
		<div class="list-game">
			<div class="list-thumbnail"><img data-src="/thumbs/offroad-island-7f4ec93d20634af1b4c3c5dda07c43e0-512x384.webp" alt="Offroad Island" class="lazy-game"></div>
			<div class="list-info">
				<div class="list-title">Offroad Island</div>
<!-- 				<span>7699 plays</span> -->
			</div>
		</div>
	</div>
	</a>
</div>							<div class=" col-6 col-sm-6 col-xl-3 col-xxl-2 grid-3" data-game-url="https://html5.gamedistribution.com/7694f2ba78484df4b2c78f704f70bea8/?gd_sdk_referrer_url=https://freegames.io">
	<a id="game-id-92-2fc0e23e" data-video-thumb="candy_match" href="https://freegames.io/game/candy-match" class="game-has-video">
	<div class="game-item">
		<div class="list-game">
			<div class="list-thumbnail"><img data-src="/thumbs/candy-match-7694f2ba78484df4b2c78f704f70bea8-512x384.webp" alt="Candy Match" class="lazy-game"></div>
			<div class="list-info">
				<div class="list-title">Candy Match</div>
<!-- 				<span>6458 plays</span> -->
			</div>
		</div>
	</div>
	</a>
</div>							<div class=" col-6 col-sm-6 col-xl-3 col-xxl-2 grid-3" data-game-url="https://html5.gamedistribution.com/95c4932d8f6d42688b0fa38274282a86/?gd_sdk_referrer_url=https://freegames.io/game/flip-bottle">
	<a id="game-id-299-cd58bbd1" data-video-thumb="flip_bottle" href="https://freegames.io/game/flip-bottle" class="game-has-video">
	<div class="game-item">
		<div class="list-game">
			<div class="list-thumbnail"><img data-src="/thumbs/flip-bottle-flip_bottle_384.webp" alt="Flip Bottle" class="lazy-game"></div>
			<div class="list-info">
				<div class="list-title">Flip Bottle</div>
<!-- 				<span>10538 plays</span> -->
			</div>
		</div>
	</div>
	</a>
</div>							<div class=" col-6 col-sm-6 col-xl-3 col-xxl-2 grid-3" data-game-url="https://bloxd.io">
	<a id="game-id-190-06495baa" data-video-thumb="bloxd_compressed_ns" href="https://freegames.io/game/bloxd" class="game-has-video">
	<div class="game-item">
		<div class="list-game">
			<div class="list-thumbnail"><img data-src="/thumbs/bloxd-384.webp" alt="Bloxd" class="lazy-game"></div>
			<div class="list-info">
				<div class="list-title">Bloxd</div>
<!-- 				<span>48267 plays</span> -->
			</div>
		</div>
	</div>
	</a>
</div>							<div class=" col-6 col-sm-6 col-xl-3 col-xxl-2 grid-3" data-game-url="https://html5.gamemonetize.com/b8wrbaovio35tcnpy9gf3d5gbi7e52bq/">
	<a id="game-id-202-b5e875a3" data-video-thumb="mini_farm" href="https://freegames.io/game/mini-farm" class="game-has-video">
	<div class="game-item">
		<div class="list-game">
			<div class="list-thumbnail"><img data-src="https://freegames.io/files/images/5jeysmptpc1l0u-400-300.jpg" alt="Mini farm" class="lazy-game"></div>
			<div class="list-info">
				<div class="list-title">Mini farm</div>
<!-- 				<span>7122 plays</span> -->
			</div>
		</div>
	</div>
	</a>
</div>					</div>

		            
            <div class="banner-ad-wrapper"><div class="banner-ad-content" style="padding: 20px 0; text-align: center;"><div id='freegames-io_970x250_2'>
    <script type='text/javascript'>
    aiptag.cmd.display.push(function() { aipDisplayTag.display('freegames-io_970x250_2'); });
    </script>
</div></div></div>			<div class="banner-ad-wrapper"><div class="banner-ad-content" style="padding: 20px 0; text-align: center;"><div id='freegames-io_970x250_2'>
    <script type='text/javascript'>
    aiptag.cmd.display.push(function() { aipDisplayTag.display('freegames-io_970x250_2'); });
    </script>
</div></div></div><strong><b>Check out the Best Free Games!</b></strong>
<br>
<p>
Are you ready to dive into the world of free online web games? FreeGames is the place to be for all the newest and most amazing free online games that you can play instantly. </p>

<p>At FreeGames.io, you can enjoy hours of non-stop fun <a href="/page/advantages-of-free-online-games"> without any interruptions or downloads</a>. Just open up your favorite web browser and get ready for an awesome free web game experience!</p>


<p>
FreeGames.io is jam-packed with fantastic <a href="/category/multiplayer">multiplayer games </a>that are sure to get your heart pumping. Join the active gaming communities and make new friends from all over the world. Our <a href="/category/io-games">.io games page</a> is the go-to destination for the <a href="/page/the-most-popular-io-games"> most popular</a> multiplayer adventures where you can team up with friends or challenge players from far and wide. </p>

<p>Are you excited to know which games are rocking the charts? Well, hold on to your seats, because here are some of our most popular games that you just can't miss:
<ul>
<li> <a href="/game/shell-shockers">Shell Shockers</a>: Get ready to crack some eggs in this wild and egg-citing shooter game!</li>
<li> <a href="/game/powerline-io">Powerline.io</a>: Navigate a neon-colored arena to strategically growing your line to outmaneuver opponents and dominate the leaderboard</li>
<li> <a href="/game/basket-bros">Basket Bros</a>: Step onto the court and show off your moves in this epic basketball 1v1.</li>
<li> <a href="/game/evowars-io">Evowars</a>: Unleash your inner warrior as you evolve and conquer in this thrilling adventure.</li>
<li> <a href="/game/moto-x3m-pool-party">Moto X3M</a>: Strap on your helmet and rev up your bike in this mind-blowing motocross challenge.</li>
<li> <a href="/game/smash-karts">Smash Karts</a>: Hop into your kart and race against other players in this super-fun karting fest.</li>
<li> <a href="/game/castles-cc">Castles.cc</a>: Become a master builder and create your own epic castles in this awesome game.</li>
</ul></p>
<p>
But wait, there's more! Whether you're into <a href="/category/casual-games">casual games</a>, <a href="/category/sports">sports games</a>, <a href="/category/puzzle">puzzle games</a>, or <a href="/category/shooting-games">shooting games</a>, you'll find them all at the top of any page. Simply choose your favorite category and dive right into the action!</p>

<p>And guess what? You can play our free web games on all sorts of devices! Whether you're using a super-powered desktop PC, a cool laptop, a Chromebook, or even the latest mobile device, we've got you covered.</p>
<p>
Got a game that you absolutely love, but can't find it on FreeGames.io? No worries! Just <a href="/cdn-cgi/l/email-protection#b2d4c0d7d7d5d3dfd7c1f2d0dec7d7c5dbc8d3c0d69cd1dddf">suggest the game to us</a>, and we'll do our best to make it happen. Happy gaming!! 
 <img src="/files/images/freegames_robot.png" alt="freegames robot" width="45"> </p>




            <br><br>

      </div>
			<!-- <div class="sidebar sidebar-secondary col-sm-12 col-md-2">
	<div class="banner-ad-wrapper sticky-top"><div class="banner-ad-content" style="padding: 0 0 20px; text-align: center;"><div id='freegames-io_300x600'>
    <script type='text/javascript'>
    aiptag.cmd.display.push(function() { aipDisplayTag.display('freegames-io_300x600'); });
    </script>
</div></div></div></div> -->
        		
	</div>
	<!-- .row -->
</div>
	<div class="free-games-offcanvas offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
		<div class="offcanvas-header">
			<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
		<div class="offcanvas-body">
				<img src="https://freegames.io/files/images/multiplication-table.png" alt="">
		</div>
		<!-- end offcanvas-body -->
	</div>
	<div id="free-games-overlay" class="overlay">
		<div id="aip-video-ad"></div>
	</div>
	<div class="container">
		<div class="border-line mt-4"></div>
	</div>
	<footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 mb-5 mb-lg-0">
					<a href="https://bluewizard.com/subscribe-to-bwd" target="_blank">Sign Up For Our Emails</a>
				</div>
				<div class="col-lg-4 mb-5 mb-lg-0">
					<a href="/cdn-cgi/l/email-protection#99b9ffebfcfcfef8f4fcead9fbf5ecfceef0e3f8ebfdb7faf6f4a6eaecfbf3fcfaedb9a4b9dfebfcfcdef8f4fceab7f0f6">Contact Us</a>				</div>
				<div class="col-lg-4">
					<a href = "/page/privacy-policy">Privacy Policy</a><a href="/page/game-faqs" style="padding-left: 200px;">Game FAQs</a>

				</div>
			</div>
		</div>
	</footer>
	<div class="footer-copyright py-4">
		<div class="container">
			Play Free Games Now! © 2026. All rights reserved.			<span class="dsb-panel">
				V-2.1.3			</span>
		</div>
	</div>
	<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script type="text/javascript" src="https://freegames.io/content/themes/bluewizard-theme/js/jquery-3.6.2.min.js"></script>
	<script type="text/javascript" src="https://freegames.io/content/themes/bluewizard-theme/js/popper.min.js"></script>
	<script type="text/javascript" src="https://freegames.io/content/themes/bluewizard-theme/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="https://freegames.io/js/jquery-comments.min.js"></script>
	<script type="text/javascript" src="https://freegames.io/content/themes/bluewizard-theme/js/script.js"></script>
	<script type="text/javascript" src="https://freegames.io/content/themes/bluewizard-theme/js/custom.js"></script>
	<script type="text/javascript" src="https://freegames.io/js/stats.js"></script>
	  </body>
</html>