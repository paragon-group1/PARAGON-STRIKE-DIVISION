
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
        history: "Antiguo operador de una unidad internacional de respuesta táctica. Después de años participando en operaciones de extracción y protección de personal, fue seleccionado para formar el primer núcleo operativo de PARAGON.",
        deployments: ["Berlín, Alemania", "Sarajevo, Bosnia", "Marsella, Francia"],
        operations: ["BLACK VECTOR", "IRON VEIL", "NIGHTFALL"],
        profile: "Calmado, disciplinado y extremadamente metódico. Es considerado uno de los principales líderes de PARAGON."
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
        history: "Especialista en reconocimiento y recopilación de inteligencia. Durante sus primeras operaciones trabajaba varios pasos por delante del equipo principal, identificando rutas, amenazas y posiciones.",
        deployments: ["Varsovia, Polonia", "Praga, República Checa", "Estambul, Turquía"],
        operations: [],
        profile: "Observador, reservado y extremadamente paciente."
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
        history: "Comenzó trabajando en seguridad de infraestructura crítica. Su conocimiento técnico y experiencia con sistemas de acceso lo llevaron a convertirse en uno de los especialistas de apoyo de PARAGON.",
        deployments: ["Bucarest, Rumania", "Nápoles, Italia", "Tiflis, Georgia"],
        operations: [],
        profile: "Técnico, directo y con un humor bastante oscuro."
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
        history: "Prácticamente no existen registros públicos sobre Ghost. Su expediente PARAGON comienza con: IDENTIDAD CONFIRMADA. HISTORIAL ELIMINADO.",
        deployments: ["Varsovia", "Estambul", "Bucarest"],
        operations: [],
        profile: "Incluso dentro de PARAGON, pocos operadores conocen su verdadera identidad."
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
        history: "Su trabajo consiste principalmente en descubrir quién está observando a PARAGON.",
        deployments: ["Londres", "Berlín", "Praga"],
        operations: [],
        profile: "Analítico y extremadamente reservado."
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
        history: "Veterano de operaciones de protección de alto riesgo. Fue incorporado a PARAGON debido a su experiencia protegiendo personal durante situaciones extremadamente inestables.",
        deployments: ["Madrid", "Roma", "Varsovia", "Atenas"],
        operations: [],
        profile: "Imponente, tranquilo y extremadamente protector con su equipo."
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
        history: "Desapareció durante una operación denominada BLACK HORIZON. El equipo recuperó parte de su equipamiento, pero nunca encontraron al operador.",
        deployments: ["Región del Cáucaso"],
        operations: ["BLACK HORIZON"],
        profile: "Expediente PARAGON // LOST ASSET. Última ubicación conocida: Región del Cáucaso."
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
        history: "Especialista en operar durante largos períodos sin apoyo externo. Su experiencia en entornos remotos hizo que PARAGON lo incorporara como operador de reserva.",
        deployments: ["Norte de África", "Balcanes", "Cáucaso"],
        operations: [],
        profile: "Prefiere trabajar solo y rara vez permanece mucho tiempo en una misma ubicación."
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
        history: "Especialista en observación y reconocimiento. Normalmente es enviado antes del equipo principal para recopilar información del área.",
        deployments: ["Francia", "Polonia", "Noruega"],
        operations: [],
        profile: "Paciente y extremadamente preciso en la recopilación de información."
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
        history: "No existe información sobre su identidad, nacionalidad o unidad anterior. Solo existe una entrada: ZERO // ACCESS LEVEL 05. Último registro: 03:17 — OPERADOR ZERO ENTRÓ EN LA ZONA. 03:42 — OBJETIVO RECUPERADO. 03:43 — ZERO DESAPARECIÓ.",
        deployments: [],
        operations: ["ARCHIVO NEGRO"],
        profile: "ARCHIVO NEGRO."
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
        history: "Especialista en reconocimiento encubierto y recopilación de inteligencia. Fue incorporada después de identificar una amenaza que había pasado inadvertida para un equipo completo.",
        deployments: ["Praga", "Viena", "Estambul"],
        operations: [],
        profile: "Reservada, analítica y muy difícil de detectar durante operaciones de reconocimiento."
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
        history: "Operadora experimentada que terminó convirtiéndose en una de las líderes de campo de PARAGON.",
        deployments: ["Berlín", "Roma", "Varsovia", "Atenas"],
        operations: [],
        profile: "Mantiene la calma incluso cuando la misión se encuentra al borde del fracaso."
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
        history: "Especialista en comunicaciones tácticas y sistemas electrónicos. Normalmente opera desde el centro de mando, aunque ocasionalmente acompaña a los equipos de campo.",
        deployments: ["Bucarest", "Praga", "Varsovia"],
        operations: [],
        profile: "Inteligente, rápida para resolver problemas y considerada una de las mejores especialistas técnicas de PARAGON."
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
        history: "Ingresó a PARAGON después de varios años trabajando en protección de personal de alto riesgo.",
        deployments: ["Londres", "Madrid", "Marsella"],
        operations: [],
        profile: "Serena, disciplinada y especialmente eficaz durante evacuaciones."
    }
];

