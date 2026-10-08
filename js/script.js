/* =========================================================
   PARAGON STRIKE DIVISION
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   OPERATOR DATABASE
========================================================= */

const operators = [

    {
        id: "01",
        codename: "ATLAS",
        name: "Daniel Voss",
        age: "38 años",
        height: "1.88 m",
        weight: "92 kg",
        hair: "Castaño oscuro",
        eyes: "Gris",
        specialty: "Comando / Liderazgo",
        level: "04",
        status: "ACTIVO",
        statusClass: "active",

        history:
            "Antiguo operador de una unidad internacional de respuesta táctica. Después de años participando en operaciones de extracción y protección de personal, fue seleccionado para formar el primer núcleo operativo de PARAGON.",

        deployments: [
            "Berlín, Alemania",
            "Sarajevo, Bosnia",
            "Marsella, Francia"
        ],

        operations: [
            "BLACK VECTOR",
            "IRON VEIL",
            "NIGHTFALL"
        ],

        profile:
            "Calmado, disciplinado y extremadamente metódico. Es considerado uno de los principales líderes de PARAGON."
    },


    {
        id: "02",
        codename: "VANTA",
        name: "Elias Kane",
        age: "31 años",
        height: "1.81 m",
        weight: "79 kg",
        hair: "Negro",
        eyes: "Marrón oscuro",
        specialty: "Reconocimiento / Inteligencia",
        level: "04",
        status: "ACTIVO",
        statusClass: "active",

        history:
            "Especialista en reconocimiento y recopilación de inteligencia. Durante sus primeras operaciones trabajaba varios pasos por delante del equipo principal, identificando rutas, amenazas y posiciones.",

        deployments: [
            "Varsovia, Polonia",
            "Praga, República Checa",
            "Estambul, Turquía"
        ],

        operations: [],

        profile:
            "Observador, reservado y extremadamente paciente."
    },


    {
        id: "03",
        codename: "RAVEN",
        name: "Marcus Hale",
        age: "35 años",
        height: "1.85 m",
        weight: "88 kg",
        hair: "Castaño",
        eyes: "Verde oscuro",
        specialty: "Apoyo táctico / Demoliciones",
        level: "04",
        status: "ACTIVO",
        statusClass: "active",

        history:
            "Comenzó trabajando en seguridad de infraestructura crítica. Su conocimiento técnico y experiencia con sistemas de acceso lo llevaron a convertirse en uno de los especialistas de apoyo de PARAGON.",

        deployments: [
            "Bucarest, Rumania",
            "Nápoles, Italia",
            "Tiflis, Georgia"
        ],

        operations: [],

        profile:
            "Técnico, directo y con un humor bastante oscuro."
    },


    {
        id: "04",
        codename: "GHOST",
        name: "IDENTIDAD CLASIFICADA",
        age: "30–35 años",
        height: "1.83 m",
        weight: "82 kg",
        hair: "Negro",
        eyes: "CLASIFICADOS",
        specialty: "Infiltración / Operaciones de campo",
        level: "04",
        status: "CLASIFICADO",
        statusClass: "classified",

        history:
            "Prácticamente no existen registros públicos sobre Ghost. Su expediente PARAGON comienza con: IDENTIDAD CONFIRMADA. HISTORIAL ELIMINADO.",

        deployments: [
            "Varsovia",
            "Estambul",
            "Bucarest"
        ],

        operations: [],

        profile:
            "Incluso dentro de PARAGON, pocos operadores conocen su verdadera identidad."
    },


    {
        id: "05",
        codename: "WRAITH",
        name: "Adrian Cross",
        age: "33 años",
        height: "1.79 m",
        weight: "76 kg",
        hair: "Negro",
        eyes: "Azul grisáceo",
        specialty: "Contrainteligencia",
        level: "04",
        status: "ACTIVO",
        statusClass: "active",

        history:
            "Su trabajo consiste principalmente en descubrir quién está observando a PARAGON.",

        deployments: [
            "Londres",
            "Berlín",
            "Praga"
        ],

        operations: [],

        profile:
            "Analítico y extremadamente reservado."
    },


    {
        id: "06",
        codename: "TITAN",
        name: "Viktor Stahl",
        age: "41 años",
        height: "1.96 m",
        weight: "112 kg",
        hair: "Rubio oscuro",
        eyes: "Azul",
        specialty: "Protección / Operaciones pesadas",
        level: "04",
        status: "ACTIVO",
        statusClass: "active",

        history:
            "Veterano de operaciones de protección de alto riesgo. Fue incorporado a PARAGON debido a su experiencia protegiendo personal durante situaciones extremadamente inestables.",

        deployments: [
            "Madrid",
            "Roma",
            "Varsovia",
            "Atenas"
        ],

        operations: [],

        profile:
            "Imponente, tranquilo y extremadamente protector con su equipo."
    },


    {
        id: "07",
        codename: "SPECTER",
        name: "Nathan Cole",
        age: "29 años",
        height: "1.84 m",
        weight: "80 kg",
        hair: "Castaño oscuro",
        eyes: "Verde",
        specialty: "Reconocimiento avanzado",
        level: "04",
        status: "DESAPARECIDO",
        statusClass: "missing",

        history:
            "Desapareció durante una operación denominada BLACK HORIZON. El equipo recuperó parte de su equipamiento, pero nunca encontraron al operador.",

        deployments: [
            "Región del Cáucaso"
        ],

        operations: [
            "BLACK HORIZON"
        ],

        profile:
            "Expediente PARAGON // LOST ASSET. Última ubicación conocida: Región del Cáucaso."
    },


    {
        id: "08",
        codename: "NOMAD",
        name: "Karim Darwish",
        age: "37 años",
        height: "1.82 m",
        weight: "84 kg",
        hair: "Negro",
        eyes: "Marrón",
        specialty: "Supervivencia / Reconocimiento",
        level: "03",
        status: "RESERVA",
        statusClass: "reserve",

        history:
            "Especialista en operar durante largos períodos sin apoyo externo. Su experiencia en entornos remotos hizo que PARAGON lo incorporara como operador de reserva.",

        deployments: [
            "Norte de África",
            "Balcanes",
            "Cáucaso"
        ],

        operations: [],

        profile:
            "Prefiere trabajar solo y rara vez permanece mucho tiempo en una misma ubicación."
    },


    {
        id: "09",
        codename: "VECTOR",
        name: "Leon Mercer",
        age: "30 años",
        height: "1.86 m",
        weight: "83 kg",
        hair: "Castaño claro",
        eyes: "Azul grisáceo",
        specialty: "Observación / Reconocimiento",
        level: "04",
        status: "ACTIVO",
        statusClass: "active",

        history:
            "Especialista en observación y reconocimiento. Normalmente es enviado antes del equipo principal para recopilar información del área.",

        deployments: [
            "Francia",
            "Polonia",
            "Noruega"
        ],

        operations: [],

        profile:
            "Paciente y extremadamente preciso en la recopilación de información."
    },


    {
        id: "10",
        codename: "ZERO",
        name: "NO REGISTRADO",
        age: "DESCONOCIDA",
        height: "1.80–1.90 m",
        weight: "DESCONOCIDO",
        hair: "DESCONOCIDO",
        eyes: "DESCONOCIDOS",
        specialty: "OPERACIONES ESPECIALES",
        level: "05",
        status: "DESCONOCIDO",
        statusClass: "unknown",

        history:
            "No existe información sobre su identidad, nacionalidad o unidad anterior. Solo existe una entrada: ZERO // ACCESS LEVEL 05. Último registro: 03:17 — OPERADOR ZERO ENTRÓ EN LA ZONA. 03:42 — OBJETIVO RECUPERADO. 03:43 — ZERO DESAPARECIÓ.",

        deployments: [],

        operations: [
            "ARCHIVO NEGRO"
        ],

        profile:
            "ARCHIVO NEGRO."
    },


    {
        id: "11",
        codename: "NYX",
        name: "Elena Varga",
        age: "29 años",
        height: "1.72 m",
        weight: "64 kg",
        hair: "Negro",
        eyes: "Verde oscuro",
        specialty: "Reconocimiento / Inteligencia",
        level: "04",
        status: "ACTIVA",
        statusClass: "active",

        history:
            "Especialista en reconocimiento encubierto y recopilación de inteligencia. Fue incorporada después de identificar una amenaza que había pasado inadvertida para un equipo completo.",

        deployments: [
            "Praga",
            "Viena",
            "Estambul"
        ],

        operations: [],

        profile:
            "Reservada, analítica y muy difícil de detectar durante operaciones de reconocimiento."
    },


    {
        id: "12",
        codename: "VALKYRIE",
        name: "Sofia Richter",
        age: "34 años",
        height: "1.76 m",
        weight: "70 kg",
        hair: "Rubio oscuro",
        eyes: "Azul",
        specialty: "Operaciones tácticas / Liderazgo",
        level: "04",
        status: "ACTIVA",
        statusClass: "active",

        history:
            "Operadora experimentada que terminó convirtiéndose en una de las líderes de campo de PARAGON.",

        deployments: [
            "Berlín",
            "Roma",
            "Varsovia",
            "Atenas"
        ],

        operations: [],

        profile:
            "Mantiene la calma incluso cuando la misión se encuentra al borde del fracaso."
    },


    {
        id: "13",
        codename: "ECHO",
        name: "Mara Kovacs",
        age: "27 años",
        height: "1.69 m",
        weight: "61 kg",
        hair: "Castaño",
        eyes: "Marrón",
        specialty: "Comunicaciones / Guerra electrónica",
        level: "04",
        status: "ACTIVA",
        statusClass: "active",

        history:
            "Especialista en comunicaciones tácticas y sistemas electrónicos. Normalmente opera desde el centro de mando, aunque ocasionalmente acompaña a los equipos de campo.",

        deployments: [
            "Bucarest",
            "Praga",
            "Varsovia"
        ],

        operations: [],

        profile:
            "Inteligente, rápida para resolver problemas y considerada una de las mejores especialistas técnicas de PARAGON."
    },


    {
        id: "14",
        codename: "SABLE",
        name: "Victoria Hayes",
        age: "32 años",
        height: "1.78 m",
        weight: "68 kg",
        hair: "Castaño oscuro",
        eyes: "Gris",
        specialty: "Operaciones de campo / Protección",
        level: "04",
        status: "ACTIVA",
        statusClass: "active",

        history:
            "Ingresó a PARAGON después de varios años trabajando en protección de personal de alto riesgo.",

        deployments: [
            "Londres",
            "Madrid",
            "Marsella"
        ],

        operations: [],

        profile:
            "Serena, disciplinada y especialmente eficaz durante evacuaciones."
    }

];


