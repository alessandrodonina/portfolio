window.PORTFOLIO = {
  "name": "Alessandro Donina",
  "intro": "MSc Aerospace Engineering student at Politecnico di Torino, specializing in aerodynamics.",
  "about": [
    "I am a final-year Master’s student in Aerospace Engineering at Politecnico di Torino, specializing in aerodynamics.",
    "During high school, which focused on science and aeronautics, I realized that I wanted to become an aerospace engineer. My interest in fluid dynamics grew during the Thermal-Fluid Dynamics and Aerodynamics course in my Bachelor’s degree, leading me to pursue a Master’s specialization in aerodynamics.",
    "My studies cover gasdynamics, unsteady aerodynamics, aeroelasticity, turbulent flows, CFD, aeroacoustics, and experimental aerodynamics. My academic projects include the analysis of experimental data, low-fidelity aeroacoustic tools, CFD with ANSYS Fluent and STAR-CCM+, and a 2D Euler solver in Fortran.",
    "At the ZEFIRO Student Team, focused on urban air mobility, I progressed into technical management, coordinating engineering tasks and deadlines. I worked on propeller design and selection, including a custom Python tool to optimize a ducted-propeller system.",
    "I contributed to the final design optimizations of VESPA Mk1, an agricultural eVTOL, including winglet design and parachute fairing. For the Airspeeder electric racing eVTOL project, I helped draft administrative and participation agreements, and developed the initial workflow for aerodynamic and structural optimization of the Mk3c prototype.",
    "I am currently looking for an industry-based thesis where I can apply my knowledge to real-world problems and learn from experienced professionals."
  ],
  "cv": "assets/documents/Alessandro-Donina-CV.pdf",
  "email": "alessandrodonina@gmail.com",
  "linkedin": "https://www.linkedin.com/in/alessandro-donina",
  "projects": [
    {
      "title": "Numerical solution of convective heat transfer over a finite flat plate",
      "category": "Bachelor’s thesis",
      "description": "Numerical study of the laminar thermal boundary layer over a partially heated flat plate, solved with a self-similar formulation and finite elements.",
      "summary": [
        "Bachelor’s thesis in Aerospace Engineering at Politecnico di Torino, supervised by Prof. Michele Iovieno. The aim of the thesis was to study convective heat transfer in the thermal boundary layer over a finite flat plate, heated over part of its surface.",
        "Starting from the energy equation, and assuming an incompressible flow with constant properties, the problem is reduced to a self-similar equation in the variables η and ζ. The velocity field comes from the Blasius solution.",
        "The Blasius equation is solved in MATLAB with a shooting method, using the Newton method and fourth- and fifth-order Runge-Kutta methods. The self-similar temperature equation is then solved with linear finite elements using a custom code.",
        "The results show how the Nusselt number increases with the Prandtl number, meaning heat transfer is more efficient in fluids with a higher Pr, as the thermal boundary layer becomes thinner."
      ],
      "cover": "assets/tesi_images/05-risultati/fluidi/acqua-pr-7.jpg",
      "tags": [
        "Thermal-Fluid Dynamics",
        "Finite Elements",
        "MATLAB"
      ],
      "download": {
        "label": "View thesis",
        "href": "assets/documents/Alessandro-Donina-Bachelors-Thesis.pdf"
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
      "category": "Design / Optimization",
      "description": "Custom Bayesian optimizer for designing ducted propellers, validated through CFD. It generated up to 700 N of thrust with a 0.72 meter diameter duct.",
      "summary": [
        "The ducted propeller was part of RED Ferraris, an eVTOL designed by the ZEFIRO Student Team for the 2025 VFS Competition. For this project, the team won the “Best New Entrant” Prize.",
        "The duct helped the propeller generate an additional thrust of 700 N with a diameter of 0.72 meters: 16 motors, distributed along the front and rear wings, created a DEP (Distributed Electric Propulsion) system able to lift a 2.2-ton hydrogen eVTOL."
      ],
      "tags": [
        "Aerodynamic Optimization",
        "Bayesian Optimization",
        "eVTOL",
        "ANSYS",
        "Python"
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
        "The objective of the course was to understand the mathematics behind CFD solvers and to develop a 2D Euler code using Roe and Lax–Friedrichs methods.",
        "The code was developed in Fortran and could be run on any machine. The outputs were validated against RANS simulations and reference experimental results.",
        "One of the main differences between the results obtained from the developed code and the RANS/experimental ones was related to the absence of viscosity in the Euler equations."
      ],
      "tags": [
        "Computational Fluid Dynamics",
        "ANSYS",
        "Fortran"
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
      "summary": [
        "The code aimed to characterize propeller performance using raw load-cell data, which provided forces and torque across the three spatial axes. This data was collected during experimental wind tunnel tests and subsequently converted into thrust, torque, and efficiency coefficients.",
        "By adjusting the wind tunnel air velocity, performance was evaluated at various advance ratios. Results indicated that higher-pitch propellers with more blades generate greater thrust, torque, and drag, whereas reducing blade count or pitch decreases these aerodynamic forces.",
        "All tested designs transitioned to windmilling at negative local angles of attack. Lower-pitch variants reached this condition earlier due to their smaller blade angles. Efficiency peaked within a similar range for all configurations, but the optimal point shifted based on pitch.",
        "Low-pitch propellers reached maximum efficiency at lower advance ratios, while higher-pitch designs optimized at higher speeds. Consequently, proper propeller selection requires matching operating conditions carefully to balance thrust, torque, and overall aerodynamic efficiency."
      ],
      "tags": [
        "Experimental Aerodynamics",
        "Propeller Performance",
        "MATLAB"
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
        "The developed code aims to characterize propeller acoustics based on aerodynamic loads, specifically thrust and torque coefficients, which were computed using the Blade Element Momentum Theory (BEMT).",
        "Written in MATLAB, the script allows the observer to be positioned at any arbitrary distance and angle relative to the acoustic source, which is modeled as a discrete point in space.",
        "The acoustic field was calculated applying Farassat's formulations and the Ffowcs Williams-Hawkings equation. These numerical results were subsequently validated against high-fidelity simulations from a robust CFD solver."
      ],
      "tags": [
        "Propeller Noise",
        "BEMT",
        "MATLAB"
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
      "summary": [
        "The project analyzes the trailing edge aerodynamic noise generated by a NACA 0018 airfoil. Six semi-empirical acoustic prediction models were implemented and compared with reference experimental data.",
        "Results indicate that Goody and Catlett underestimate the sound level, whereas Hu overestimates it at high frequencies. Conversely, Rozenberg, Kamruzzaman, and Lee's formulations proved to be the most accurate.",
        "The sound footprint was effectively calculated using boundary layer parameters at just two points. This method provides quick and reliable acoustic estimates, bypassing the need for heavy CFD simulations."
      ],
      "tags": [
        "Trailing Edge Noise",
        "xfoil",
        "MATLAB"
      ],
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
