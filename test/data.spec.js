import { describe, it } from 'eslint/lib/rule-tester/rule-tester';
import { sortData, filters, calCp } from '../src/data.js';

//-------------------------------------------SORTDATA-----------------------------------------------
describe("sortData",()=>{ 
  it("deveria retornar os  pokémons em ordem alfabética", () => {
  const atual = [
    {
      "num": "001",
      "name": "bulbasaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
        },
      "type": [
        "grass",
        "poison"
      ]
    }, 
    {
      "num": "002",
      "name": "ivysaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "type": [
        "grass",
        "poison"
      ]
    },
    {
      "num": "157",
      "name": "typhlosion",
      "generation": {
        "num": "generation ii",
        "name": "johto"
      },
      "type": [
        "fire"
      ],
    },
    {
      "num": "225",
      "name": "delibird",
      "generation": {
        "num": "generation ii",
        "name": "johto"
      },
      "type": [
        "ice",
        "flying"
      ]
    },
    {
      "num": "226",
      "name": "mantine",
      "generation": {
        "num": "generation ii",
        "name": "johto"
      },
      "type": [
        "water",
        "flying"
      ]
    }
  ];
  
  const resultado = [
    {
      "num": "001",
      "name": "bulbasaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
        },
      "type": [
        "grass",
        "poison"
      ]
    }, 
    {
      "num": "225",
      "name": "delibird",
      "generation": {
        "num": "generation ii",
        "name": "johto"
      },
      "type": [
        "ice",
        "flying"
      ]
    },
    {
      "num": "002",
      "name": "ivysaur",
      "generation": {
        "num": "generation i",
        "name": "kanto"
      },
      "type": [
        "grass",
        "poison"
      ]
    },
    {
      "num": "226",
      "name": "mantine",
      "generation": {
        "num": "generation ii",
        "name": "johto"
      },
      "type": [
        "water",
        "flying"
      ]
    },
    {
      "num": "157",
      "name": "typhlosion",
      "generation": {
        "num": "generation ii",
        "name": "johto"
      },
      "type": [
        "fire"
      ],
    }
  ];
  expect(sortData(atual, "a-z")).toEqual(resultado);
  });

  it("deveria retornar os pokémons em ordem alfabética decrescente", () => {
    const atual = [
      {
        "num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
          },
        "type": [
          "grass",
          "poison"
        ]
      }, 
      {
        "num": "002",
        "name": "ivysaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ]
      },
      {
        "num": "157",
        "name": "typhlosion",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "fire"
        ],
      },
      {
        "num": "225",
        "name": "delibird",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "ice",
          "flying"
        ]
      },
      {
        "num": "226",
        "name": "mantine",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "water",
          "flying"
        ]
      }
    ];
    
    const resultado = [
      {
        "num": "157",
        "name": "typhlosion",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "fire"
        ],
      },
      {
        "num": "226",
        "name": "mantine",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "water",
          "flying"
        ]
      },
      {
        "num": "002",
        "name": "ivysaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ]
      },
      {
        "num": "225",
        "name": "delibird",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "ice",
          "flying"
        ]
      },
      {
        "num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
          },
        "type": [
          "grass",
          "poison"
        ]
      }
    ];
    expect(sortData(atual, "z-a")).toEqual(resultado);
  });

  it("deveria retornar os pokémons em ordem crescente", () => {
    
    const atual = [
      {
        "num": "157",
        "name": "typhlosion",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "fire"
        ],
      },
      {
        "num": "226",
        "name": "mantine",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "water",
          "flying"
        ]
      },
      {
        "num": "002",
        "name": "ivysaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ]
      },
      {
        "num": "225",
        "name": "delibird",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "ice",
          "flying"
        ]
      },
      {
        "num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
          },
        "type": [
          "grass",
          "poison"
        ]
      }
    ];

    const resultado = [
      {
        "num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
          },
        "type": [
          "grass",
          "poison"
        ]
      }, 
      {
        "num": "002",
        "name": "ivysaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ]
      },
      {
        "num": "157",
        "name": "typhlosion",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "fire"
        ],
      },
      {
        "num": "225",
        "name": "delibird",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "ice",
          "flying"
        ]
      },
      {
        "num": "226",
        "name": "mantine",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "water",
          "flying"
        ]
      }
    ];
    
    expect(sortData(atual, "cres")).toEqual(resultado);
  });

  it("deveria retornar os pokémons em ordem decrescente", () => {
    
    const atual = [
      {
        "num": "157",
        "name": "typhlosion",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "fire"
        ],
      },
      {
        "num": "226",
        "name": "mantine",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "water",
          "flying"
        ]
      },
      {
        "num": "002",
        "name": "ivysaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ]
      },
      {
        "num": "225",
        "name": "delibird",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "ice",
          "flying"
        ]
      },
      {
        "num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
          },
        "type": [
          "grass",
          "poison"
        ]
      }
    ];

    const resultado = [
      {
        "num": "226",
        "name": "mantine",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "water",
          "flying"
        ]
      },
      {
        "num": "225",
        "name": "delibird",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "ice",
          "flying"
        ]
      },
      {
        "num": "157",
        "name": "typhlosion",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "fire"
        ],
      },
      {
        "num": "002",
        "name": "ivysaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ]
      },
      {
        "num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
          },
        "type": [
          "grass",
          "poison"
        ]
      }
    ];
    
    expect(sortData(atual, "decres")).toEqual(resultado);
  });
});
//------------------------------------------FILTERS----------------------------------------------
describe("filters",()=> {
//--------------------------------------------TYPE----------------------------------------------------
  const atual =[
  {
    "num": "001",
    "name": "bulbasaur",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "grass",
      "poison"
    ]
  },
  {
    "num": "004",
    "name": "charmander",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire"
    ]
  },
  {
    "num": "006",
    "name": "charizard",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fire",
      "flying"
    ]
  },
  {
    "num": "007",
    "name": "squirtle",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water"
    ]
  },
  {
    "num": "010",
    "name": "caterpie",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "bug"
    ]
  },
  {
    "num": "016",
    "name": "pidgey",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "normal",
      "flying"
    ]
  },
  {
    "num": "025",
    "name": "pikachu",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
    "electric"
    ]
  },
  {
    "num": "027",
    "name": "sandshrew",
    "generation": {
    "num": "generation i",
    "name": "kanto"
    },
    "type": [
      "ground"
    ]
  },
  {
    "num": "056",
    "name": "mankey",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "fighting"
    ]
  },
  {
    "num": "063",
    "name": "abra",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "psychic"
    ]
  },
  {
    "num": "074",
    "name": "geodude",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "rock",
      "ground"
    ]
  },
  {
    "num": "087",
    "name": "dewgong",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "water",
      "ice"
    ]
  },
  {
    "num": "092",
    "name": "gastly",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "ghost",
      "poison"
    ]
  },
  {
    "num": "147",
    "name": "dratini",
    "generation": {
      "num": "generation i",
      "name": "kanto"
    },
    "type": [
      "dragon"
    ]
  },
  {
    "num": "197",
    "name": "umbreon",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "type": [
      "dark"
    ]
  },
  {
    "num": "205",
    "name": "forretress",
    "generation": {
      "num": "generation ii",
      "name": "johto"
    },
    "type": [
      "bug",
      "steel"
    ]
  }
  ];  
  it("deveria retornar os pokémons tipo grass",()=> {
    
    const resultado=[
      {
        "num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ]
      }
    ];

    expect(filters(atual,"grass","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo poison ",()=> {
    const resultado=[
      {
        "num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ]
      },
      {
        "num": "092",
        "name": "gastly",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "ghost",
          "poison"
        ]
      }
    ];

    expect(filters(atual,"poison","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo fire",()=> {
    const resultado=[
      {
        "num": "004",
        "name": "charmander",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "fire"
        ]
      },
      {
        "num": "006",
        "name": "charizard",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "fire",
          "flying"
        ]
      }

    ];

    expect(filters(atual,"fire","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo flying",()=> {
    const resultado=[
      {
        "num": "006",
        "name": "charizard",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "fire",
          "flying"
        ]
      },
      {
        "num": "016",
        "name": "pidgey",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "normal",
          "flying"
        ]
      }

    ];

    expect(filters(atual,"flying","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo water",()=> {
   
    const resultado=[
      {
        "num": "007",
        "name": "squirtle",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "water"
        ]
      },
      {
        "num": "087",
        "name": "dewgong",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "water",
          "ice"
        ]
      }
      
    ];

    expect(filters(atual,"water","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo bug",()=> {
  
    const resultado=[
      {
        "num": "010",
        "name": "caterpie",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "bug"
        ]
      },
      {
        "num": "205",
        "name": "forretress",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "bug",
          "steel"
        ]
      }

  
    ];

    expect(filters(atual,"bug","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo normal",()=> {
  
    const resultado=[
      {
        "num": "016",
        "name": "pidgey",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "normal",
          "flying"
        ]
      }
    ];

    expect(filters(atual,"normal","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo eletric",()=> {
 
    const resultado=[
      {
        "num": "025",
        "name": "pikachu",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
        "electric"
        ]
      }
      
    ];

    expect(filters(atual,"electric","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo ground",()=> {
 
    const resultado=[
      {
        "num": "027",
        "name": "sandshrew",
        "generation": {
        "num": "generation i",
        "name": "kanto"
        },
        "type": [
          "ground"
        ]
      },
      {
        "num": "074",
        "name": "geodude",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
        "rock",
        "ground"
        ]
      }
      
    ];

    expect(filters(atual,"ground","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo fighting",()=> {

    const resultado=[
      {
        "num": "056",
        "name": "mankey",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "fighting"
        ]
      }
    ];

    expect(filters(atual,"fighting","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo psychic",()=> {
 
    const resultado=[
      {
        "num": "063",
        "name": "abra",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "psychic"
        ]
      }
    ];

    expect(filters(atual,"psychic","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo rock",()=> {
  
    const resultado=[
      {
        "num": "074",
        "name": "geodude",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "rock",
          "ground"
        ]
      }
    ];

    expect(filters(atual,"rock","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo ice",()=> {
 
    const resultado=[
      {
        "num": "087",
        "name": "dewgong",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "water",
          "ice"
        ]
      }
    ];

    expect(filters(atual,"ice","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo ghost",()=> {
   
    const resultado=[
      {
        "num": "092",
        "name": "gastly",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "ghost",
          "poison"
        ]
      }
    ];

    expect(filters(atual,"ghost","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo dragon",()=> {
  
    const resultado=[
      {
        "num": "147",
        "name": "dratini",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "dragon"
        ]
      }
    ];

    expect(filters(atual,"dragon","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo dark",()=> {
  
    const resultado=[
      {
        "num": "197",
        "name": "umbreon",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "dark"
        ]
      }
    ];

    expect(filters(atual,"dark","type")).toEqual(resultado);
  });

  it("deveria retornar os pokémons tipo steel",()=> {
 
    const resultado=[
      {
        "num": "205",
        "name": "forretress",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "bug",
          "steel"
        ]
      }
    ];

    expect(filters(atual,"steel","type")).toEqual(resultado);
  });
//-----------------------------------------------GENERATION----------------------------------------------
  it("deveria retornar os pokémons da geração kanto",()=> {
    const resultado=[
      {
        "num": "001",
        "name": "bulbasaur",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "grass",
          "poison"
        ]
      },
      {
        "num": "004",
        "name": "charmander",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "fire"
        ]
      },
      {
        "num": "006",
        "name": "charizard",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "fire",
          "flying"
        ]
      },
      {
        "num": "007",
        "name": "squirtle",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "water"
        ]
      },
      {
        "num": "010",
        "name": "caterpie",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "bug"
        ]
      },
      {
        "num": "016",
        "name": "pidgey",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "normal",
          "flying"
        ]
      },
      {
        "num": "025",
        "name": "pikachu",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
        "electric"
        ]
      },
      {
        "num": "027",
        "name": "sandshrew",
        "generation": {
        "num": "generation i",
        "name": "kanto"
        },
        "type": [
          "ground"
        ]
      },
      {
        "num": "056",
        "name": "mankey",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "fighting"
        ]
      },
      {
        "num": "063",
        "name": "abra",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "psychic"
        ]
      },
      {
        "num": "074",
        "name": "geodude",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "rock",
          "ground"
        ]
      },
      {
        "num": "087",
        "name": "dewgong",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "water",
          "ice"
        ]
      },
      {
        "num": "092",
        "name": "gastly",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "ghost",
          "poison"
        ]
      },
      {
        "num": "147",
        "name": "dratini",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "type": [
          "dragon"
        ]
      }
    ];

    expect(filters(atual,"kanto","generation")).toEqual(resultado);
  });

  it("deveria retornar os pokémons da geração johto",()=> {
  
    const resultado=[
      {
        "num": "197",
        "name": "umbreon",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "dark"
        ]
      },
      {
        "num": "205",
        "name": "forretress",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "type": [
          "bug",
          "steel"
        ]
      }

    ];

    expect(filters(atual,"johto","generation")).toEqual(resultado);
  });
});
//--------------------------------------------CALCP----------------------------------------------
describe("calCp",()=> {
  it("deveria retornar a subtração entre o max-cp e o valor passado por parâmetro", () => { 
    const atual = [
      {
        "num": "065",
        "name": "alakazam",
        "generation": {
          "num": "generation i",
          "name": "kanto"
        },
        "stats": {
          "base-attack": "271",
          "base-defense": "167",
          "base-stamina": "146",
          "max-cp": "3057",
          "max-hp": "127"
        }
      },
      {
        "num": "192",
        "name": "sunflora",
        "generation": {
          "num": "generation ii",
          "name": "johto"
        },
        "stats": {
          "base-attack": "185",
          "base-defense": "135",
          "base-stamina": "181",
          "max-cp": "2141",
          "max-hp": "154"
        }
      }
  
    ];
  
    const resultado = 57;
    
    expect(calCp(atual,0, "3000")).toEqual(resultado);
  });
});