/* =========================================================
   ACCESS SYSTEM
========================================================= */

const progressBar =
    document.getElementById("progressBar");

const bootPercent =
    document.getElementById("bootPercent");

const bootStatus =
    document.getElementById("bootStatus");

const coreStatus =
    document.getElementById("coreStatus");

const networkStatus =
    document.getElementById("networkStatus");

const securityStatus =
    document.getElementById("securityStatus");

const enterButton =
    document.getElementById("enterButton");


if (progressBar) {

    let progress = 0;

    const bootMessages = [

        {
            percent: 10,
            message: "INITIALIZING SYSTEM..."
        },

        {
            percent: 25,
            message: "LOADING CORE MODULES..."
        },

        {
            percent: 45,
            message: "VERIFYING SYSTEM INTEGRITY..."
        },

        {
            percent: 65,
            message: "ESTABLISHING SECURE NETWORK..."
        },

        {
            percent: 82,
            message: "AUTHENTICATING COMMAND SYSTEM..."
        },

        {
            percent: 95,
            message: "FINALIZING ACCESS PROTOCOL..."
        },

        {
            percent: 100,
            message: "SYSTEM READY."
        }

    ];


    const bootInterval =
        setInterval(() => {

            progress++;

            progressBar.style.width =
                `${progress}%`;

            bootPercent.textContent =
                `${String(progress).padStart(2, "0")}%`;


            const currentMessage =
                [...bootMessages]
                .reverse()
                .find(
                    item => progress >= item.percent
                );


            if (currentMessage) {

                bootStatus.textContent =
                    currentMessage.message;

            }


            if (progress >= 25) {

                coreStatus.textContent =
                    "ONLINE";

            }


            if (progress >= 55) {

                networkStatus.textContent =
                    "SECURE";

            }


            if (progress >= 82) {

                securityStatus.textContent =
                    "VERIFIED";

            }


            if (progress >= 100) {

                clearInterval(bootInterval);

                enterButton.disabled =
                    false;

                enterButton.classList.add(
                    "ready"
                );

                enterButton.focus();

            }

        }, 35);

}


