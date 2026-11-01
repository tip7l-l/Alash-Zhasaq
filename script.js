// 30 Фактіні динамикалық түрде қосу
const facts = [
    "1905 жылдың 2 шілдесінде Қарқаралы петициясы қабылданды.", "Петицияда патша үкіметіне жер мәселесі бойынша талаптар қойылды.", "Қазақтардың шұрайлы жерлерін тартып алуға қарсылықтар күшейді.", "I Мемлекеттік Думаға Жетісудан А. Бірімжанов депутат болды.", "II Мемлекеттік Думаға қазақ өңірлерінен бірнеше депутат қатысты.", "Қазақ депутаттары Дума мінберінен аграрлық саясатты сынға алды.", "1911 жылы Орынборда «Қазақ» газетін шығару бастамасы көтерілді.", "1913 жылдың 2 ақпанында «Қазақ» газетінің алғашқы саны жарық көрді.", "Газеттің алғашқы редакторы Ахмет Байтұрсынұлы болды.", "М. Дулатұлының 1909 жылғы «Оян, қазақ!» жинағы халықты оятты.", "Ә. Бөкейхан «Империалистическая война и казахи» мақаласын жазды.", "1916 жылғы көтеріліс кезінде қазақ зиялылары салиқалы ұстанымда болды.", "1916 жылғы маусым жарлығы халықтың жаппай қарсылығына әкелді.", "1917 жылғы Ақпан төңкерісінен кейін қуғын-сүргіндегілер елге оралды.", "1917 жылы облыстық қазақ съездері өте бастады.", "1917 жылғы 21–28 шілдеде Орынборда I Жалпықазақ съезі өтті.", "I съезде «Алаш» партиясын құру туралы шешім қабылданды.", "Партияның бағдарламасы «Қазақ» газетінде жарияланды.", "1917 жылғы 5–13 желтоқсанда II Жалпықазақ съезі шақырылды.", "Съезде Алаш автономиясы ресми түрде жарияланды.", "Алашорда үкіметінің төрағасы болып Әлихан Бөкейхан сайланды.", "Алашорданың әскери күштерін жасақтау басталды.", "Х. және Ж. Досмұхамедұлы Батыс Алашорда бөлімін басқарды.", "Алаш қайраткерлері білім беру, оқулықтар жазу ісімен айналысты.", "А. Байтұрсынұлының «Тіл-құрал» әліппесі жарық көрді.", "М. Жұмабаевтың ұлттық рухты көтеретін өлеңдері шықты.", "Кеңес үкіметі орнаған соң Алашордамен келіссөздер жүргізілді.", "1919–1920 жылдары Алаш қайраткерлеріне амнистия жарияланды.", "1920 жылы ҚазАКСР құрылып, зиялылар мемлекеттік құрылысқа тартылды.", "1920 жылдардың соңында Алаш қайраткерлері қайта қуғын-сүргінге ұшырады."
];
const factsList = document.getElementById('factsList');
facts.forEach(fact => {
    let div = document.createElement('div');
    div.innerText = fact;
    factsList.appendChild(div);
});

// --- Ойын 1: Интерактивті карта ---
const mapQuestions = [
    {q: "1905 жылы 14 500 адам қол қойған саяси петиция қабылданған қала?", a: "Қарқаралы"},
    {q: "1913-1918 жж. «Қазақ» газеті басылып шыққан қала?", a: "Орынбор"},
    {q: "1917 жылы Екінші Жалпықазақ съезі өтіп, Алашорда құрылған қала?", a: "Орынбор"},
    {q: "Батыс Алашорданың орталығы болған елді мекен?", a: "Жымпиты"},
    {q: "1917 ж. Түркістан автономиясының орталығы болған қала?", a: "Қоқан"}
];
let currentMapQ = 0;
const mapOptions = ['Қарқаралы', 'Орынбор', 'Жымпиты', 'Қоқан', 'Семей'];

function renderMapGame() {
    if(currentMapQ >= mapQuestions.length) {
        document.getElementById('q-map').innerText = "Нәтиже: 100%. Сіз Алаш қайраткерлерінің жүріп өткен жолын дәл таптыңыз!";
        document.getElementById('map-options').innerHTML = "";
        return;
    }
    document.getElementById('q-map').innerText = mapQuestions[currentMapQ].q;
    let btns = "";
    mapOptions.forEach(opt => {
        btns += `<button onclick="checkMap('${opt}')">${opt}</button>`;
    });
    document.getElementById('map-options').innerHTML = btns;
}
function checkMap(ans) {
    if(ans === mapQuestions[currentMapQ].a) {
        currentMapQ++;
        document.getElementById('map-result').innerText = "Дұрыс!";
        renderMapGame();
    } else {
        document.getElementById('map-result').innerText = "Қате, қайта көріңіз.";
    }
}
renderMapGame();

// --- Ойын 2: Архив құпиясы ---
function checkGame2() {
    let b1 = document.getElementById('b1').value;
    let b2 = document.getElementById('b2').value;
    let b3 = document.getElementById('b3').value;
    let b4 = document.getElementById('b4').value;
    
    if(b1 === 'республика' && b2 === 'теңдік' && b3 === 'ана тілінде' && b4 === 'қоныс аударушыларды') {
        document.getElementById('archive-result').innerText = "Архивтік құжат сәтті қалпына келтірілді! Тарихи сауаттылығыңыз: 5/5 ұпай.";
    } else {
        document.getElementById('archive-result').innerText = "Қателіктер бар, дұрыстап көріңіз.";
    }
}

