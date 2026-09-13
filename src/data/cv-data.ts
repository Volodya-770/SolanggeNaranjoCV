export interface ExperienceItem {
  company: string;
  location: string;
  period: string;
  role: string;
  highlightBadge?: string;
  achievements: {
    title: string;
    description: string;
  }[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export const cvData = {
  personalInfo: {
    name: "Solangge Naranjo",
    title: "Licenciada en Ciencia y Cultura de la Alimentación",
    roleSubtitle: "Supervisora de Producción y Calidad | Agroindustria & Retail",
    location: "Barquisimeto, Venezuela",
    email: "soldelmar17@gmail.com",
    phones: [
      {
        display: "+58 416-5526627",
        href: "https://wa.me/584165526627",
        isWhatsApp: true,
        label: "WhatsApp / Móvil",
      },
      {
        display: "+58 412-0568989",
        href: "tel:+584120568989",
        isWhatsApp: false,
        label: "Móvil",
      },
    ],
    linkedin: {
      url: "https://linkedin.com/in/solangge-naranjo-55b48857",
      display: "linkedin.com/in/solangge-naranjo-55b48857",
    },
    pdfUrl: "/CV_Solangge_Naranjo.pdf",
  },
  summary:
    "Licenciada en Ciencia y Cultura de la Alimentación con 20 años de experiencia integrando producción operativa y control de calidad en el sector agroindustrial y retail. Trayectoria comprobada en planificación de líneas, gestión de equipos, implementación de sistemas HACCP/ISO 22000 y optimización de flujos productivos. Experiencia en diseño de laboratorios técnicos, análisis fisicoquímicos y reológicos (equipos Perten y Chopin), y gestión integral de plantas desde montaje de equipos hasta auditoría de inventarios. Orientada al análisis de datos (KPIs) y manejo de sistemas ERP (SAP/STELLAR) para toma de decisiones que impulsan eficiencia operativa, inocuidad del producto y liderazgo de equipos de alto desempeño.",
  experience: [
    {
      company: "KESKUS SUPERMARKET",
      location: "Barquisimeto",
      period: "08/2024 – Actualidad",
      role: "Supervisora de Producción y Calidad",
      achievements: [
        {
          title: "Cumplimiento Continuo de Inocuidad",
          description:
            "Garanticé estándares BPM e inocuidad en múltiples líneas (panadería y café), evitando no conformidades en auditorías internas.",
        },
        {
          title: "Visibilidad Financiera desde Cero",
          description:
            "Diseñé e implementé estructura de costos para panadería y café, permitiendo por primera vez análisis de rentabilidad por producto.",
        },
        {
          title: "Estandarización que Reduce Errores",
          description:
            "Creé manuales de procesos y recetas donde no existía documentación, logrando reducción de errores y tiempos de capacitación más cortos.",
        },
        {
          title: "KPIs que Cambiaron la Operación",
          description:
            "Implementé indicadores de rendimiento que transformaron la forma de trabajar del equipo y coordiné acciones correctivas antes de que las desviaciones impactaran la calidad.",
        },
        {
          title: "Planificación que Cumple Metas",
          description:
            "Estructuré planificación semanal con gestión directa de equipos, asegurando cumplimiento consistente de metas de volumen, calidad e inocuidad.",
        },
      ],
    },
    {
      company: "RIO SUPERMARKET",
      location: "Barquisimeto",
      period: "02/2024 – 08/2024",
      role: "Supervisora de Control Interno de Inventario",
      achievements: [
        {
          title: "Integridad de Stock",
          description:
            "Auditoría integral de movimientos de inventario, fortaleciendo controles internos para minimizar pérdidas operativas y discrepancias entre sistema físico y administrativo.",
        },
        {
          title: "Trazabilidad Documental",
          description:
            "Estandaricé registros de entrada/salida para garantizar trazabilidad completa y facilitar auditorías internas.",
        },
        {
          title: "Eficiencia Logística",
          description:
            "Coordiné interdepartamentalmente producción, almacén y ventas, implementando protocolos más eficientes que agilizaron el flujo de mercancía.",
        },
      ],
    },
    {
      company: "INDUSTRIAS FAMADEREZO",
      location: "Barquisimeto",
      period: "06/2023 – 10/2023",
      role: "Supervisora de Producción y Calidad — Proyecto Temporal de Implementación",
      achievements: [
        {
          title: "Implementación Normativa desde Cero",
          description:
            "Diseñé manuales BPF, programas de control de plagas y protocolos de saneamiento en operación sin documentación previa.",
        },
        {
          title: "Monitoreo por KPIs",
          description:
            "Implementé indicadores de gestión para evaluar rendimiento de línea y coordinar mantenimiento preventivo/correctivo con el equipo técnico.",
        },
      ],
    },
    {
      company: "SILOS Y SECADO C.A. (SISECA)",
      location: "Barquisimeto",
      period: "07/2012 – 06/2023",
      role: "Supervisora de Operaciones / Analista de Calidad",
      highlightBadge: "Promovida en 2018 por alto desempeño",
      achievements: [
        {
          title: "11 años de Crecimiento y Operación Estable",
          description:
            "Inicié como Analista de Calidad y fui promovida a Supervisora de Operaciones en 2018, liderando la planta procesadora de cereales y garantizando continuidad operativa, montaje de equipos industriales y formulación de nuevos productos.",
        },
        {
          title: "Sistema HACCP Vivo, No Archivado",
          description:
            "Mantuve HACCP y manuales BPF bajo ISO 9001:2015 aplicados en planta, asegurando cumplimiento real en cada auditoría.",
        },
        {
          title: "Laboratorio de Trigo Creado desde Cero",
          description:
            "Diseñé y operé el laboratorio de trigo, estableciendo especificaciones técnicas de materia prima y producto terminado que se convirtieron en estándar de referencia.",
        },
        {
          title: "Control Analítico como Estándar Diario",
          description:
            "Establecí análisis fisicoquímico y reológico con equipos Perten y Chopin como control rutinario, eliminando dependencia de revisiones externas.",
        },
        {
          title: "Trazabilidad que Protege al Cliente",
          description:
            "Gestioné trazabilidad completa (lotes, recall, certificados de calidad) para respuesta rápida ante incidencias.",
        },
      ],
    },
    {
      company: "ESLAMO – Escuela Latinoamericana de Molinería",
      location: "Puerto Cabello",
      period: "10/2006 – 07/2012",
      role: "Coordinadora de Gerencia / Analista de Laboratorio",
      highlightBadge: "Promovida en 2008",
      achievements: [
        {
          title: "Acreditación de Laboratorios",
          description:
            "Soporte técnico en laboratorios fisicoquímicos y reológicos para certificaciones ISO 17025 e ISO 22000.",
        },
        {
          title: "Formación Técnica Especializada",
          description:
            "Coordiné programas de formación y ejecuté pruebas piloto para empresas del sector molinero.",
        },
      ],
    },
  ],
  skills: [
    {
      category: "Producción & Calidad",
      skills: [
        "Planificación de líneas",
        "Optimización de flujos",
        "Control de costos",
        "Reducción de mermas",
        "Mantenimiento preventivo/correctivo",
        "Gestión de equipos",
        "HACCP, ISO 22000, ISO 9001:2015, ISO 17025",
        "BPM / BPF",
        "Auditorías internas",
        "Trazabilidad y recall",
      ],
    },
    {
      category: "Laboratorio & Software",
      skills: [
        "Análisis fisicoquímicos y reológicos",
        "Equipos Perten y Chopin",
        "Control MP y PT (Materia Prima / Producto Terminado)",
        "Diseño de laboratorios",
        "SAP & Stellar ERP",
        "Excel avanzado para analítica",
        "KPIs de producción y calidad",
      ],
    },
  ],
  education: {
    degrees: [
      {
        degree: "Licenciatura en Ciencia y Cultura de la Alimentación",
        institution: "Universidad Nacional Experimental del Yaracuy (UNEY)",
        year: "2006",
      },
    ],
    complementary: [
      "Especialización en Tecnología de los Cereales",
      "Diplomado Internacional en Sistema de Gestión Integrado (HSEQ) – Auditor Interno",
      "Diplomado en Gestión y Auditoría en Inocuidad Alimentaria (ISO 22000)",
      "Diplomado en Gestión de la Producción y Operaciones Industriales",
    ],
  },
  lastUpdated: "Septiembre 2026",
};