/* =========================================================
   ENTER COMMAND + WELCOME AUDIO
========================================================= */

const welcomeAudio =
    document.getElementById("welcomeAudio");


if (enterButton) {

    enterButton.addEventListener(
        "click",
        async () => {

            if (enterButton.disabled) {
                return;
            }


            if (welcomeAudio) {

                try {

                    welcomeAudio.currentTime = 0;

                    await welcomeAudio.play();


                    welcomeAudio.addEventListener(
                        "ended",
                        () => {

                            document.body.style.transition =
                                "opacity .5s ease";

                            document.body.style.opacity =
                                "0";


                            setTimeout(() => {

                                window.location.href =
                                    "html/command.html";

                            }, 500);

                        },
                        { once: true }
                    );


                    return;

                } catch (error) {

                    console.log(
                        "No se pudo reproducir el audio:",
                        error
                    );

                }

            }


            document.body.style.transition =
                "opacity .5s ease";

            document.body.style.opacity =
                "0";


            setTimeout(() => {

                window.location.href =
                    "html/command.html";

            }, 500);

        }
    );

}


/* =========================================================
   OPERATOR DATABASE
========================================================= */

const operatorsGrid =
    document.getElementById("operatorsGrid");

const operatorDatabaseModal =
    document.getElementById(
        "operatorDatabaseModal"
    );

