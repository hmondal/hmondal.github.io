//Tewt write when the page was load
var currentdate = new Date();
run = [
  '<span class="indice">Run </span><span class="colored">Hritam Mondal</span>',
  '<span class="indice">[' +
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds() +
    "]</span>",
  'Welcome to you on my <span class="colored">portfolio<span>',
  "To start enter the command <span class=\"command\">'help'<span>"
];

//password
var password = "Linux";

// Text for the command 'Help'
help = [
  "<br>",
  '<span class="command">about</span>          Learn more about me',
//   '<span class="command">works</span>          Show my works',
  '<span class="command">social</span>         Displays social networks',
  '<span class="command">contact</span>        Get my email',
//   '<span class="command">credits</span>        Show the credits',
  '<span class="command">secret</span>         z?â—™â–‘â–“_da~â–’_*? <span class="indice">[' +password + "]<span>",
//   '<span class="command">download</span>       Download TerminalPortfolio',
    '<span class="command">shutdown</span>       Stop the machin',
    "<br>"
];
//Link for Download, Please don't change this
// var download = "http://valentinsld.fr/Terminal/TerminalPortfolio.rar";
// email
var email =
  '<a href="mailto:hritamcs@gmail.com">hritamcs@gmail.com</a>';

// Link to MyWebSite, Please don't change this
var MyWebSite = "http://hritammondal.github.io/";
// Text for the command 'about'
about = [
  "<br>",
  "Hello there !",
  "Hi, I'm Hritam Mondal 😉, web developer from Kolkata, India and it is me who is designed and developed this site.",
  "I like computers and think someday others will, too. I have rich experience in web site design, building and customization.",
  "I currently work as a Member Technical Staff at Mindteck (india) Limited. I have an eye for details and writing clean code.",
  "What I enjoy about Software Engineering is the ability to create something new and unique.",
  'Please don’t hesitate to contact me with any inquiries.',
  "<br>"
];

//link social
var github = "https://github.com/hritammondal";
var linkedin = "https://in.linkedin.com/in/hritam-mondal";
var twitter = "#";
var instagram = "#";
var behance = "#";

//social
social = [
  "<br>",
  'github         <a href="' + github + '" target="_blank">' + github + "</a>",
  'linkedin       <a href="' + linkedin + '" target="_blank">' + linkedin + "</a>",
//'twitter        <a href="' + twitter + '" target="_blank">'+ twitter + '</a>',
//'instagram      <a href="' + instagram + '" target="_blank">'+ instagram + '</a>',
//  'behance        <a href="' + behance + '" target="_blank">' + behance + "</a>",
  "<br>",
  '<span class="command">social github</span>  <span class="inherit">: open my github page</span>',
  "<br>"
];

//open windows
var openWindow = "new open window";

//works
// var worksOpen = "works open";
// var worksClos = "works close";

//credits
// credits = [
//   "<br>",
//   '<span class="margin">Developement By <a href="' + MyWebSite + '" target="_blank">valentin SLD</a>, student at Bordeaux Montaigne</span>',
//   '<span class="margin">Thanks to <a href="http://maximefreund.com/" target="_blank">Maxime Freund</a> for their help</span>',
//   '<span class="margin">Thanks to shachi for the script caret.js</span>',
//   '<span class="margin">Thanks to taye for the script <a href="https://interactjs.io/" target="_blank">interact.js</a> on Github</span>',
//   "<br>"
// ];

//secret
secret = [
  "<br>",
  '<span class="command">historic</span>       View my order history',
  '<span class="command">color</span>          Enter color with a number 0 to 8 for change the apparence',
  '<span class="command">clear</span>          reset commands',
  '<span class="command">shutdown</span>       Stop the machin',
  '<span class="command">ping</span>',
  "<br>"
];


//audio
var start = new Audio('sounds/start.mp4');
var closeFrame = new Audio('sounds/CloseWindows.wav');
var openFrame = new Audio('sounds/OpenWindow.wav');
var wrongCommand = new Audio('sounds/WrongCommand.wav');
var passwordEnter = new Audio('sounds/Password.wav');
var wrongPassword = new Audio('sounds/WrongPassword.wav');
var goodPassword = new Audio('sounds/GoodPassword.wav');
var closeS = new Audio('sounds/end.mp4');
var type1 = new Audio('sounds/type1.wav');
var type2 = new Audio('sounds/type2.wav');
var type3 = new Audio('sounds/type3.wav');
var type4 = new Audio('sounds/type4.wav');
var type5 = new Audio('sounds/type5.wav');
