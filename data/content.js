window.PORTFOLIO = {
  "name": "Alessandro Donina",
  "intro": "MSc Aerospace Engineering student at Politecnico di Torino, specializing in aerodynamics.",
  "about": [
    "I am a final-year Master’s student in Aerospace Engineering at Politecnico di Torino, specializing in aerodynamics.",
    "During high school, which focused on science and aeronautics, I realized that I wanted to become an aerospace engineer. My interest in fluid dynamics grew during the Thermal-Fluid Dynamics and Aerodynamics course in my Bachelor’s degree, leading me to pursue a Master’s specialization in aerodynamics.",
    "My studies cover gasdynamics, unsteady aerodynamics, aeroelasticity, turbulent flows, CFD, aeroacoustics and experimental aerodynamics. My academic projects include analysis of experimental data, low-fidelity aeroacoustic tools, CFD with ANSYS Fluent and STAR-CCM+, and a 2D Euler solver in Fortran.",
    "At the ZEFIRO Student Team, focused on urban air mobility, I progressed into technical management, coordinating engineering tasks and deadlines. I worked on propeller design and selection, including a custom Python tool to optimize a ducted-propeller system.",
    "I contributed to the final design optimizations of VESPA Mk1, an agricultural eVTOL, including winglet design and parachute fairing. For the Airspeeder electric racing eVTOL project, I helped draft administrative and participation agreements and developed the initial workflow for aerodynamic and structural optimization of the Mk3c prototype.",
    "I am currently looking for an industry-based thesis where I can apply my knowledge to real-world problems and learn from experienced professionals."
  ],
  "cv": "assets/documents/Alessandro-Donina-CV.pdf",
  "portfolio": "assets/documents/Alessandro-Donina-Portfolio.pdf",
  "email": "alessandrodonina@gmail.com",
  "linkedin": "https://www.linkedin.com/in/alessandro-donina",
  "projects": [
    {
      "title": "Numerical solution of convective heat transfer over a finite flat plate",
      "category": "Bachelor’s thesis",
      "description": "Numerical study of the laminar thermal boundary layer over a partially heated flat plate, solved with a self-similar formulation and finite elements.",
      "summary": [
        "Bachelor’s thesis in Aerospace Engineering at Politecnico di Torino (2024/2025), supervised by Prof. Michele Iovieno. It studies convective heat transfer in the thermal boundary layer over a finite flat plate, heated over part of its surface.",
        "Starting from the energy equation, and assuming incompressible flow with constant properties, the problem is reduced to a self-similar equation in the variables η and ζ. The velocity field comes from the Blasius solution.",
        "The Blasius equation is solved in MATLAB with a shooting method, using Newton iteration and ode45. The self-similar temperature equation is then solved with linear finite elements.",
        "The Nusselt number increases with the Prandtl number, so heat transfer is more efficient in fluids with higher Pr. Where the plate is not heated (ζ < 0), Nu is zero. The Pr = 50 case shows oscillations because its thermal layer is thin and needs a finer grid."
      ],
      "cover": "assets/tesi_images/05-risultati/fig-5-4-nusselt.jpg",
      "tags": [
        "MATLAB",
        "Finite elements",
        "Blasius",
        "Nusselt number"
      ],
      "aside": {
        "src": "assets/tesi_images/05-risultati/fig-5-4-nusselt.jpg",
        "caption": "Figure 5.4 — Nusselt number Nu(ζ) for Pr = 0.7, 7 and 50."
      },
      "gallery_title": "Dimensionless temperature Θ by fluid",
      "gallery": [
        {
          "src": "assets/tesi_images/05-risultati/fluidi/aria-pr-0-7.jpg",
          "caption": "Air — Pr = 0.7"
        },
        {
          "src": "assets/tesi_images/05-risultati/fluidi/acqua-pr-7.jpg",
          "caption": "Water — Pr = 7"
        },
        {
          "src": "assets/tesi_images/05-risultati/fluidi/olio-pr-50.jpg",
          "caption": "Oil — Pr = 50"
        }
      ]
    },
    {
      "title": "Ducted Propeller Design",
      "category": "Propulsion / CFD",
      "description": "Custom Bayesian optimizer for designing ducted propellers, validated through CFD. It generated up to 700 N of thrust with a 0.72 meter diameter duct.",
      "tags": [
        "Bayesian optimization",
        "CFD"
      ],
      "detail": "The system generated up to 700 N of thrust with a 0.72 meter diameter duct.",
      "cover": "assets/ducted_propeller_images/fig-02.png",
      "gallery": [
        {
          "src": "assets/ducted_propeller_images/fig-01.jpeg",
          "caption": "Figure 1 — Ducted Propeller Design"
        },
        {
          "src": "assets/ducted_propeller_images/fig-02.png",
          "caption": "Figure 2 — Ducted Propeller Design"
        },
        {
          "src": "assets/ducted_propeller_images/fig-03.png",
          "caption": "Figure 3 — Ducted Propeller Design"
        }
      ]
    },
    {
      "title": "2D Euler Code in Fortran",
      "category": "Computational fluid dynamics",
      "description": "Fluid dynamics code developed for the Computational Fluid Dynamics of Propulsive Systems course, using Roe and Lax–Friedrichs methods.",
      "tags": [
        "Fortran",
        "Roe",
        "Lax–Friedrichs"
      ],
      "detail": "LS59 turbine blade test case, with comparison against RANS and experimental data.",
      "cover": "assets/euler_fortran_images/fig-01.jpeg",
      "gallery": [
        {
          "src": "assets/euler_fortran_images/fig-01.jpeg",
          "caption": "Figure 1 — 2D Euler Code in Fortran"
        },
        {
          "src": "assets/euler_fortran_images/fig-02.png",
          "caption": "Figure 2 — 2D Euler Code in Fortran"
        }
      ]
    },
    {
      "title": "Propeller Performance Characterization",
      "category": "Experimental analysis",
      "description": "Custom code to compute relevant quantities to characterize propellers from raw load-cell data as the advance ratio changes.",
      "tags": [
        "Load-cell data",
        "Propeller performance"
      ],
      "detail": "Thrust coefficient, torque coefficient and efficiency versus advance ratio.",
      "cover": "assets/propeller_performance_images/fig-01.png",
      "gallery": [
        {
          "src": "assets/propeller_performance_images/fig-01.png",
          "caption": "Figure 1 — Propeller Performance Characterization"
        },
        {
          "src": "assets/propeller_performance_images/fig-02.png",
          "caption": "Figure 2 — Propeller Performance Characterization"
        },
        {
          "src": "assets/propeller_performance_images/fig-03.png",
          "caption": "Figure 3 — Propeller Performance Characterization"
        }
      ]
    },
    {
      "title": "Propeller Tonal Noise Analysis",
      "category": "Aeroacoustics",
      "description": "Custom code to compute propeller tonal noise through far-field spectra and directivity, in steady and unsteady conditions.",
      "tags": [
        "Tonal noise",
        "Directivity"
      ],
      "detail": "NACA 3420 propeller at 6000 RPM and 16 m/s; NACA 4412 propeller at 6000 RPM and 12 m/s, validated against high-fidelity simulations.",
      "cover": "assets/propeller_tonal_noise_images/fig-01.jpeg",
      "gallery": [
        {
          "src": "assets/propeller_tonal_noise_images/fig-01.jpeg",
          "caption": "Figure 1 — Propeller Tonal Noise Analysis"
        },
        {
          "src": "assets/propeller_tonal_noise_images/fig-02.jpeg",
          "caption": "Figure 2 — Propeller Tonal Noise Analysis"
        }
      ]
    },
    {
      "title": "Trailing Edge Noise Analysis",
      "category": "Aeroacoustics",
      "description": "Custom code to compute trailing edge noise using Amiet’s and Roger’s diffraction theories, validating the results against experimental data.",
      "tags": [
        "Amiet",
        "Roger",
        "Experimental validation"
      ],
      "detail": "NACA 0018 test case, comparing experimental data with numerical results across different wall-pressure models.",
      "cover": "assets/trailing_edge_noise_images/fig-01.png",
      "gallery": [
        {
          "src": "assets/trailing_edge_noise_images/fig-01.png",
          "caption": "Figure 1 — Trailing Edge Noise Analysis"
        }
      ]
    }
  ]
};