/* Disponible para los módulos de diagnóstico. */
window.operators = operators;

/* =========================================================
   ACCESS SYSTEM / SYSTEM BOOT
========================================================= */

const progressBar = document.getElementById("progressBar");
const bootPercent = document.getElementById("bootPercent");
const bootStatus = document.getElementById("bootStatus");
const coreStatus = document.getElementById("coreStatus");
const networkStatus = document.getElementById("networkStatus");
const securityStatus = document.getElementById("securityStatus");
const enterButton = document.getElementById("enterButton");

if (progressBar && bootPercent && bootStatus) {
    let progress = 0;

    const bootMessages = [
        { percent: 10, message: "INITIALIZING SYSTEM..." },
        { percent: 25, message: "LOADING CORE MODULES..." },
        { percent: 45, message: "VERIFYING SYSTEM INTEGRITY..." },
        { percent: 65, message: "ESTABLISHING SECURE NETWORK..." },
        { percent: 82, message: "AUTHENTICATING COMMAND SYSTEM..." },
        { percent: 95, message: "FINALIZING ACCESS PROTOCOL..." },
        { percent: 100, message: "SYSTEM READY." }
    ];

    if (enterButton) enterButton.disabled = true;

    const bootInterval = window.setInterval(() => {
        progress = Math.min(progress + 1, 100);
        progressBar.style.width = `${progress}%`;
        bootPercent.textContent = `${String(progress).padStart(2, "0")}%`;

        const currentMessage = [...bootMessages]
            .reverse()
            .find(item => progress >= item.percent);

        if (currentMessage) bootStatus.textContent = currentMessage.message;
        if (progress >= 25 && coreStatus) coreStatus.textContent = "ONLINE";
        if (progress >= 55 && networkStatus) networkStatus.textContent = "SECURE";
        if (progress >= 82 && securityStatus) securityStatus.textContent = "VERIFIED";

        if (progress >= 100) {
            window.clearInterval(bootInterval);

            if (enterButton) {
                enterButton.disabled = false;
                enterButton.classList.add("ready");
                enterButton.focus();
            }
        }
    }, 35);
}

/* FIN DE LA PARTE 1 DE 4
   No cierres el archivo con código adicional todavía. */

/* =========================================================
   PARTE 2 DE 4
   ENTER COMMAND + WELCOME AUDIO
========================================================= */

const welcomeAudio = document.getElementById("welcomeAudio");

if (enterButton) {
    enterButton.addEventListener("click", async () => {
        if (enterButton.disabled) return;

        enterButton.disabled = true;

        const enterCommandPage = () => {
            document.body.style.transition = "opacity .5s ease";
            document.body.style.opacity = "0";

            window.setTimeout(() => {
                window.location.href = "html/command.html";
            }, 500);
        };

        if (welcomeAudio) {
            const handleAudioEnded = () => enterCommandPage();

            try {
                welcomeAudio.currentTime = 0;
                welcomeAudio.addEventListener("ended", handleAudioEnded, {
                    once: true
                });

                await welcomeAudio.play();
                return;
            } catch (error) {
                welcomeAudio.removeEventListener("ended", handleAudioEnded);
                console.warn("No se pudo reproducir el audio:", error);
            }
        }

        enterCommandPage();
    });
}

/* =========================================================
   OPERATOR DATABASE
========================================================= */

const operatorsGrid = document.getElementById("operatorsGrid");
const operatorDatabaseModal = document.getElementById("operatorDatabaseModal");
const openOperators = document.getElementById("openOperators");
const navOperators = document.getElementById("navOperators");
const closeDatabase = document.getElementById("closeDatabase");

/* =========================================================
   GENERATE OPERATOR CARDS
========================================================= */