const openOperators =
    document.getElementById(
        "openOperators"
    );

const navOperators =
    document.getElementById(
        "navOperators"
    );

const closeDatabase =
    document.getElementById(
        "closeDatabase"
    );


/* =========================================================
   GENERATE OPERATOR CARDS
========================================================= */

if (operatorsGrid) {

    operators.forEach(operator => {

        const card =
            document.createElement("article");


        card.className =
            "operator-card";


        card.innerHTML = `

            <span class="operator-number">
                OPERATOR // ${operator.id}
            </span>

            <h3>
                ${operator.codename}
            </h3>

            <div class="operator-real-name">
                ${operator.name}
            </div>

            <div class="operator-specialty">
                ${operator.specialty}
            </div>

            <div class="operator-bottom">

                <span class="operator-level">
                    LEVEL ${operator.level}
                </span>

                <span
                    class="operator-state ${operator.statusClass}">
                    ● ${operator.status}
                </span>

            </div>

        `;


        card.addEventListener(
            "click",
            () => {

                openOperator(operator);

            }
        );


        operatorsGrid.appendChild(card);

    });

}


/* =========================================================
   OPEN DATABASE
========================================================= */

function openOperatorDatabase() {

    if (!operatorDatabaseModal) {
        return;
    }


    operatorDatabaseModal.classList.add(
        "open"
    );


    document.body.style.overflow =
        "hidden";

}


if (openOperators) {

    openOperators.addEventListener(
        "click",
        openOperatorDatabase
    );

}


if (navOperators) {

    navOperators.addEventListener(
        "click",
        openOperatorDatabase
    );

}


/* =========================================================
   CLOSE DATABASE
========================================================= */

function closeOperatorDatabase() {

    if (!operatorDatabaseModal) {
        return;
    }


    operatorDatabaseModal.classList.remove(
        "open"
    );


    document.body.style.overflow =
        "";

}


