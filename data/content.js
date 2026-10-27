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
        "Bachelor’s thesis in Aerospace Engineering at Politecnico di Torino, supervised by Prof. Michele Iovieno. The aim of the thesis was to study convective heat transfer in the thermal boundary layer over a finite flat plate, heated over part of its surface.",
        "Starting from the energy equation, and assuming incompressible flow with constant properties, the problem is reduced to a self-similar equation in the variables η and ζ. The velocity field comes from the Blasius solution.",
        "The Blasius equation is solved in MATLAB with a shooting method, using the Newton method and fourth- and fifth-order Runge-Kutta methods. The self-similar temperature equation is then solved with linear finite elements using a custom-made code.",
        "The results show how the Nusselt number increases with the Prandtl number, so heat transfer is more efficient in fluids with higher Pr, as the thermal boundary layer becomes thinner."
      ],
      "cover": "assets/tesi_images/05-risultati/fluidi/acqua-pr-7.jpg",
      "tags": [
        "Bachelor’s Thesis",
        "Thermal-Fluid Dynamics",
        "MATLAB",
        "Finite Elements"
      ],
      "download": {
        "label": "Download thesis",
        "href": "assets/documents/Alessandro-Donina-Bachelors-Thesis.pdf",
        "filename": "Alessandro-Donina-Bachelors-Thesis.pdf"
      },
      "aside": {
        "src": "assets/tesi_images/05-risultati/fig-5-4-nusselt.jpg",
        "caption": "Nusselt number Nu(ζ) for Pr = 0.7, 7 and 50."
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
      "summary": [
        "The ducted propeller was part of RED Ferraris, an eVTOL designed by the ZEFIRO Student Team for the 2025 VFS Competition. For the project, the team won the “Best New Entrant” Prize.",
        "The duct helped the propeller to generate an additional thrust of 700 N with a diameter of 0.72 meters: 16 motors, distributed along the front and rear wings, created a DEP (Distributed Electric Propulsion) system able to lift a 2.2-ton hydrogen eVTOL."
      ],
      "tags": [
        "Aerodynamic Optimization",
        "Bayesian Optimization",
        "CFD",
        "eVTOL"
      ],
      "cover": "assets/ducted_propeller_images/fig-02.png",
      "aside": {
        "src": "assets/ducted_propeller_images/fig-02.png",
        "caption": "CFD validation of the design."
      },
      "gallery": [
        {
          "src": "assets/ducted_propeller_images/fig-01.jpeg",
          "caption": "Duct profile"
        },
        {
          "src": "assets/ducted_propeller_images/fig-03.png",
          "caption": "Thrust"
        }
      ]
    },
    {
      "title": "2D Euler Code in Fortran",
      "category": "Computational Fluid Dynamics",
      "description": "Fluid dynamics code developed for the Computational Fluid Dynamics of Propulsive Systems course.",
      "summary": [
        "The objective of the course was to understand the math behind CFD solvers and to develop a 2D Euler code using Roe and Lax–Friedrichs methods.",
        "The code was developed in Fortran and could be run on any machine. The results were validated against RANS results and experimental results.",
        "One of the main differences between the results obtained from the code and the RANS/experimental ones was related to the absence of viscosity in the Euler equations."
      ],
      "tags": [
        "Fortran",
        "CFD",
        "ANSYS"
      ],
      "cover": "assets/euler_fortran_images/fig-01.jpeg",
      "aside": {
        "src": "assets/euler_fortran_images/fig-01.jpeg",
        "caption": "LS59 Mach contour with shock waves."
      },
      "gallery": [
        {
          "src": "assets/euler_fortran_images/fig-02.png",
          "caption": "Comparison with RANS and experimental data"
        }
      ]
    },
    {
      "title": "Propeller Performance Characterization",
      "category": "Experimental analysis",
      "description": "Custom code to compute relevant quantities to characterize propellers from raw load-cell data as the advance ratio changes.",
      "summary": [ "The code aimed to charachterize propeller's performances by data obtained from a load-cell giving forces and torque on the three spatial axes.",
                  "The data were obtained doing experimental analysis in a wind tunnel and then computed into torque and thrust coefficients, and efficiency.",
                  "Changing the wind tunnel air velocity, it has been possible to evaluate performance at different advance ratios, showing that higher-pitch propellers with more blades produce greater thrust, torque, and drag, while reducing blade count or pitch lowers these values.",
                  "All designs transition to windmilling at negative local angle of attack, with lower-pitch variants reaching this condition earlier due to their smaller blade angle.",
                  "Efficiency peaks at a similar range for every configuration, but the location of the peak shifts: low-pitch propellers optimize at lower advance ratios,"
                  "while higher-pitch designs reach maximum efficiency at higher speeds. Propeller selection must therefore match the operating conditions to balance thrust, torque, and efficiency."
                 ]
      "tags": [
        "Propeller performance",
        "Experiemntal Aerodynamics"
      ],
      "detail": "Thrust coefficient, torque coefficient and efficiency versus advance ratio.",
      "cover": "assets/propeller_performance_images/fig-01.png",
      "gallery": [
        {
          "src": "assets/propeller_performance_images/fig-01.png",
          "caption": "Thrust coefficient vs advance ratio"
        },
        {
          "src": "assets/propeller_performance_images/fig-02.png",
          "caption": "Torque coefficient vs advance ratio"
        },
        {
          "src": "assets/propeller_performance_images/fig-03.png",
          "caption": "Efficiency vs advance ratio"
        }
      ]
    },
    {
      "title": "Propeller Tonal Noise Analysis",
      "category": "Aeroacoustics",
      "description": "Custom code to compute propeller tonal noise through far-field spectra and directivity, in steady and unsteady conditions.",
       "summary": [
        "The code aim to charatcherize propeller's acoustics by knowing the loads on the propeller (thrust coefficient and torque coefficient) computed using BEMT.",
        "In the code, developed in MATLAB, the observer could be positioned at any distance and angle from the source, considered as a point in space.",
        "The noise was computed using Farassat Theory and Ffowcs Williams-Hawkings equation. The results was then compared to high-fidelity results from a CFD solver."]
      "tags": [
        "Aeroacoustics",
        "MATLAB",
        "BEMT",
      ],
      "cover": "assets/propeller_tonal_noise_images/fig-01.jpeg",
      "gallery": [
        {
          "src": "assets/propeller_tonal_noise_images/fig-01.jpeg",
          "caption": "Test case on a NACA 3420 propeller at 6000 RPM with axial velocity of 16 m/s"
        },
        {
          "src": "assets/propeller_tonal_noise_images/fig-02.jpeg",
          "caption": "Test case on a NACA 4412 propeller at 6000 RPM with axial velocity of 12 m/s (validated against high-fidelity simulations)"
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
          "caption": "Test case on a NACA 0018 comparing experimental data with numerical results across different wall-pressure models"
        }
      ]
    }
  ]
};