if (operatorsGrid) {
    operatorsGrid.replaceChildren();

    operators.forEach(operator => {
        const card = document.createElement("article");
        card.className = "operator-card";

        const number = document.createElement("span");
        number.className = "operator-number";
        number.textContent = `OPERATOR // ${operator.id}`;

        const codename = document.createElement("h3");
        codename.textContent = operator.codename;

        const realName = document.createElement("div");
        realName.className = "operator-real-name";
        realName.textContent = operator.name;

        const specialty = document.createElement("div");
        specialty.className = "operator-specialty";
        specialty.textContent = operator.specialty;

        const bottom = document.createElement("div");
        bottom.className = "operator-bottom";

        const level = document.createElement("span");
        level.className = "operator-level";
        level.textContent = `LEVEL ${operator.level}`;

        const state = document.createElement("span");
        state.className = `operator-state ${operator.statusClass}`;
        state.textContent = `● ${operator.status}`;

        bottom.append(level, state);
        card.append(number, codename, realName, specialty, bottom);

        card.addEventListener("click", () => {
            openOperator(operator);
        });

        operatorsGrid.appendChild(card);
    });
}

/* =========================================================
   OPEN DATABASE
========================================================= */

function openOperatorDatabase() {
    if (!operatorDatabaseModal) return;

    operatorDatabaseModal.classList.add("open");
    document.body.style.overflow = "hidden";
}

if (openOperators) {
    openOperators.addEventListener("click", openOperatorDatabase);
}

if (navOperators) {
    navOperators.addEventListener("click", openOperatorDatabase);
}

/* =========================================================
   CLOSE DATABASE
========================================================= */

function closeOperatorDatabase() {
    if (!operatorDatabaseModal) return;

    operatorDatabaseModal.classList.remove("open");
    document.body.style.overflow = "";
}

if (closeDatabase) {
    closeDatabase.addEventListener("click", closeOperatorDatabase);
}

if (operatorDatabaseModal) {
    const databaseOverlay =
        operatorDatabaseModal.querySelector(".database-overlay");

    if (databaseOverlay) {
        databaseOverlay.addEventListener("click", closeOperatorDatabase);
    }
}

/* FIN DE LA PARTE 2 DE 4 */

/* =========================================================
   PARTE 3 DE 4
   OPERATOR FILE MODAL
========================================================= */

const modal = document.getElementById("operatorModal");
const closeModal = document.getElementById("closeModal");

/* =========================================================
   SAFE TEXT HELPER
========================================================= */

function setText(id, value) {
    const element = document.getElementById(id);

    if (element) {
        element.textContent = value ?? "—";
    }
}

/* =========================================================
   OPEN OPERATOR FILE
========================================================= */

function openOperator(operator) {
    if (!modal || !operator) return;

    setText("fileCode", `OPERATOR ${operator.id}`);
    setText("fileStatus", `● ${operator.status}`);

    const fileStatus = document.getElementById("fileStatus");

    if (fileStatus) {
        fileStatus.className =
            `file-status ${operator.statusClass}`;
    }

    setText("profileInitial", operator.codename.charAt(0));
    setText("profileCodename", operator.codename);
    setText("profileName", operator.name);
    setText("profileSpecialty", operator.specialty.toUpperCase());

    setText("dataAge", operator.age);
    setText("dataHeight", operator.height);
    setText("dataWeight", operator.weight);
    setText("dataLevel", operator.level);
    setText("dataHair", operator.hair);
    setText("dataEyes", operator.eyes);

    setText("profileHistory", operator.history);
    setText("profileDescription", operator.profile);

    renderTags("deployments", operator.deployments);
    renderTags("operations", operator.operations);

    // Cerrar la base de datos antes de abrir el expediente.
    closeOperatorDatabase();

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

/* =========================================================
   RENDER DEPLOYMENTS AND OPERATIONS
========================================================= */

function renderTags(containerId, items) {
    const container = document.getElementById(containerId);

    if (!container) return;

    container.replaceChildren();

    if (!Array.isArray(items) || items.length === 0) {
        const empty = document.createElement("span");
        empty.textContent = "NO DATA AVAILABLE";
        container.appendChild(empty);
        return;
    }

    items.forEach(item => {
        const tag = document.createElement("span");
        tag.textContent = item;
        container.appendChild(tag);
    });
}

/* =========================================================
   CLOSE OPERATOR FILE
========================================================= */

function closeOperator() {
    if (!modal) return;

    modal.classList.remove("open");

    // Si la base de datos existe, regresar a ella.
    if (operatorDatabaseModal) {
        operatorDatabaseModal.classList.add("open");
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
}

/* =========================================================
   CLOSE BUTTON
========================================================= */

if (closeModal) {
    closeModal.addEventListener("click", closeOperator);
}

/* =========================================================
   CLOSE FILE BY CLICKING THE OVERLAY
========================================================= */

if (modal) {
    const modalOverlay = modal.querySelector(".modal-overlay");

    if (modalOverlay) {
        modalOverlay.addEventListener("click", closeOperator);
    }
}

/* =========================================================
   KEYBOARD: ESCAPE
========================================================= */

document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;

    // Cerrar primero el expediente individual.
    if (modal && modal.classList.contains("open")) {
        closeOperator();
        return;
    }

    // Si no hay expediente abierto, cerrar la base de datos.
    if (
        operatorDatabaseModal &&
        operatorDatabaseModal.classList.contains("open")
    ) {
        closeOperatorDatabase();
    }
});