if (closeDatabase) {

    closeDatabase.addEventListener(
        "click",
        closeOperatorDatabase
    );

}


if (operatorDatabaseModal) {

    const databaseOverlay =
        operatorDatabaseModal.querySelector(
            ".database-overlay"
        );


    if (databaseOverlay) {

        databaseOverlay.addEventListener(
            "click",
            closeOperatorDatabase
        );

    }

}


/* =========================================================
   OPERATOR FILE MODAL
========================================================= */

const modal =
    document.getElementById(
        "operatorModal"
    );

const closeModal =
    document.getElementById(
        "closeModal"
    );


function openOperator(operator) {

    if (!modal) {
        return;
    }


    document.getElementById(
        "fileCode"
    ).textContent =
        `OPERATOR ${operator.id}`;


    document.getElementById(
        "fileStatus"
    ).textContent =
        `● ${operator.status}`;


    document.getElementById(
        "fileStatus"
    ).className =
        `file-status ${operator.statusClass}`;


    document.getElementById(
        "profileInitial"
    ).textContent =
        operator.codename.charAt(0);


    document.getElementById(
        "profileCodename"
    ).textContent =
        operator.codename;


    document.getElementById(
        "profileName"
    ).textContent =
        operator.name;


    document.getElementById(
        "profileSpecialty"
    ).textContent =
        operator.specialty.toUpperCase();


    document.getElementById(
        "dataAge"
    ).textContent =
        operator.age;


    document.getElementById(
        "dataHeight"
    ).textContent =
        operator.height;


    document.getElementById(
        "dataWeight"
    ).textContent =
        operator.weight;


    document.getElementById(
        "dataLevel"
    ).textContent =
        operator.level;


    document.getElementById(
        "dataHair"
    ).textContent =
        operator.hair;


    document.getElementById(
        "dataEyes"
    ).textContent =
        operator.eyes;


    document.getElementById(
        "profileHistory"
    ).textContent =
        operator.history;


    document.getElementById(
        "profileDescription"
    ).textContent =
        operator.profile;


    renderTags(
        "deployments",
        operator.deployments
    );


    renderTags(
        "operations",
        operator.operations
    );


    /* =============================================
       CLOSE DATABASE BEFORE OPENING FILE
    ============================================= */

    closeOperatorDatabase();


    modal.classList.add("open");


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   TAGS
========================================================= */

function renderTags(
    containerId,
    items
) {

    const container =
        document.getElementById(
            containerId
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    if (!items || items.length === 0) {

        const empty =
            document.createElement("span");


        empty.textContent =
            "NO DATA AVAILABLE";


        container.appendChild(empty);


        return;

    }


    items.forEach(item => {

        const tag =
            document.createElement("span");


        tag.textContent =
            item;


        container.appendChild(tag);

    });

}


/* =========================================================
   CLOSE OPERATOR FILE
========================================================= */

function closeOperator() {

    if (!modal) {
        return;
    }

    modal.classList.remove(
        "open"
    );


    if (operatorDatabaseModal) {

        operatorDatabaseModal.classList.add(
            "open"
        );

        document.body.style.overflow =
            "hidden";

    } else {

        document.body.style.overflow =
            "";

    }

}


/* =========================================================
   CLOSE OPERATOR FILE BUTTON
========================================================= */

if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeOperator
    );

}


/* =========================================================
   OPERATOR FILE OVERLAY
========================================================= */

if (modal) {

    const modalOverlay =
        modal.querySelector(
            ".modal-overlay"
        );


    if (modalOverlay) {

        modalOverlay.addEventListener(
            "click",
            closeOperator
        );

    }

}


/* =========================================================
   ESC KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key !== "Escape"
        ) {
            return;
        }


        /* CLOSE OPERATOR FILE FIRST */

        if (
            modal &&
            modal.classList.contains("open")
        ) {

            closeOperator();

            return;

        }


        /* CLOSE DATABASE */

        if (
            operatorDatabaseModal &&
            operatorDatabaseModal.classList.contains("open")
        ) {

            closeOperatorDatabase();

        }

    }
);