// --- Ойын 3: Ақиқат/Жалған ---
const tfQuestions = [
    {q: "1. Әлихан Бөкейханов I Мемлекеттік Думаның депутаты болды.", a: true},
    {q: "2. «Оян, қазақ!» кітабының авторы Ахмет Байтұрсынов.", a: false},
    {q: "3. «Алаш» партиясының ресми баспа органы «Қазақ» газеті болды.", a: true},
    {q: "4. Мұхамеджан Тынышбаев Түркістан автономиясының алғашқы премьер-министрі болды.", a: true},
    {q: "5. Кеңес үкіметі Алашорда мүшелеріне ешқашан амнистия жариялаған жоқ.", a: false}
];
let currentTF = 0;
let tfScore = 0;
function answerTF(ans) {
    if(ans === tfQuestions[currentTF].a) tfScore++;
    currentTF++;
    if(currentTF < tfQuestions.length) {
        document.getElementById('tf-question').innerText = tfQuestions[currentTF].q;
    } else {
        document.getElementById('tf-question').innerText = `Нәтиже: ${tfScore}/5. Сіз тарихи шындықты өте жақсы ажырата аласыз!`;
    }
}

// --- Ойын 4 & 5: Сәйкестендіру логикасы ---
function setupMatchingGame(containerL, containerR, resultId, pairs) {
    let leftHtml = "", rightHtml = "";
    let selectedLeft = null, selectedRight = null;
    let matchedCount = 0;

    let rights = pairs.map(p => p.r).sort(() => Math.random() - 0.5);

    pairs.forEach((p, i) => {
        leftHtml += `<button class="match-btn" id="l_${resultId}_${i}">${p.l}</button>`;
        rightHtml += `<button class="match-btn" id="r_${resultId}_${i}">${rights[i]}</button>`;
    });

    document.getElementById(containerL).innerHTML = leftHtml;
    document.getElementById(containerR).innerHTML = rightHtml;

    const checkMatch = () => {
        if(selectedLeft && selectedRight) {
            let lText = selectedLeft.innerText;
            let rText = selectedRight.innerText;
            let isMatch = pairs.find(p => p.l === lText && p.r === rText);
            
            if(isMatch) {
                selectedLeft.classList.add('matched');
                selectedRight.classList.add('matched');
                matchedCount++;
                if(matchedCount === pairs.length) document.getElementById(resultId).innerText = "Сәйкестік: 100%! Жарайсыз!";
            } else {
                selectedLeft.classList.remove('selected');
                selectedRight.classList.remove('selected');
            }
            selectedLeft = null; selectedRight = null;
        }
    };

    document.getElementById(containerL).addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON' && !e.target.classList.contains('matched')) {
            if(selectedLeft) selectedLeft.classList.remove('selected');
            selectedLeft = e.target;
            selectedLeft.classList.add('selected');
            checkMatch();
        }
    });

    document.getElementById(containerR).addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON' && !e.target.classList.contains('matched')) {
            if(selectedRight) selectedRight.classList.remove('selected');
            selectedRight = e.target;
            selectedRight.classList.add('selected');
            checkMatch();
        }
    });
}

setupMatchingGame('match-left', 'match-right', 'match-result', [
    {l: "Әлихан Бөкейханов", r: "Алашорда үкіметінің төрағасы"},
    {l: "Ахмет Байтұрсынов", r: "«Тіл-құрал» авторы, Ұлт ұстазы"},
    {l: "Міржақып Дулатов", r: "«Бақытсыз Жамал» авторы"},
    {l: "Мұстафа Шоқай", r: "Түркістан автономиясының басшысы"},
    {l: "Халел Досмұхамедұлы", r: "Батыс Алашорданың жетекшісі"}
]);

setupMatchingGame('domino-left', 'domino-right', 'domino-result', [
    {l: "Столыпиннің аграрлық реформасы", r: "Қазақтардың шұрайлы жерінен айырылуы"},
    {l: "1916 жылғы 25 маусым жарлығы", r: "Ұлт-азаттық көтеріліс"},
    {l: "1917 жылғы Ақпан төңкерісі", r: "«Алаш» партиясын құруға мүмкіндік"},
    {l: "Азамат соғысында Кеңес үкіметінің жеңісі", r: "Алашорда үкіметінің таратылуы"}
]);

// --- Live Google Form CSV оқу скрипті ---
async function fetchGoogleSheetStats() {
    // Сіз берген pubhtml сілтемесі негізінде CSV форматын алу
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQu7fn77cVWHiS_uVFUj_hAUQA10QUvFSYZNQbyShVIHjQX5QSWAnswkrHspxLCOEfZvr18Awl2jG1n/pub?output=csv';
    try {
        const response = await fetch(csvUrl);
        const data = await response.text();
        const rows = data.split('\n');
        const responseCount = rows.length - 1; // Бірінші жол - тақырып
        document.getElementById('total-responses').innerText = responseCount > 0 ? responseCount : 0;
    } catch (error) {
        document.getElementById('total-responses').innerText = "Деректерді жүктеу қатесі";
    }
}

// Бет жүктелгенде сауалнама санын жаңарту
window.onload = fetchGoogleSheetStats;