/* FIN DE LA PARTE 3 DE 4 */

/* =========================================================
   PARTE 4 DE 4
   COMMAND CENTER // NAVIGATION, MAP, LOGS & DIAGNOSTICS
========================================================= */

/* =========================================================
   1. COMMAND MODULE NAVIGATION
========================================================= */

const sidebarButtons = document.querySelectorAll(
    ".sidebar-button[data-view]"
);

const moduleViews = document.querySelectorAll(".module-view");

function activateModule(moduleName) {
    if (!moduleName) return;

    let moduleFound = false;

    moduleViews.forEach(view => {
        const isActive = view.dataset.module === moduleName;

        view.classList.toggle("active", isActive);
        view.hidden = !isActive;

        if (isActive) {
            moduleFound = true;
        }
    });

    sidebarButtons.forEach(button => {
        const isActive = button.dataset.view === moduleName;

        button.classList.toggle("active", isActive);

        if (isActive) {
            button.setAttribute("aria-current", "page");
        } else {
            button.removeAttribute("aria-current");
        }
    });

    console.log("MÓDULO SOLICITADO:", moduleName);
    console.log("MÓDULO ENCONTRADO:", moduleFound);

    if (!moduleFound) return;

    if (typeof window.paragonLogActivity === "function") {
        window.paragonLogActivity(
            `MODULE ACCESSED // ${moduleName.toUpperCase()}`
        );
    }

    if (moduleName === "map" && window.paragonMap) {
        requestAnimationFrame(() => {
            window.paragonMap.invalidateSize();
        });

        setTimeout(() => {
            window.paragonMap?.invalidateSize();
        }, 200);
    }

    if (
        moduleName === "diagnostics" &&
        typeof runDiagnostics === "function"
    ) {
        runDiagnostics();
    }
}

sidebarButtons.forEach(button => {
    button.addEventListener("click", () => {
        activateModule(button.dataset.view);
    });
});

/* =========================================================
   2. ACTIVITY LOG
========================================================= */

const activityLog = document.getElementById("activityLog");
const clearActivityLog = document.getElementById("clearActivityLog");

window.paragonLogActivity = function (message) {
    if (!activityLog || !message) return;

    const entry = document.createElement("div");
    const timestamp = new Date().toLocaleTimeString("en-GB", {
        hour12: false
    });

    entry.className = "activity-entry";

    const timeElement = document.createElement("span");
    timeElement.className = "activity-time";
    timeElement.textContent = `[${timestamp}]`;

    const messageElement = document.createElement("span");
    messageElement.className = "activity-message";
    messageElement.textContent = message;

    entry.append(timeElement, messageElement);
    activityLog.prepend(entry);

    // Mantener el registro limitado a 100 entradas.
    while (activityLog.children.length > 100) {
        activityLog.lastElementChild.remove();
    }
};

if (clearActivityLog) {
    clearActivityLog.addEventListener("click", () => {
        if (activityLog) {
            activityLog.replaceChildren();
        }

        window.paragonLogActivity("ACTIVITY LOG CLEARED");
    });
}

/* =========================================================
   3. TACTICAL MAP // LEAFLET
========================================================= */

