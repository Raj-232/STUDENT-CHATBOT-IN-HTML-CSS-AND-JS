document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input");
  inputField.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      let input = inputField.value;
      inputField.value = "";
      output(input);
    }
  });
});

function output(input) {
  let product;

  // Regex remove non word/space chars
  // Trim trailing whitespce
  // Remove digits - not sure if this is best
  // But solves problem of entering something like 'hi1'

  let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
  text = text
    .replace(/ a /g, " ")   // 'tell me a story' -> 'tell me story'
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/which /g, "")
	.replace(/this /g, "")
	.replace(/the /g, "")
    .replace(/ please/g, "")
    .replace(/r u/g, "are you");

  if (compare(prompts, replies, text)) { 
    // Search for exact match in `prompts`
    product = compare(prompts, replies, text);} 
	else if (text.match(/(monday|tuesday|wednesday|thursady|friday|saturday)/gi)) {
    product = "working days"}
	else if (text.match(/(sunday)/gi)) {
    product = "not working days for college sunday is leave day"}
	else if (text.match(/(best departments|best department|good department|good departments)/gi)) {
    product = "all departments are good and best department"}
	else if (text.match(/ragging/gi)) {
    product = "no,there is no Ragging inside the College Premises  and Anti ragging cell incharge staffs CSE prof.G.Sona ECE Prof. K. Kalaiselvi mech Dr. S. Ananthakumar civil Dr.K.sumangala EEE Dr. G. Balasubramanian science and humanties Dr. M. Sabari  "}
    else if (text.match(/thank/gi)) {
    product = "You're welcome!"}
	 else if (text.match(/interview/gi)) {
    product = "campus interview are conducted on campus placement for students to get place in a company"}
	else if (text.match(/(seats|strength)/gi)) {
    product = "cse 60 seats mech 120 seats ece 120 seats civil 60 seats EEE 60 seats"}
	else if (text.match(/tamilpavai/gi)) {
    product = " head of the department of CSE"}
	else if (text.match(/supriya/gi)) {
    product = " head of the department OF MECH"}
	else if (text.match(/(siddhardhan|siddharthan|sidharthan|sidhardhan)/gi)) {
    product = " head of the department OF MECH"}
	else if (text.match(/latha/gi)) {
    product = " head of the department OF EEE"}
	else if (text.match(/vijayaraj/gi)) {
    product = " head of the department OF ECE"}
	else if (text.match(/sona/gi)) {
    product = " faculty of the department OF CSE"}
	else if (text.match(/(src|re cross|scourt)/gi)) {
    product = "not available in college"}
	else if (text.match(/nss/gi)) {
    product = "NSS is available in college"}
	else if (text.match(/(exam cell|revaluation)/gi)) {
    product = "exam cell is maintaining all our exams given by anna university,revaluating of paper are done through this exam cell,exam cell is in admin block"}
    //else if (text.match(/(hi|hello)/gi)) {
    //product = "hii,I'm fine I feel you too fine"}
    else if (text.match(/principal room/gi)) {
    product = "principal room is on the admin block"}
    else if (text.match(/(pet|physical director)/gi)) {
    product = "arulraj"}
    else if (text.match(/bank/gi)) {
    product = "yes,bank is available inside the college"}
    else if (text.match(/atm/gi)) {
    product = "yes,atm is available outside the college near front gate of college"}
    else if (text.match(/water/gi)) {
    product = "yes,drinking water facility is available inside the college and inside each department"}
    else if (text.match(/gym/gi)) {
    product = "yes,gym is available inside the college gym opens from 4:30 pm to 6:30 pm ,only 3rd and final years allowed in gym"}	
	else if (text.match(/principal/gi)) {
    product = "dr.k.manonmani"}
	else if (text.match(/auditorium/gi)) {
    product = "yes,auditorium is available inside the college"}
	else if (text.match(/vice principal/gi)) {
    product = "dr.siddharthan"}
	else if (text.match(/(departments|department|streams|stream)/gi)) {
    product = "computer science and engineering, civil engineering, electrical engineering, and mechanical engineering"}
	else if (text.match(/(sports available|sports events|sports day|sport day|sports event)/gi)) {
    product = "yes,Sports is available in our college,sports day conducted every year during last of even semesters,in sports day several events are conducted like relay,100metres,200 meteres,javalin throw and separate sports game etc on"}
	else if (text.match(/sports/gi)) {
    product = "sports are very popular in gce, sports is given equal importance as studies is considered indoor games are chess shuttle and tabletennis outdoor games are badminton cricket football tennis volleybll kabadi kho-kho hockey basketball handball"}
	else if (text.match(/(zonal|prizes|price)/gi)) {
    product = "overall runner in zonal"}
	else if (text.match(/anna university/gi)) {
    product = "yes,our college is affiliated to anna univerisity"}
	else if (text.match(/(affiliated|autonomous)/gi)) {
    product = "yes,our college is affiliated to anna univerisity ,it's not a autonomous college and it's the 10th position among government college in anna university list"}
	else if (text.match(/wifi/gi)) {
    product = "wifi facility available in the campus and lab, with a bandwidth of 100mbps"} 
	else if (text.match(/aicte/gi)) {
    product = "GCE tirunelveli is approved by AICTE"}
    else if (text.match(/(dress|jeans|leggings|legging|hair cut|hair)/gi)) {
    product = "drees code should be formal , wearing T-shirts and jeans are not allowed inside the college, hair cut must be proper and descent for boys"}
    else if (text.match(/(playgrounds|playground|ground|grounds)/gi)) {
    product = "yes,playgrounds are available in our college and there 2 grounds for boys and separate grounds for girls near their hostel"}
    else if (text.match(/(rules|regulations|rule|regulation)/gi)) {
    product = "Students must be discipline and should respect the faculty both teaching and non teaching staffs ,be obedient and respectful among faculty's ,ragging is not allowed and anti ragging cell is available in our college students can complain to their department anti ragging cell"}	
	else if (text.match(/library/gi)) {
    product = "the library of the college consists of various informative books, library opens on morning 9:30 am and closes on 4:30 pm"} 
    else if (text.match(/(year hostel|final year|third year|second year|year)/gi)) {
    product = " final year hostel kaveri illam,third year hostel porunai,second year hostel vaigai and first year hostel manimutharu"} 	
    else if (text.match(/(hostel fees|hostel fee)/gi)) {
    product = "12000 rupees per year and monthly mess fees 2000 rupees and electricity bill- 1900 rupees"}
	else if (text.match(/(electricity bill)/gi)) {
    product = "1900 rupees"}
	else if (text.match(/(bike|bike stand)/gi)) {
    product = "bikes are allowed in college for transporation and bike stand is near admin block and you can also park your bikes near to your department"}
    else if (text.match(/(car)/gi)) {
    product = "car is allowed for staffs and staff can park their car nearer to their respective departments"} 	
    else if (text.match(/hostel/gi)) {
    product = "hostels are very good, the college has 6 hostels-kaveri,porunai,vaigai and manimutharu for men,for mens hostel is inside the college and amaravathi,bhavani for women for girls outside college hostel is situated,the hostel food is hygiene and tasty"}	
	else if (text.match(/placement/gi)) {
    product = "for CSE 90percentage , ECE 80percentage , EEE 70percentage , CIVIL 50percentage , MECHANICAL 50percentage"} 
	else if (text.match(/(college fee|college fee)/gi)) {
    product = "7000 rupees per year"} 
	else if (text.match(/(sem fees|semester fees|semester fee|sem fee)/gi)) {
    product = "150 rupees for each paper or subject ur are writing in exam"}
	else if (text.match(/(online|online payment|gpay|phonepe|paytm)/gi)) {
    product = "online payment such as gpay,phonepe,paytm for paying either college or hostle fees is not available"}
	else if (text.match(/(fees|fee|fees structure|fee structure)/gi)) {
    product = "college fees 7000 rupees per year hostel fees 12000 rupees per year and monthly mess fees 2000 rupees and electricity bill- 1900 rupees "}
    else if (text.match(/(sem|semester)/gi)) {
    product = "8 semesters for all department in bachelor of engineering"} 	
	else if (text.match(/(su)/gi)) {
    product = "hii"} 
	else if (text.match(/pass percentage/gi)) {
    product = "80% pass percentage in our college"}
    else if (text.match(/attendence/gi)) {
    product = "minimum 70% in required for appearing university exam"} 
    else if (text.match(/(culturals|cultural)/gi)) {
    product = "yes,cultural events are available in our college,it is conducted on middle of semesters"}
    else if (text.match(/help/gi)) {
    product = "conduct us principal@gcetly.ac.in www.gcetly.ac.in Government College of Engineering, Tirunelveli  Tamil Nadu 627007, India 0462-2552450,0462-2552448"}
    else if (text.match(/website/gi)) {
    product = "www.gcetly.ac.in"}
	else if (text.match(/(college timing|college time|college working hours|working hours|college opens|college closes)/gi)) {
    product = "college working hours: starts at 9 am and ends at 4:30 pm"}
    else if (text.match(/ncc/gi)) {
    product = "no,NCC is not available in our college"}
    else if (text.match(/mission/gi)) {
    product = "Provide the best possible educational facilities to prepare the students for successful career in a global society.Enhance professional competency and analytical thinking to cater the needs of the Industry and research organizations.Develop socially responsible technocrats with high ethical and professional integrity."}
    else if (text.match(/vision/gi)) {
    product = "Our Vision is to make this institution a centre of learning, research eminence and excellence"}
	else if (text.match(/(directions|direction|address|location)/gi)) {
    product = "Government College of Engineering, Trivandrum Rd, Marshal Nager, Tirunelveli, Tamil Nadu 627007"}
    else if (text.match(/history/gi)) {
    product = "It was established in the year 1981. The college is spread over an area of 23 hectares.The institution offers five undergraduate and five postgraduate programs"}
	else if (text.match(/canteen/gi)) {
    product = "yes, canteen available in our college canteen opens at 8:30 am and closes at 6:30 pm"}
    else if (text.match(/(lab facilities|lab facility|laborartoty facility|lab|labs)/gi)) {
    product = "Yes,lab facilities are available in our college namely in cse Compiler Design Lab Computer Graphics Lab Computer Networks Lab Operating System Lab Microprocessor Lab Internet Lab In Ece Internet Lab DSP Lab Microprocessor Lab Microwave and Optical Communication Lab Electronics Lab Digital Communication Lab VLSI Lab In Mech CAD/CAM LabMetrology Lab Thermal Lab Special Machines Lab Dynamics Lab Foundary and Smithy Lab Lathe Workshop Welding Workshop Sheet Metal Workshop Carpentary Workshop and lab opens at 9:30 am and closes at 4:30 pm"}
    else if (text.match(/(transport|transportation)/gi)) {
    product = "The college bus is available for students and staffs at prescribed rates. It makes regular trips via Palayamkottai bus stand, Market and High ground for the benefit of day scholars and staff members. The bus is also used by students for their visits to industries in and around Tirunelveli. Route map is given below."}
    else if (text.match(/indoor/gi)) {
    product = "CHESS SHUTTLE TABLE TENNIS!"}
	else if (text.match(/(facilities|college facilities|college facility|facility)/gi)) {
    product = "college facilities are lab,transporation,sports ground,gym,vehicle parking stand,autitorium,canteen"}
    else if (text.match(/outdoor/gi)) {
    product = "BALL BADMINTON BASKET BALL CRICKET FOOTBALL HOCKEY KABADI KHO-KHO TENNIS VOLLEY BALL HAND BALL"}
	else if (text.match(/alumini/gi)) {
    product = "The aim of the Alumni Association is to conduct periodic workshops and seminars. It creates an awareness in the students regarding recent trends in industry, recruitment opportunities and scope for higher studies. It also sponsors students for training programmes. for further clarification contact staff incharge Dr.M.Gnanasundari Asst.Prof.of EEE!"}
	else if (text.match(/(student association|students association)/gi)) {
    product = "The college has a Students Association. Elected student representatives from various classes and the staff adviser nominated to the union, by the principal, constitute the council of representatives of the Students Association. Staff Incharge Prof. S.Sidhardhan, Vice Principal Student Representative! N.VIGNESHWARAN"}
	else if (text.match(/(student|students)/gi)) {
    product = "STUDENTS ALWAYS WELCOME TO YOY TO  HAVE A JOLLYFUL AND PEACEFUL LIFE IN OUR COLLEGE"}
    else if (text.match(/(clubs|club|association)/gi)) {
    product = "Fine Art Association Alumini Association yoga Club student Association rotary club!"}
    else if (text.match(/(recruiters|COMPANIES)/gi)) {
    product = "ZOHO INFOSYS TCS COGNIZANT ETHNUS INFOVIEW DATAPATTERN KINAXIS NMSWORK TECHNOSOFT CORPORATION TYMTIX QUEST NILAAPPS"}
    else if (text.match(/(SPDC|SKILL AND PERSONALITY DEVELOPMENT PROGRAMME CENTRE)/gi)) {
    product = "Skill And Personality Development Programme Centre EXCEUTIVE OFFICERS Dr. S. Supriya Co-ordinator, SPDC Dr. J.Aldrin Raj Officer in charge for maintainence of accounts, SPDC Dr. S. Ananthakumar Officer in charge for organizing skill training, SPDC  Dr. G.RenishaOfficer in charge for purchase activities, SPDC  Tmt.Ponnulakshmi & Thiru.Balakrishnan Technical incharge "}	
    else if (text.match(/(cutoff|cut off)/gi)) {
    product = "cut off for BC-190  SC-180 others-175"}
    else if (text.match(/(faculty|faculties|staffs|staff)/gi)) {
    product = "Dr.G.TAMILPAVAI dr.k.Thulasimani tmt.M.Mahil tmt.d.Anitha tmt.N.Jeenath laila dr.E.Sivasankari tmt.G.Sona"}
	else if (text.match(/(scholarship amount|scholarship given|scholarship rupees)/gi)) {
    product = "scholarship amount given varied according to caste"}
	else if (text.match(/(scholarship|apply)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = text1[Math.floor(Math.random() * text1.length)]; 
  } 
  else if (text.match(/(faculty advisor advisor|faculties)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = text2[Math.floor(Math.random() * text2.length)]; 
  } 
    else if (text.match(/(cse hod|head|hod of cse)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = text3[Math.floor(Math.random() * text2.length)]; 
  }
  else if (text.match(/(principal|college principal)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = text4[Math.floor(Math.random() * text4.length)]; 
  }
  else if (text.match(/(civil hod|hod of civil)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = text5[Math.floor(Math.random() * text5.length)]; 
  }
  else if (text.match(/(ece hod|hod of ece)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = text6[Math.floor(Math.random() * text6.length)]; 
  }
  else if (text.match(/(mech hod|hod of mech|mechanical hod)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = text7[Math.floor(Math.random() * text7.length)]; 
  }
  else if (text.match(/(eee hod|hod of eee)/gi)) {
    // If no match, check if message contains `coronavirus`
    product = text8[Math.floor(Math.random() * text8.length)]; 
  }
  else if (text.match(/(hod|head of the department)/gi)) {
  product = "cse Dr.G.Tamilpavai civil Dr.S.sidhardhan ece dr.M.vijayaraj mech dr.s.supriya eee dr.p.latha"}
  else if (text.match(/(ece|cse|mech|eee|civil)/gi)) {
  product = "cse department for developing programming skiills ece for for developing ommunication eee for building electronics mech for creating a machines and civil for building works"}
  else if (text.match(/(me|masters|master of engineering|m.e|stipend|stipent)/gi)) {
  product = "yes,ME-master of engineering is available in our college and for ME students there is a stipend of 12000 per month,ME is available for all departments in BE"} 
  else if (text.match(/(about our college|about college|gce|government college of engineering|college)/gi)) {
  product = "Government College of Engineering, Tirunelveli, is a state-owned Engineering Institute located in the city of Tirunelveli in the state of Tamil Nadu. Tirunelveli is often referred as the 'Oxford of south India' due to the larger number of educational institutions present. It is affiliated to Anna University, Chennai and is a AICTE and DOTE approved educational institution in Tamil Nadu. It was established in the year 1981. The college is spread over an area of 23 hectares. The institution offers five undergraduate and five postgraduate programs.our college is the 10th position among government college in anna university list"}  	
    
  else {
    // If all else fails: random alternative
    product = alternative[Math.floor(Math.random() * alternative.length)];
  }

  // Update DOM
  addChat(input, product);
}

function compare(promptsArray, repliesArray, string) {
  let reply;
  let replyFound = false;
  for (let x = 0; x < promptsArray.length; x++) {
    for (let y = 0; y < promptsArray[x].length; y++) {
      if (promptsArray[x][y] === string) {
        let replies = repliesArray[x];
        reply = replies[Math.floor(Math.random() * replies.length)];
        replyFound = true;
        // Stop inner loop when input value matches prompts
        break;
      }
    }
    if (replyFound) {
      // Stop outer loop when reply is found instead of interating through the entire array
      break;
    }
  }
  return reply;
}

function addChat(input, product) {
  const messagesContainer = document.getElementById("messages");

  let userDiv = document.createElement("div");
  userDiv.id = "user";
  userDiv.className = "user response";
  userDiv.innerHTML = `<img src="degre.jpg" class="avatar"><span>${input}</span>`;
  messagesContainer.appendChild(userDiv);

  let botDiv = document.createElement("div");
  let botImg = document.createElement("img");
  let botText = document.createElement("span");
  botDiv.id = "bot";
  botImg.src = "bot-mini.png";
  botImg.className = "avatar";
  botDiv.className = "bot response";
  botText.innerText = "Typing...";
  botDiv.appendChild(botText);
  botDiv.appendChild(botImg);
  messagesContainer.appendChild(botDiv);
  // Keep messages at most recent
  messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;

  // Fake delay to seem "real"
  setTimeout(() => {
    botText.innerText = `${product}`;
    textToSpeech(product)
  }, 2000
  )

}