function initializeParagonMap() {
    const mapElement = document.getElementById("paragonMap");

    if (!mapElement) {
        console.warn("PARAGON MAP: container not found.");
        return;
    }

    if (typeof L === "undefined") {
        console.error("PARAGON MAP: Leaflet library not loaded.");
        mapElement.innerHTML =
            '<div style="padding:20px;color:#e8eceb;">MAP OFFLINE // LEAFLET NOT LOADED</div>';
        return;
    }

    if (!window.paragonMap) {
        try {
            window.paragonMap = L.map(mapElement, {
                center: [-9.19, -75.0152],
                zoom: 5,
                zoomControl: false,
                attributionControl: true
            });

            L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {
                    maxZoom: 19,
                    attribution: "&copy; OpenStreetMap contributors"
                }
            ).addTo(window.paragonMap);

            L.control.zoom({
                position: "bottomright"
            }).addTo(window.paragonMap);

            window.paragonMap.on("tileerror", function () {
                console.warn("PARAGON MAP: a map tile could not load.");
            });

            if (typeof window.paragonLogActivity === "function") {
                window.paragonLogActivity("TACTICAL MAP INITIALIZED");
            }
        } catch (error) {
            console.error("PARAGON MAP ERROR:", error);
            return;
        }
    }

    requestAnimationFrame(() => {
        window.paragonMap.invalidateSize();
    });

    setTimeout(() => {
        window.paragonMap.invalidateSize();
    }, 300);
}

// Inicializar cuando el documento esté listo.
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeParagonMap);
} else {
    initializeParagonMap();
}
/* =========================================================
   4. SYSTEM DIAGNOSTICS
========================================================= */

function setDiagnostic(id, status, label) {
    const element = document.getElementById(id);

    if (!element) return;

    element.textContent = label;

    element.classList.remove(
        "status-online",
        "status-warning",
        "status-offline"
    );

    element.classList.add(`status-${status}`);
}

function runDiagnostics() {
    // JavaScript
    setDiagnostic(
        "diagJavascript",
        "online",
        "OPERATIONAL"
    );

    // Network
    setDiagnostic(
        "diagNetwork",
        navigator.onLine ? "online" : "offline",
        navigator.onLine ? "CONNECTED" : "OFFLINE"
    );

    // Map
    const mapReady = Boolean(
        window.paragonMap &&
        mapElement &&
        mapElement._leaflet_id
    );

    setDiagnostic(
        "diagMap",
        mapReady ? "online" : "warning",
        mapReady ? "INITIALIZED" : "UNAVAILABLE"
    );

    // Operator database
    const operatorCount = Array.isArray(window.operators)
        ? window.operators.length
        : 0;

    setDiagnostic(
        "diagOperators",
        operatorCount > 0 ? "online" : "warning",
        operatorCount > 0
            ? `${operatorCount} RECORDS LOADED`
            : "NO RECORDS"
    );
}

// Monitor network status.
window.addEventListener("online", () => {
    runDiagnostics();

    window.paragonLogActivity("NETWORK CONNECTION RESTORED");
});

window.addEventListener("offline", () => {
    runDiagnostics();

    window.paragonLogActivity("NETWORK CONNECTION LOST");
});

/* =========================================================
   5. INTERFACE CLICK SOUND
========================================================= */

const soundToggle = document.getElementById("soundToggle");

const paragonClickSound = new Audio(
    "https://paragon-group1.github.io/PARAGON-STRIKE-DIVISION/sounds/ui-click.mp3"
);

paragonClickSound.preload = "auto";
paragonClickSound.volume = 0.25;

let interfaceSoundEnabled = soundToggle
    ? soundToggle.checked
    : true;

if (soundToggle) {
    soundToggle.addEventListener("change", () => {
        interfaceSoundEnabled = soundToggle.checked;

        window.paragonLogActivity(
            `INTERFACE SOUND // ${
                interfaceSoundEnabled ? "ENABLED" : "DISABLED"
            }`
        );
    });
}

document.addEventListener("click", event => {
    if (!interfaceSoundEnabled) return;

    const interactiveElement = event.target.closest(
        "button, .sidebar-button, a, [role='button']"
    );

    if (!interactiveElement) return;

    if (interactiveElement.disabled) return;

    try {
        paragonClickSound.currentTime = 0;

        const playback = paragonClickSound.play();

        if (playback && typeof playback.catch === "function") {
            playback.catch(() => {
                // El navegador puede bloquear el audio.
            });
        }
    } catch (error) {
        // Evitar que un fallo de audio interrumpa la interfaz.
    }
});

/* =========================================================
   6. INITIALIZE COMMAND INTERFACE
========================================================= */

if (document.body.classList.contains("command-page")) {
    runDiagnostics();

    window.paragonLogActivity(
        "PARAGON COMMAND NETWORK INITIALIZED"
    );
}

/* =========================================================
   END OF PARAGON STRIKE DIVISION SCRIPT
========================================================= */
