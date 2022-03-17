const dogs = [
  {
    bred_for: "Small rodent hunting, lapdog",
    breed_group: "Toy",
    height: {
      imperial: "9 - 11.5",
      metric: "23 - 29"
    },
    id: 1,
    image: {
      height: 1199,
      id: "BJa4kxc4X",
      url: "https://cdn2.thedogapi.com/images/BJa4kxc4X.jpg",
      width: 1600
    },
    life_span: "10 - 12 years",
    name: "Affenpinscher",
    origin: "Germany, France",
    reference_image_id: "BJa4kxc4X",
    temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving",
    weight: {
      imperial: "6 - 13",
      metric: "3 - 6"
    }
  },
  {
    bred_for: "Coursing and hunting",
    breed_group: "Hound",
    country_code: "AG",
    height: {
      imperial: "25 - 27",
      metric: "64 - 69"
    },
    id: 2,
    image: {
      height: 380,
      id: "hMyT4CDXR",
      url: "https://cdn2.thedogapi.com/images/hMyT4CDXR.jpg",
      width: 606
    },
    life_span: "10 - 13 years",
    name: "Afghan Hound",
    origin: "Afghanistan, Iran, Pakistan",
    reference_image_id: "hMyT4CDXR",
    temperament: "Aloof, Clownish, Dignified, Independent, Happy",
    weight: {
      imperial: "50 - 60",
      metric: "23 - 27"
    }
  },
  {
    bred_for: "A wild pack animal",
    height: {
      imperial: "30",
      metric: "76"
    },
    id: 3,
    image: {
      height: 335,
      id: "rkiByec47",
      url: "https://cdn2.thedogapi.com/images/rkiByec47.jpg",
      width: 500
    },
    life_span: "11 years",
    name: "African Hunting Dog",
    origin: "",
    reference_image_id: "rkiByec47",
    temperament: "Wild, Hardworking, Dutiful",
    weight: {
      imperial: "44 - 66",
      metric: "20 - 30"
    }
  },
  {
    bred_for: "Badger, otter hunting",
    breed_group: "Terrier",
    height: {
      imperial: "21 - 23",
      metric: "53 - 58"
    },
    id: 4,
    image: {
      height: 430,
      id: "1-7cgoZSh",
      url: "https://cdn2.thedogapi.com/images/1-7cgoZSh.jpg",
      width: 645
    },
    life_span: "10 - 13 years",
    name: "Airedale Terrier",
    origin: "United Kingdom, England",
    reference_image_id: "1-7cgoZSh",
    temperament: "Outgoing, Friendly, Alert, Confident, Intelligent, Courageous",
    weight: {
      imperial: "40 - 65",
      metric: "18 - 29"
    }
  },
  {
    bred_for: "Sheep guarding",
    breed_group: "Working",
    height: {
      imperial: "28 - 34",
      metric: "71 - 86"
    },
    id: 5,
    image: {
      height: 471,
      id: "26pHT3Qk7",
      url: "https://cdn2.thedogapi.com/images/26pHT3Qk7.jpg",
      width: 600
    },
    life_span: "10 - 12 years",
    name: "Akbash Dog",
    origin: "",
    reference_image_id: "26pHT3Qk7",
    temperament: "Loyal, Independent, Intelligent, Brave",
    weight: {
      imperial: "90 - 120",
      metric: "41 - 54"
    }
  },
  {
    bred_for: "Hunting bears",
    breed_group: "Working",
    height: {
      imperial: "24 - 28",
      metric: "61 - 71"
    },
    id: 6,
    image: {
      height: 853,
      id: "BFRYBufpm",
      url: "https://cdn2.thedogapi.com/images/BFRYBufpm.jpg",
      width: 1280
    },
    life_span: "10 - 14 years",
    name: "Akita",
    reference_image_id: "BFRYBufpm",
    temperament: "Docile, Alert, Responsive, Dignified, Composed, Friendly, Receptive, Faithful, Courageous",
    weight: {
      imperial: "65 - 115",
      metric: "29 - 52"
    }
  },
  {
    bred_for: "Guarding",
    breed_group: "Mixed",
    description: "The Alapaha Blue Blood Bulldog is a well-developed, exaggerated bulldog with a broad head and natural drop ears. The prominent muzzle is covered by loose upper lips. The prominent eyes are set well apart. The Alapaha's coat is relatively short and fairly stiff. Preferred colors are blue merle, brown merle, or red merle all trimmed in white or chocolate and white. Also preferred are the glass eyes (blue) or marble eyes (brown and blue mixed in a single eye). The ears and tail are never trimmed or docked. The body is sturdy and very muscular. The well-muscled hips are narrower than the chest. The straight back is as long as the dog is high at the shoulders. The dewclaws are never removed and the feet are cat-like.",
    height: {
      imperial: "18 - 24",
      metric: "46 - 61"
    },
    history: "",
    id: 7,
    image: {
      height: 2065,
      id: "33mJ-V3RX",
      url: "https://cdn2.thedogapi.com/images/33mJ-V3RX.jpg",
      width: 1828
    },
    life_span: "12 - 13 years",
    name: "Alapaha Blue Blood Bulldog",
    reference_image_id: "33mJ-V3RX",
    temperament: "Loving, Protective, Trainable, Dutiful, Responsible",
    weight: {
      imperial: "55 - 90",
      metric: "25 - 41"
    }
  },
  {
    bred_for: "Sled pulling",
    breed_group: "Mixed",
    height: {
      imperial: "23 - 26",
      metric: "58 - 66"
    },
    id: 8,
    image: {
      height: 500,
      id: "-HgpNnGXl",
      url: "https://cdn2.thedogapi.com/images/-HgpNnGXl.jpg",
      width: 500
    },
    life_span: "10 - 13 years",
    name: "Alaskan Husky",
    reference_image_id: "-HgpNnGXl",
    temperament: "Friendly, Energetic, Loyal, Gentle, Confident",
    weight: {
      imperial: "38 - 50",
      metric: "17 - 23"
    }
  },
  {
    bred_for: "Hauling heavy freight, Sled pulling",
    breed_group: "Working",
    height: {
      imperial: "23 - 25",
      metric: "58 - 64"
    },
    id: 9,
    image: {
      height: 769,
      id: "dW5UucTIW",
      url: "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg",
      width: 1023
    },
    life_span: "12 - 15 years",
    name: "Alaskan Malamute",
    reference_image_id: "dW5UucTIW",
    temperament: "Friendly, Affectionate, Devoted, Loyal, Dignified, Playful",
    weight: {
      imperial: "65 - 100",
      metric: "29 - 45"
    }
  },
  {
    breed_group: "Working",
    height: {
      imperial: "22 - 27",
      metric: "56 - 69"
    },
    id: 10,
    image: {
      height: 1377,
      id: "pk1AAdloG",
      url: "https://cdn2.thedogapi.com/images/pk1AAdloG.jpg",
      width: 1669
    },
    life_span: "10 - 12 years",
    name: "American Bulldog",
    reference_image_id: "pk1AAdloG",
    temperament: "Friendly, Assertive, Energetic, Loyal, Gentle, Confident, Dominant",
    weight: {
      imperial: "60 - 120",
      metric: "27 - 54"
    }
  },
  {
    bred_for: "Family companion dog",
    breed_group: "",
    country_code: "US",
    height: {
      imperial: "14 - 17",
      metric: "36 - 43"
    },
    id: 11,
    image: {
      height: 683,
      id: "sqQJDtbpY",
      url: "https://cdn2.thedogapi.com/images/sqQJDtbpY.jpg",
      width: 1024
    },
    life_span: "8 – 15 years",
    name: "American Bully",
    reference_image_id: "sqQJDtbpY",
    temperament: "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
    weight: {
      imperial: "30 - 150",
      metric: "14 - 68"
    }
  },
  {
    bred_for: "Circus performer",
    breed_group: "Non-Sporting",
    country_code: "US",
    height: {
      imperial: "15 - 19",
      metric: "38 - 48"
    },
    id: 12,
    image: {
      height: 802,
      id: "Bymjyec4m",
      url: "https://cdn2.thedogapi.com/images/Bymjyec4m.jpg",
      width: 1000
    },
    life_span: "12 - 15 years",
    name: "American Eskimo Dog",
    reference_image_id: "Bymjyec4m",
    temperament: "Friendly, Alert, Reserved, Intelligent, Protective",
    weight: {
      imperial: "20 - 40",
      metric: "9 - 18"
    }
  },
  {
    bred_for: "Companionship",
    country_code: "US",
    height: {
      imperial: "9 - 12",
      metric: "23 - 30"
    },
    id: 13,
    image: {
      height: 487,
      id: "_gn8GLrE6",
      url: "https://cdn2.thedogapi.com/images/_gn8GLrE6.jpg",
      width: 730
    },
    life_span: "13 – 15 years",
    name: "American Eskimo Dog (Miniature)",
    reference_image_id: "_gn8GLrE6",
    temperament: "Friendly, Alert, Reserved, Intelligent, Protective",
    weight: {
      imperial: "7 - 10",
      metric: "3 - 5"
    }
  },
  {
    bred_for: "Fox hunting, scent hound",
    breed_group: "Hound",
    country_code: "US",
    height: {
      imperial: "21 - 28",
      metric: "53 - 71"
    },
    id: 14,
    image: {
      height: 2400,
      id: "S14n1x9NQ",
      url: "https://cdn2.thedogapi.com/images/S14n1x9NQ.jpg",
      width: 3000
    },
    life_span: "8 - 15 years",
    name: "American Foxhound",
    reference_image_id: "S14n1x9NQ",
    temperament: "Kind, Sweet-Tempered, Loyal, Independent, Intelligent, Loving",
    weight: {
      imperial: "65 - 75",
      metric: "29 - 34"
    }
  },
  {
    bred_for: "Fighting",
    breed_group: "Terrier",
    country_code: "US",
    height: {
      imperial: "17 - 21",
      metric: "43 - 53"
    },
    id: 15,
    image: {
      height: 244,
      id: "HkC31gcNm",
      url: "https://cdn2.thedogapi.com/images/HkC31gcNm.png",
      width: 300
    },
    life_span: "10 - 15 years",
    name: "American Pit Bull Terrier",
    reference_image_id: "HkC31gcNm",
    temperament: "Strong Willed, Stubborn, Friendly, Clownish, Affectionate, Loyal, Obedient, Intelligent, Courageous",
    weight: {
      imperial: "30 - 60",
      metric: "14 - 27"
    }
  },
  {
    bred_for: "",
    breed_group: "Terrier",
    country_code: "US",
    height: {
      imperial: "17 - 19",
      metric: "43 - 48"
    },
    id: 16,
    image: {
      height: 500,
      id: "rJIakgc4m",
      url: "https://cdn2.thedogapi.com/images/rJIakgc4m.jpg",
      width: 357
    },
    life_span: "12 - 15 years",
    name: "American Staffordshire Terrier",
    reference_image_id: "rJIakgc4m",
    temperament: "Tenacious, Friendly, Devoted, Loyal, Attentive, Courageous",
    weight: {
      imperial: "50 - 60",
      metric: "23 - 27"
    }
  },
  {
    bred_for: "Bird flushing and retrieving",
    breed_group: "Sporting",
    country_code: "US",
    height: {
      imperial: "15 - 18",
      metric: "38 - 46"
    },
    id: 17,
    image: {
      height: 1264,
      id: "SkmRJl9VQ",
      url: "https://cdn2.thedogapi.com/images/SkmRJl9VQ.jpg",
      width: 1600
    },
    life_span: "10 - 12 years",
    name: "American Water Spaniel",
    reference_image_id: "SkmRJl9VQ",
    temperament: "Friendly, Energetic, Obedient, Intelligent, Protective, Trainable",
    weight: {
      imperial: "25 - 45",
      metric: "11 - 20"
    }
  },
  {
    bred_for: "Livestock herding",
    breed_group: "Working",
    height: {
      imperial: "27 - 29",
      metric: "69 - 74"
    },
    id: 18,
    image: {
      height: 1131,
      id: "BJT0Jx5Nm",
      url: "https://cdn2.thedogapi.com/images/BJT0Jx5Nm.jpg",
      width: 1216
    },
    life_span: "11 - 13 years",
    name: "Anatolian Shepherd Dog",
    reference_image_id: "BJT0Jx5Nm",
    temperament: "Steady, Bold, Independent, Confident, Intelligent, Proud",
    weight: {
      imperial: "80 - 150",
      metric: "36 - 68"
    }
  },
  {
    bred_for: "Herding livestock, pulling carts, and guarding the farm",
    height: {
      imperial: "20 - 22",
      metric: "51 - 56"
    },
    id: 19,
    image: {
      height: 600,
      id: "HkNkxlqEX",
      url: "https://cdn2.thedogapi.com/images/HkNkxlqEX.jpg",
      width: 400
    },
    life_span: "12 – 14 years",
    name: "Appenzeller Sennenhund",
    reference_image_id: "HkNkxlqEX",
    temperament: "Reliable, Fearless, Energetic, Lively, Self-assured",
    weight: {
      imperial: "48 - 55",
      metric: "22 - 25"
    }
  },
  {
    bred_for: "Cattle herding, herding trials",
    breed_group: "Herding",
    country_code: "AU",
    height: {
      imperial: "17 - 20",
      metric: "43 - 51"
    },
    id: 21,
    image: {
      height: 850,
      id: "IBkYVm4v1",
      url: "https://cdn2.thedogapi.com/images/IBkYVm4v1.jpg",
      width: 736
    },
    life_span: "12 - 14 years",
    name: "Australian Cattle Dog",
    reference_image_id: "IBkYVm4v1",
    temperament: "Cautious, Energetic, Loyal, Obedient, Protective, Brave",
    weight: {
      imperial: "44 - 62",
      metric: "20 - 28"
    }
  },
  {
    bred_for: "Farm dog, Cattle herding",
    breed_group: "Herding",
    country_code: "AU",
    height: {
      imperial: "17 - 20",
      metric: "43 - 51"
    },
    id: 22,
    image: {
      height: 533,
      id: "Hyq1ge9VQ",
      url: "https://cdn2.thedogapi.com/images/Hyq1ge9VQ.jpg",
      width: 800
    },
    life_span: "10 - 13 years",
    name: "Australian Kelpie",
    reference_image_id: "Hyq1ge9VQ",
    temperament: "Friendly, Energetic, Alert, Loyal, Intelligent, Eager",
    weight: {
      imperial: "31 - 46",
      metric: "14 - 21"
    }
  },
  {
    bred_for: "Sheep herding",
    breed_group: "Herding",
    country_code: "AU",
    height: {
      imperial: "18 - 23",
      metric: "46 - 58"
    },
    id: 23,
    image: {
      height: 733,
      id: "B1-llgq4m",
      url: "https://cdn2.thedogapi.com/images/B1-llgq4m.jpg",
      width: 1200
    },
    life_span: "12 - 16 years",
    name: "Australian Shepherd",
    reference_image_id: "B1-llgq4m",
    temperament: "Good-natured, Affectionate, Intelligent, Active, Protective",
    weight: {
      imperial: "35 - 65",
      metric: "16 - 29"
    }
  },
  {
    bred_for: "Cattle herdering, hunting snakes and rodents",
    breed_group: "Terrier",
    country_code: "AU",
    height: {
      imperial: "10 - 11",
      metric: "25 - 28"
    },
    id: 24,
    image: {
      height: 720,
      id: "r1Ylge5Vm",
      url: "https://cdn2.thedogapi.com/images/r1Ylge5Vm.jpg",
      width: 1081
    },
    life_span: "15 years",
    name: "Australian Terrier",
    reference_image_id: "r1Ylge5Vm",
    temperament: "Spirited, Alert, Loyal, Companionable, Even Tempered, Courageous",
    weight: {
      imperial: "14 - 16",
      metric: "6 - 7"
    }
  },
  {
    bred_for: "Livestock guardian, hunting",
    breed_group: "Hound",
    height: {
      imperial: "23 - 29",
      metric: "58 - 74"
    },
    id: 25,
    image: {
      height: 768,
      id: "SkvZgx94m",
      url: "https://cdn2.thedogapi.com/images/SkvZgx94m.jpg",
      width: 1024
    },
    life_span: "10 - 13 years",
    name: "Azawakh",
    reference_image_id: "SkvZgx94m",
    temperament: "Aloof, Affectionate, Attentive, Rugged, Fierce, Refined",
    weight: {
      imperial: "33 - 55",
      metric: "15 - 25"
    }
  },
  {
    bred_for: "Hunting water game",
    height: {
      imperial: "20 - 26",
      metric: "51 - 66"
    },
    id: 26,
    image: {
      height: 1280,
      id: "HyWGexcVQ",
      url: "https://cdn2.thedogapi.com/images/HyWGexcVQ.jpg",
      width: 853
    },
    life_span: "13 – 15 years",
    name: "Barbet",
    reference_image_id: "HyWGexcVQ",
    temperament: "Obedient, Companionable, Intelligent, Joyful",
    weight: {
      imperial: "40 - 65",
      metric: "18 - 29"
    }
  },
  {
    bred_for: "Hunting",
    breed_group: "Hound",
    height: {
      imperial: "16 - 17",
      metric: "41 - 43"
    },
    id: 28,
    image: {
      height: 493,
      id: "H1dGlxqNQ",
      url: "https://cdn2.thedogapi.com/images/H1dGlxqNQ.jpg",
      width: 740
    },
    life_span: "10 - 12 years",
    name: "Basenji",
    reference_image_id: "H1dGlxqNQ",
    temperament: "Affectionate, Energetic, Alert, Curious, Playful, Intelligent",
    weight: {
      imperial: "22 - 24",
      metric: "10 - 11"
    }
  },
  {
    bred_for: "Hunting on foot.",
    breed_group: "Hound",
    height: {
      imperial: "13 - 15",
      metric: "33 - 38"
    },
    id: 29,
    image: {
      height: 853,
      id: "BkMQll94X",
      url: "https://cdn2.thedogapi.com/images/BkMQll94X.jpg",
      width: 1280
    },
    life_span: "10 - 14 years",
    name: "Basset Bleu de Gascogne",
    reference_image_id: "BkMQll94X",
    temperament: "Affectionate, Lively, Agile, Curious, Happy, Active",
    weight: {
      imperial: "35 - 40",
      metric: "16 - 18"
    }
  },
  {
    bred_for: "Hunting by scent",
    breed_group: "Hound",
    height: {
      imperial: "14",
      metric: "36"
    },
    id: 30,
    image: {
      height: 640,
      id: "Sy57xx9EX",
      url: "https://cdn2.thedogapi.com/images/Sy57xx9EX.jpg",
      width: 1024
    },
    life_span: "12 - 15 years",
    name: "Basset Hound",
    reference_image_id: "Sy57xx9EX",
    temperament: "Tenacious, Friendly, Affectionate, Devoted, Sweet-Tempered, Gentle",
    weight: {
      imperial: "50 - 65",
      metric: "23 - 29"
    }
  },
  {
    bred_for: "Rabbit, hare hunting",
    breed_group: "Hound",
    height: {
      imperial: "13 - 15",
      metric: "33 - 38"
    },
    id: 31,
    image: {
      height: 667,
      id: "Syd4xxqEm",
      url: "https://cdn2.thedogapi.com/images/Syd4xxqEm.jpg",
      width: 1000
    },
    life_span: "13 - 16 years",
    name: "Beagle",
    reference_image_id: "Syd4xxqEm",
    temperament: "Amiable, Even Tempered, Excitable, Determined, Gentle, Intelligent",
    weight: {
      imperial: "20 - 35",
      metric: "9 - 16"
    }
  },
  {
    bred_for: "Sheep herding",
    breed_group: "Herding",
    height: {
      imperial: "20 - 22",
      metric: "51 - 56"
    },
    id: 32,
    image: {
      height: 733,
      id: "A09F4c1qP",
      url: "https://cdn2.thedogapi.com/images/A09F4c1qP.jpg",
      width: 733
    },
    life_span: "12 - 14 years",
    name: "Bearded Collie",
    reference_image_id: "A09F4c1qP",
    temperament: "Self-confidence, Hardy, Lively, Alert, Intelligent, Active",
    weight: {
      imperial: "45 - 55",
      metric: "20 - 25"
    }
  },
  {
    bred_for: "Boar herding, hunting, guarding",
    breed_group: "Herding",
    height: {
      imperial: "24 - 27.5",
      metric: "61 - 70"
    },
    id: 33,
    image: {
      height: 563,
      id: "HJQ8ge5V7",
      url: "https://cdn2.thedogapi.com/images/HJQ8ge5V7.jpg",
      width: 720
    },
    life_span: "10 - 12 years",
    name: "Beauceron",
    reference_image_id: "HJQ8ge5V7",
    temperament: "Fearless, Friendly, Intelligent, Protective, Calm",
    weight: {
      imperial: "80 - 110",
      metric: "36 - 50"
    }
  },
  {
    bred_for: "Killing rat, badger, other vermin",
    breed_group: "Terrier",
    height: {
      imperial: "15 - 16",
      metric: "38 - 41"
    },
    id: 34,
    image: {
      height: 531,
      id: "ByK8gx947",
      url: "https://cdn2.thedogapi.com/images/ByK8gx947.jpg",
      width: 804
    },
    life_span: "14 - 16 years",
    name: "Bedlington Terrier",
    reference_image_id: "ByK8gx947",
    temperament: "Affectionate, Spirited, Intelligent, Good-tempered",
    weight: {
      imperial: "17 - 23",
      metric: "8 - 10"
    }
  },
  {
    bred_for: "Stock herding",
    breed_group: "Herding",
    height: {
      imperial: "22 - 26",
      metric: "56 - 66"
    },
    id: 36,
    image: {
      height: 453,
      id: "r1f_ll5VX",
      url: "https://cdn2.thedogapi.com/images/r1f_ll5VX.jpg",
      width: 604
    },
    life_span: "12 - 14 years",
    name: "Belgian Malinois",
    reference_image_id: "r1f_ll5VX",
    temperament: "Watchful, Alert, Stubborn, Friendly, Confident, Hard-working, Active, Protective",
    weight: {
      imperial: "40 - 80",
      metric: "18 - 36"
    }
  },
  {
    bred_for: "Guarding, Drafting, Police work.",
    breed_group: "Herding",
    height: {
      imperial: "22 - 26",
      metric: "56 - 66"
    },
    id: 38,
    image: {
      height: 380,
      id: "B1KdxlcNX",
      url: "https://cdn2.thedogapi.com/images/B1KdxlcNX.jpg",
      width: 645
    },
    life_span: "10 - 12 years",
    name: "Belgian Tervuren",
    reference_image_id: "B1KdxlcNX",
    temperament: "Energetic, Alert, Loyal, Intelligent, Attentive, Protective",
    weight: {
      imperial: "40 - 65",
      metric: "18 - 29"
    }
  },
  {
    bred_for: "Draft work",
    breed_group: "Working",
    height: {
      imperial: "23 - 27.5",
      metric: "58 - 70"
    },
    id: 41,
    image: {
      height: 427,
      id: "S1fFlx5Em",
      url: "https://cdn2.thedogapi.com/images/S1fFlx5Em.jpg",
      width: 640
    },
    life_span: "7 - 10 years",
    name: "Bernese Mountain Dog",
    reference_image_id: "S1fFlx5Em",
    temperament: "Affectionate, Loyal, Intelligent, Faithful",
    weight: {
      imperial: "65 - 120",
      metric: "29 - 54"
    }
  },
  {
    bred_for: "Companion",
    breed_group: "Non-Sporting",
    height: {
      imperial: "9.5 - 11.5",
      metric: "24 - 29"
    },
    id: 42,
    image: {
      height: 360,
      id: "HkuYlxqEQ",
      url: "https://cdn2.thedogapi.com/images/HkuYlxqEQ.jpg",
      width: 480
    },
    life_span: "15 years",
    name: "Bichon Frise",
    reference_image_id: "HkuYlxqEQ",
    temperament: "Feisty, Affectionate, Cheerful, Playful, Gentle, Sensitive",
    weight: {
      imperial: "10 - 18",
      metric: "5 - 8"
    }
  },
  {
    bred_for: "Hunting raccoons, night hunting",
    breed_group: "Hound",
    height: {
      imperial: "23 - 27",
      metric: "58 - 69"
    },
    id: 43,
    image: {
      height: 380,
      id: "HJAFgxcNQ",
      url: "https://cdn2.thedogapi.com/images/HJAFgxcNQ.jpg",
      width: 556
    },
    life_span: "10 - 12 years",
    name: "Black and Tan Coonhound",
    reference_image_id: "HJAFgxcNQ",
    temperament: "Easygoing, Gentle, Adaptable, Trusting, Even Tempered, Lovable",
    weight: {
      imperial: "65 - 100",
      metric: "29 - 45"
    }
  },
  {
    bred_for: "Trailing",
    breed_group: "Hound",
    height: {
      imperial: "23 - 27",
      metric: "58 - 69"
    },
    id: 45,
    image: {
      height: 600,
      id: "Skdcgx9VX",
      url: "https://cdn2.thedogapi.com/images/Skdcgx9VX.jpg",
      width: 586
    },
    life_span: "8 - 10 years",
    name: "Bloodhound",
    reference_image_id: "Skdcgx9VX",
    temperament: "Stubborn, Affectionate, Gentle, Even Tempered",
    weight: {
      imperial: "80 - 110",
      metric: "36 - 50"
    }
  },
  {
    bred_for: "Hunting with a superior sense of smell.",
    breed_group: "Hound",
    height: {
      imperial: "21 - 27",
      metric: "53 - 69"
    },
    id: 47,
    image: {
      height: 599,
      id: "rJxieg9VQ",
      url: "https://cdn2.thedogapi.com/images/rJxieg9VQ.jpg",
      width: 731
    },
    life_span: "12 - 14 years",
    name: "Bluetick Coonhound",
    reference_image_id: "rJxieg9VQ",
    temperament: "Friendly, Intelligent, Active",
    weight: {
      imperial: "45 - 80",
      metric: "20 - 36"
    }
  },
  {
    bred_for: "Guarding the homestead, farm work.",
    breed_group: "Working",
    height: {
      imperial: "22 - 27",
      metric: "56 - 69"
    },
    id: 48,
    image: {
      height: 669,
      id: "HyOjge5Vm",
      url: "https://cdn2.thedogapi.com/images/HyOjge5Vm.jpg",
      width: 1200
    },
    life_span: "10 - 12 years",
    name: "Boerboel",
    reference_image_id: "HyOjge5Vm",
    temperament: "Obedient, Confident, Intelligent, Dominant, Territorial",
    weight: {
      imperial: "110 - 200",
      metric: "50 - 91"
    }
  },
  {
    bred_for: "Sheep herder",
    breed_group: "Herding",
    height: {
      imperial: "18 - 22",
      metric: "46 - 56"
    },
    id: 50,
    image: {
      height: 1080,
      id: "sGQvQUpsp",
      url: "https://cdn2.thedogapi.com/images/sGQvQUpsp.jpg",
      width: 1080
    },
    life_span: "12 - 16 years",
    name: "Border Collie",
    reference_image_id: "sGQvQUpsp",
    temperament: "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",
    weight: {
      imperial: "30 - 45",
      metric: "14 - 20"
    }
  },
  {
    bred_for: "Fox bolting, ratting",
    breed_group: "Terrier",
    height: {
      imperial: "11 - 16",
      metric: "28 - 41"
    },
    id: 51,
    image: {
      height: 450,
      id: "HJOpge9Em",
      url: "https://cdn2.thedogapi.com/images/HJOpge9Em.jpg",
      width: 674
    },
    life_span: "12 - 14 years",
    name: "Border Terrier",
    reference_image_id: "HJOpge9Em",
    temperament: "Fearless, Affectionate, Alert, Obedient, Intelligent, Even Tempered",
    weight: {
      imperial: "11.5 - 15.5",
      metric: "5 - 7"
    }
  },
  {
    bred_for: "Ratting, Companionship",
    breed_group: "Non-Sporting",
    height: {
      imperial: "16 - 17",
      metric: "41 - 43"
    },
    id: 53,
    image: {
      height: 673,
      id: "rkZRggqVX",
      url: "https://cdn2.thedogapi.com/images/rkZRggqVX.jpg",
      width: 1010
    },
    life_span: "11 - 13 years",
    name: "Boston Terrier",
    reference_image_id: "rkZRggqVX",
    temperament: "Friendly, Lively, Intelligent",
    weight: {
      imperial: "10 - 25",
      metric: "5 - 11"
    }
  },
  {
    bred_for: "Cattle herding",
    breed_group: "Herding",
    height: {
      imperial: "23.5 - 27.5",
      metric: "60 - 70"
    },
    id: 54,
    image: {
      height: 454,
      id: "Byd0xl5VX",
      url: "https://cdn2.thedogapi.com/images/Byd0xl5VX.jpg",
      width: 680
    },
    life_span: "10 - 15 years",
    name: "Bouvier des Flandres",
    reference_image_id: "Byd0xl5VX",
    temperament: "Protective, Loyal, Gentle, Intelligent, Familial, Rational",
    weight: {
      imperial: "70 - 110",
      metric: "32 - 50"
    }
  },
  {
    bred_for: "Bull-baiting, guardian",
    breed_group: "Working",
    height: {
      imperial: "21.5 - 25",
      metric: "55 - 64"
    },
    id: 55,
    image: {
      height: 430,
      id: "ry1kWe5VQ",
      url: "https://cdn2.thedogapi.com/images/ry1kWe5VQ.jpg",
      width: 645
    },
    life_span: "8 - 10 years",
    name: "Boxer",
    reference_image_id: "ry1kWe5VQ",
    temperament: "Devoted, Fearless, Friendly, Cheerful, Energetic, Loyal, Playful, Confident, Intelligent, Bright, Brave, Calm",
    weight: {
      imperial: "50 - 70",
      metric: "23 - 32"
    }
  },
  {
    bred_for: "Turkey retrieving",
    breed_group: "Sporting",
    height: {
      imperial: "14 - 18",
      metric: "36 - 46"
    },
    id: 56,
    image: {
      height: 634,
      id: "ryHJZlcNX",
      url: "https://cdn2.thedogapi.com/images/ryHJZlcNX.jpg",
      width: 577
    },
    life_span: "10 - 14 years",
    name: "Boykin Spaniel",
    reference_image_id: "ryHJZlcNX",
    temperament: "Friendly, Energetic, Companionable, Intelligent, Eager, Trainable",
    weight: {
      imperial: "25 - 40",
      metric: "11 - 18"
    }
  },
  {
    bred_for: "Versatile gun dog",
    breed_group: "Sporting",
    height: {
      imperial: "21.5 - 26.5",
      metric: "55 - 67"
    },
    id: 57,
    image: {
      height: 505,
      id: "S13yZg5VQ",
      url: "https://cdn2.thedogapi.com/images/S13yZg5VQ.jpg",
      width: 750
    },
    life_span: "10 - 12 years",
    name: "Bracco Italiano",
    reference_image_id: "S13yZg5VQ",
    temperament: "Stubborn, Affectionate, Loyal, Playful, Companionable, Trainable",
    weight: {
      imperial: "55 - 88",
      metric: "25 - 40"
    }
  },
  {
    bred_for: "Herding, guarding sheep",
    breed_group: "Herding",
    height: {
      imperial: "22 - 27",
      metric: "56 - 69"
    },
    id: 58,
    image: {
      height: 576,
      id: "rkVlblcEQ",
      url: "https://cdn2.thedogapi.com/images/rkVlblcEQ.jpg",
      width: 768
    },
    life_span: "10 - 12 years",
    name: "Briard",
    reference_image_id: "rkVlblcEQ",
    temperament: "Fearless, Loyal, Obedient, Intelligent, Faithful, Protective",
    weight: {
      imperial: "70 - 90",
      metric: "32 - 41"
    }
  },
  {
    bred_for: "Pointing, retrieving",
    breed_group: "Sporting",
    height: {
      imperial: "17.5 - 20.5",
      metric: "44 - 52"
    },
    id: 59,
    image: {
      height: 600,
      id: "HJWZZxc4X",
      url: "https://cdn2.thedogapi.com/images/HJWZZxc4X.jpg",
      width: 900
    },
    life_span: "12 - 14 years",
    name: "Brittany",
    reference_image_id: "HJWZZxc4X",
    temperament: "Agile, Adaptable, Quick, Intelligent, Attentive, Happy",
    weight: {
      imperial: "30 - 45",
      metric: "14 - 20"
    }
  },
  {
    bred_for: "Bull baiting, Fighting",
    breed_group: "Terrier",
    height: {
      imperial: "21 - 22",
      metric: "53 - 56"
    },
    id: 61,
    image: {
      height: 1080,
      id: "VSraIEQGd",
      url: "https://cdn2.thedogapi.com/images/VSraIEQGd.jpg",
      width: 1080
    },
    life_span: "10 - 12 years",
    name: "Bull Terrier",
    reference_image_id: "VSraIEQGd",
    temperament: "Trainable, Protective, Sweet-Tempered, Keen, Active",
    weight: {
      imperial: "50 - 70",
      metric: "23 - 32"
    }
  },
  {
    bred_for: "An elegant man's fashion statement",
    height: {
      imperial: "10 - 14",
      metric: "25 - 36"
    },
    id: 62,
    image: {
      height: 450,
      id: "BkKZWlcVX",
      url: "https://cdn2.thedogapi.com/images/BkKZWlcVX.jpg",
      width: 674
    },
    life_span: "11 – 14 years",
    name: "Bull Terrier (Miniature)",
    reference_image_id: "BkKZWlcVX",
    temperament: "Trainable, Protective, Sweet-Tempered, Keen, Active, Territorial",
    weight: {
      imperial: "25 - 33",
      metric: "11 - 15"
    }
  },
  {
    bred_for: "Estate guardian",
    breed_group: "Working",
    height: {
      imperial: "24 - 27",
      metric: "61 - 69"
    },
    id: 64,
    image: {
      height: 638,
      id: "r1ifZl5E7",
      url: "https://cdn2.thedogapi.com/images/r1ifZl5E7.jpg",
      width: 850
    },
    life_span: "8 - 12 years",
    name: "Bullmastiff",
    reference_image_id: "r1ifZl5E7",
    temperament: "Docile, Reliable, Devoted, Alert, Loyal, Reserved, Loving, Protective, Powerful, Calm, Courageous",
    weight: {
      imperial: "100 - 130",
      metric: "45 - 59"
    }
  },
  {
    bred_for: "Bolting of otter, foxes, other vermin",
    breed_group: "Terrier",
    height: {
      imperial: "9 - 10",
      metric: "23 - 25"
    },
    id: 65,
    image: {
      height: 836,
      id: "Sk7Qbg9E7",
      url: "https://cdn2.thedogapi.com/images/Sk7Qbg9E7.jpg",
      width: 1254
    },
    life_span: "14 - 15 years",
    name: "Cairn Terrier",
    reference_image_id: "Sk7Qbg9E7",
    temperament: "Hardy, Fearless, Assertive, Gay, Intelligent, Active",
    weight: {
      imperial: "13 - 14",
      metric: "6 - 6"
    }
  },
  {
    bred_for: "Companion, guard dog, and hunter",
    breed_group: "Working",
    height: {
      imperial: "23.5 - 27.5",
      metric: "60 - 70"
    },
    id: 67,
    image: {
      height: 380,
      id: "r15m-lc4m",
      url: "https://cdn2.thedogapi.com/images/r15m-lc4m.jpg",
      width: 645
    },
    life_span: "10 - 11 years",
    name: "Cane Corso",
    reference_image_id: "r15m-lc4m",
    temperament: "Trainable, Reserved, Stable, Quiet, Even Tempered, Calm",
    weight: {
      imperial: "88 - 120",
      metric: "40 - 54"
    }
  },
  {
    bred_for: "Cattle droving",
    breed_group: "Herding",
    height: {
      imperial: "10.5 - 12.5",
      metric: "27 - 32"
    },
    id: 68,
    image: {
      height: 600,
      id: "SyXN-e9NX",
      url: "https://cdn2.thedogapi.com/images/SyXN-e9NX.jpg",
      width: 800
    },
    life_span: "12 - 14 years",
    name: "Cardigan Welsh Corgi",
    reference_image_id: "SyXN-e9NX",
    temperament: "Affectionate, Devoted, Alert, Companionable, Intelligent, Active",
    weight: {
      imperial: "25 - 38",
      metric: "11 - 17"
    }
  },
  {
    bred_for: "Driving livestock",
    breed_group: "Herding",
    height: {
      imperial: "20 - 26",
      metric: "51 - 66"
    },
    id: 69,
    image: {
      height: 650,
      id: "BJcNbec4X",
      url: "https://cdn2.thedogapi.com/images/BJcNbec4X.jpg",
      width: 650
    },
    life_span: "10 - 12 years",
    name: "Catahoula Leopard Dog",
    reference_image_id: "BJcNbec4X",
    temperament: "Energetic, Inquisitive, Independent, Gentle, Intelligent, Loving",
    weight: {
      imperial: "50 - 95",
      metric: "23 - 43"
    }
  },
  {
    bred_for: "Guard dogs, defending sheep from predators, mainly wolves, jackals and bears",
    breed_group: "Working",
    height: {
      imperial: "24 - 33.5",
      metric: "61 - 85"
    },
    id: 70,
    image: {
      height: 682,
      id: "r1rrWe5Em",
      url: "https://cdn2.thedogapi.com/images/r1rrWe5Em.jpg",
      width: 1024
    },
    life_span: "10 - 12 years",
    name: "Caucasian Shepherd (Ovcharka)",
    reference_image_id: "r1rrWe5Em",
    temperament: "Alert, Quick, Dominant, Powerful, Calm, Strong",
    weight: {
      imperial: "80 - 100",
      metric: "36 - 45"
    }
  },
  {
    bred_for: "Flushing small birds, companion",
    breed_group: "Toy",
    height: {
      imperial: "12 - 13",
      metric: "30 - 33"
    },
    id: 71,
    image: {
      height: 558,
      id: "HJRBbe94Q",
      url: "https://cdn2.thedogapi.com/images/HJRBbe94Q.jpg",
      width: 961
    },
    life_span: "10 - 14 years",
    name: "Cavalier King Charles Spaniel",
    reference_image_id: "HJRBbe94Q",
    temperament: "Fearless, Affectionate, Sociable, Patient, Playful, Adaptable",
    weight: {
      imperial: "13 - 18",
      metric: "6 - 8"
    }
  },
  {
    bred_for: "Water Retriever",
    breed_group: "Sporting",
    height: {
      imperial: "21 - 26",
      metric: "53 - 66"
    },
    id: 76,
    image: {
      height: 600,
      id: "9BXwUeCc2",
      url: "https://cdn2.thedogapi.com/images/9BXwUeCc2.jpg",
      width: 600
    },
    life_span: "10 - 13 years",
    name: "Chesapeake Bay Retriever",
    reference_image_id: "9BXwUeCc2",
    temperament: "Affectionate, Intelligent, Quiet, Dominant, Happy, Protective",
    weight: {
      imperial: "55 - 80",
      metric: "25 - 36"
    }
  },
  {
    bred_for: "Ratting, lapdog, curio",
    breed_group: "Toy",
    height: {
      imperial: "11 - 13",
      metric: "28 - 33"
    },
    id: 78,
    image: {
      height: 798,
      id: "B1pDZx9Nm",
      url: "https://cdn2.thedogapi.com/images/B1pDZx9Nm.jpg",
      width: 1200
    },
    life_span: "10 - 14 years",
    name: "Chinese Crested",
    reference_image_id: "B1pDZx9Nm",
    temperament: "Affectionate, Sweet-Tempered, Lively, Alert, Playful, Happy",
    weight: {
      imperial: "10 - 13",
      metric: "5 - 6"
    }
  },
  {
    bred_for: "Fighting",
    breed_group: "Non-Sporting",
    height: {
      imperial: "18 - 20",
      metric: "46 - 51"
    },
    id: 79,
    image: {
      height: 761,
      id: "B1ruWl94Q",
      url: "https://cdn2.thedogapi.com/images/B1ruWl94Q.jpg",
      width: 1049
    },
    life_span: "10 years",
    name: "Chinese Shar-Pei",
    reference_image_id: "B1ruWl94Q",
    temperament: "Suspicious, Affectionate, Devoted, Reserved, Independent, Loving",
    weight: {
      imperial: "45 - 60",
      metric: "20 - 27"
    }
  },
  {
    bred_for: "Sled pulling",
    breed_group: "Working",
    height: {
      imperial: "22 - 26",
      metric: "56 - 66"
    },
    id: 80,
    image: {
      height: 478,
      id: "Sypubg54Q",
      url: "https://cdn2.thedogapi.com/images/Sypubg54Q.jpg",
      width: 600
    },
    life_span: "12 - 15 years",
    name: "Chinook",
    reference_image_id: "Sypubg54Q",
    temperament: "Friendly, Alert, Dignified, Intelligent, Calm",
    weight: {
      imperial: "50 - 90",
      metric: "23 - 41"
    }
  },
  {
    bred_for: "Guardian, cart pulling, hunting",
    breed_group: "Non-Sporting",
    height: {
      imperial: "17 - 20",
      metric: "43 - 51"
    },
    id: 81,
    image: {
      height: 673,
      id: "ry8KWgqEQ",
      url: "https://cdn2.thedogapi.com/images/ry8KWgqEQ.jpg",
      width: 1010
    },
    life_span: "12 - 15 years",
    name: "Chow Chow",
    reference_image_id: "ry8KWgqEQ",
    temperament: "Aloof, Loyal, Independent, Quiet",
    weight: {
      imperial: "40 - 70",
      metric: "18 - 32"
    }
  },
  {
    bred_for: "Bird flushing, retrieving",
    breed_group: "Sporting",
    height: {
      imperial: "17 - 20",
      metric: "43 - 51"
    },
    id: 84,
    image: {
      height: 533,
      id: "rkeqWgq4Q",
      url: "https://cdn2.thedogapi.com/images/rkeqWgq4Q.jpg",
      width: 762
    },
    life_span: "10 - 12 years",
    name: "Clumber Spaniel",
    reference_image_id: "rkeqWgq4Q",
    temperament: "Affectionate, Loyal, Dignified, Gentle, Calm, Great-hearted",
    weight: {
      imperial: "55 - 85",
      metric: "25 - 39"
    }
  },
  {
    bred_for: "Bird flushing, retrieving",
    breed_group: "Sporting",
    height: {
      imperial: "14 - 15",
      metric: "36 - 38"
    },
    id: 86,
    image: {
      height: 1080,
      id: "1lFmrzECl",
      url: "https://cdn2.thedogapi.com/images/1lFmrzECl.jpg",
      width: 1080
    },
    life_span: "12 - 15 years",
    name: "Cocker Spaniel",
    reference_image_id: "1lFmrzECl",
    temperament: "Trainable, Friendly, Affectionate, Playful, Quiet, Faithful",
    weight: {
      imperial: "20 - 30",
      metric: "9 - 14"
    }
  },
  {
    bred_for: "Hunting the American woodcock",
    breed_group: "Sporting",
    height: {
      imperial: "14 - 15",
      metric: "36 - 38"
    },
    id: 87,
    image: {
      height: 640,
      id: "HkRcZe547",
      url: "https://cdn2.thedogapi.com/images/HkRcZe547.jpg",
      width: 1024
    },
    life_span: "12 - 15 years",
    name: "Cocker Spaniel (American)",
    reference_image_id: "HkRcZe547",
    temperament: "Outgoing, Sociable, Trusting, Joyful, Even Tempered, Merry",
    weight: {
      imperial: "20 - 30",
      metric: "9 - 14"
    }
  },
  {
    bred_for: "Accompanying ladies on long sea voyages, ratters onboard ship.",
    breed_group: "Non-Sporting",
    height: {
      imperial: "9 - 11",
      metric: "23 - 28"
    },
    id: 89,
    image: {
      height: 1638,
      id: "SyviZlqNm",
      url: "https://cdn2.thedogapi.com/images/SyviZlqNm.jpg",
      width: 2464
    },
    life_span: "13 - 16 years",
    name: "Coton de Tulear",
    reference_image_id: "SyviZlqNm",
    temperament: "Affectionate, Lively, Playful, Intelligent, Trainable, Vocal",
    weight: {
      imperial: "9 - 15",
      metric: "4 - 7"
    }
  },
  {
    bred_for: "Carriage dog - trot alongside carriages to protect the occupants from banditry or other interference",
    breed_group: "Non-Sporting",
    height: {
      imperial: "19 - 23",
      metric: "48 - 58"
    },
    id: 92,
    image: {
      height: 800,
      id: "SkJ3blcN7",
      url: "https://cdn2.thedogapi.com/images/SkJ3blcN7.jpg",
      width: 1200
    },
    life_span: "10 - 13 years",
    name: "Dalmatian",
    reference_image_id: "SkJ3blcN7",
    temperament: "Outgoing, Friendly, Energetic, Playful, Sensitive, Intelligent, Active",
    weight: {
      imperial: "50 - 55",
      metric: "23 - 25"
    }
  },
  {
    bred_for: "Guardian",
    breed_group: "Working",
    height: {
      imperial: "24 - 28",
      metric: "61 - 71"
    },
    id: 94,
    image: {
      height: 640,
      id: "HyL3bl94Q",
      url: "https://cdn2.thedogapi.com/images/HyL3bl94Q.jpg",
      width: 1140
    },
    life_span: "10 years",
    name: "Doberman Pinscher",
    reference_image_id: "HyL3bl94Q",
    temperament: "Fearless, Energetic, Alert, Loyal, Obedient, Confident, Intelligent",
    weight: {
      imperial: "66 - 88",
      metric: "30 - 40"
    }
  },
  {
    bred_for: "Big-game hunting",
    breed_group: "Working",
    height: {
      imperial: "23.5 - 27",
      metric: "60 - 69"
    },
    id: 95,
    image: {
      height: 467,
      id: "S1nhWx94Q",
      url: "https://cdn2.thedogapi.com/images/S1nhWx94Q.jpg",
      width: 650
    },
    life_span: "10 - 12 years",
    name: "Dogo Argentino",
    reference_image_id: "S1nhWx94Q",
    temperament: "Friendly, Affectionate, Cheerful, Loyal, Tolerant, Protective",
    weight: {
      imperial: "80 - 100",
      metric: "36 - 45"
    }
  },
  {
    bred_for: "Farms, watchdog, guard duty",
    height: {
      imperial: "22 - 24.5",
      metric: "56 - 62"
    },
    id: 98,
    image: {
      height: 511,
      id: "BkE6Wg5E7",
      url: "https://cdn2.thedogapi.com/images/BkE6Wg5E7.jpg",
      width: 856
    },
    life_span: "15 years",
    name: "Dutch Shepherd",
    reference_image_id: "BkE6Wg5E7",
    temperament: "Reliable, Affectionate, Alert, Loyal, Obedient, Trainable",
    weight: {
      imperial: "50 - 70",
      metric: "23 - 32"
    }
  },
  {
    bred_for: "Bird setting, retrieving",
    breed_group: "Sporting",
    height: {
      imperial: "24 - 25",
      metric: "61 - 64"
    },
    id: 101,
    image: {
      height: 683,
      id: "By4A-eqVX",
      url: "https://cdn2.thedogapi.com/images/By4A-eqVX.jpg",
      width: 1024
    },
    life_span: "12 years",
    name: "English Setter",
    reference_image_id: "By4A-eqVX",
    temperament: "Strong Willed, Mischievous, Affectionate, Energetic, Playful, Companionable, Gentle, Hard-working, Intelligent, Eager, People-Oriented",
    weight: {
      imperial: "45 - 80",
      metric: "20 - 36"
    }
  },
  {
    bred_for: "Herding & guarding livestock, farm watch dog",
    breed_group: "Working",
    height: {
      imperial: "18 - 23",
      metric: "46 - 58"
    },
    id: 102,
    image: {
      height: 1280,
      id: "H1QyMe5EQ",
      url: "https://cdn2.thedogapi.com/images/H1QyMe5EQ.jpg",
      width: 1920
    },
    life_span: "10 - 13 years",
    name: "English Shepherd",
    reference_image_id: "H1QyMe5EQ",
    temperament: "Kind, Energetic, Independent, Adaptable, Intelligent, Bossy",
    weight: {
      imperial: "44 - 66",
      metric: "20 - 30"
    }
  },
  {
    bred_for: "Bird flushing, retrieving",
    breed_group: "Sporting",
    height: {
      imperial: "19 - 20",
      metric: "48 - 51"
    },
    id: 103,
    image: {
      height: 1080,
      id: "Hk0Jfe5VQ",
      url: "https://cdn2.thedogapi.com/images/Hk0Jfe5VQ.jpg",
      width: 1440
    },
    life_span: "12 - 14 years",
    name: "English Springer Spaniel",
    reference_image_id: "Hk0Jfe5VQ",
    temperament: "Affectionate, Cheerful, Alert, Intelligent, Attentive, Active",
    weight: {
      imperial: "35 - 50",
      metric: "16 - 23"
    }
  },
  {
    bred_for: "Companion of kings",
    breed_group: "Toy",
    height: {
      imperial: "10",
      metric: "25"
    },
    id: 104,
    image: {
      height: 696,
      id: "SkIgzxqNQ",
      url: "https://cdn2.thedogapi.com/images/SkIgzxqNQ.jpg",
      width: 800
    },
    life_span: "10 - 12 years",
    name: "English Toy Spaniel",
    reference_image_id: "SkIgzxqNQ",
    temperament: "Affectionate, Reserved, Playful, Gentle, Happy, Loving",
    weight: {
      imperial: "8 - 14",
      metric: "4 - 6"
    }
  },
  {
    bred_for: "Rat-baiting",
    height: {
      imperial: "10 - 12",
      metric: "25 - 30"
    },
    id: 105,
    image: {
      height: 430,
      id: "SJ6eMxqEQ",
      url: "https://cdn2.thedogapi.com/images/SJ6eMxqEQ.jpg",
      width: 645
    },
    life_span: "12 - 13 years",
    name: "English Toy Terrier",
    reference_image_id: "SJ6eMxqEQ",
    temperament: "Stubborn, Alert, Companionable, Intelligent, Cunning, Trainable",
    weight: {
      imperial: "6 - 8",
      metric: "3 - 4"
    }
  },
  {
    bred_for: "Companionship",
    breed_group: "Non-Sporting",
    height: {
      imperial: "20.5 - 23.5",
      metric: "52 - 60"
    },
    id: 107,
    image: {
      height: 532,
      id: "S1VWGx9Nm",
      url: "https://cdn2.thedogapi.com/images/S1VWGx9Nm.jpg",
      width: 800
    },
    life_span: "12 - 14 years",
    name: "Eurasier",
    reference_image_id: "S1VWGx9Nm",
    temperament: "Alert, Reserved, Intelligent, Even Tempered, Watchful, Calm",
    weight: {
      imperial: "40 - 70",
      metric: "18 - 32"
    }
  },
  {
    bred_for: "Bird flushing, retrieving",
    breed_group: "Sporting",
    height: {
      imperial: "17 - 18",
      metric: "43 - 46"
    },
    id: 108,
    image: {
      height: 906,
      id: "SkJfGecE7",
      url: "https://cdn2.thedogapi.com/images/SkJfGecE7.jpg",
      width: 1280
    },
    life_span: "11 - 15 years",
    name: "Field Spaniel",
    reference_image_id: "SkJfGecE7",
    temperament: "Docile, Cautious, Sociable, Sensitive, Adaptable, Familial",
    weight: {
      imperial: "35 - 50",
      metric: "16 - 23"
    }
  },
  {
    bred_for: "Herding reindeer",
    breed_group: "Herding",
    height: {
      imperial: "16 - 21",
      metric: "41 - 53"
    },
    id: 110,
    image: {
      height: 800,
      id: "S1KMGg5Vm",
      url: "https://cdn2.thedogapi.com/images/S1KMGg5Vm.jpg",
      width: 1066
    },
    life_span: "12 - 15 years",
    name: "Finnish Lapphund",
    reference_image_id: "S1KMGg5Vm",
    temperament: "Friendly, Keen, Faithful, Calm, Courageous",
    weight: {
      imperial: "33 - 53",
      metric: "15 - 24"
    }
  },
  {
    bred_for: "Hunting birds, small mammals",
    breed_group: "Non-Sporting",
    height: {
      imperial: "15.5 - 20",
      metric: "39 - 51"
    },
    id: 111,
    image: {
      height: 417,
      id: "3PjHlQbkV",
      url: "https://cdn2.thedogapi.com/images/3PjHlQbkV.jpg",
      width: 500
    },
    life_span: "12 - 15 years",
    name: "Finnish Spitz",
    reference_image_id: "3PjHlQbkV",
    temperament: "Playful, Loyal, Independent, Intelligent, Happy, Vocal",
    weight: {
      imperial: "23 - 28",
      metric: "10 - 13"
    }
  },
  {
    bred_for: "Lapdog",
    breed_group: "Non-Sporting",
    height: {
      imperial: "11 - 12",
      metric: "28 - 30"
    },
    id: 113,
    image: {
      height: 430,
      id: "HyWNfxc47",
      url: "https://cdn2.thedogapi.com/images/HyWNfxc47.jpg",
      width: 740
    },
    life_span: "9 - 11 years",
    name: "French Bulldog",
    reference_image_id: "HyWNfxc47",
    temperament: "Playful, Affectionate, Keen, Sociable, Lively, Alert, Easygoing, Patient, Athletic, Bright",
    weight: {
      imperial: "28",
      metric: "13"
    }
  },
  {
    bred_for: "Watchdog, Hunting vermin on the farm.",
    breed_group: "Working",
    height: {
      imperial: "17 - 20",
      metric: "43 - 51"
    },
    id: 114,
    image: {
      height: 480,
      id: "B1u4zgqE7",
      url: "https://cdn2.thedogapi.com/images/B1u4zgqE7.jpg",
      width: 740
    },
    life_span: "12 - 14 years",
    name: "German Pinscher",
    reference_image_id: "B1u4zgqE7",
    temperament: "Spirited, Lively, Intelligent, Loving, Even Tempered, Familial",
    weight: {
      imperial: "25 - 45",
      metric: "11 - 20"
    }
  },
  {
    bred_for: "Herding, Guard dog",
    breed_group: "Herding",
    height: {
      imperial: "22 - 26",
      metric: "56 - 66"
    },
    id: 115,
    image: {
      height: 425,
      id: "SJyBfg5NX",
      url: "https://cdn2.thedogapi.com/images/SJyBfg5NX.jpg",
      width: 600
    },
    life_span: "10 - 13 years",
    name: "German Shepherd Dog",
    reference_image_id: "SJyBfg5NX",
    temperament: "Alert, Loyal, Obedient, Curious, Confident, Intelligent, Watchful, Courageous",
    weight: {
      imperial: "50 - 90",
      metric: "23 - 41"
    }
  },
  {
    bred_for: "General hunting",
    breed_group: "Sporting",
    height: {
      imperial: "21 - 25",
      metric: "53 - 64"
    },
    id: 116,
    image: {
      height: 1230,
      id: "SJqBMg5Nm",
      url: "https://cdn2.thedogapi.com/images/SJqBMg5Nm.jpg",
      width: 1395
    },
    life_span: "12 - 14 years",
    name: "German Shorthaired Pointer",
    reference_image_id: "SJqBMg5Nm",
    temperament: "Boisterous, Bold, Affectionate, Intelligent, Cooperative, Trainable",
    weight: {
      imperial: "45 - 70",
      metric: "20 - 32"
    }
  },
  {
    bred_for: "Herding, guarding",
    breed_group: "Working",
    height: {
      imperial: "23.5 - 27.5",
      metric: "60 - 70"
    },
    id: 119,
    image: {
      height: 600,
      id: "H1NIzlcV7",
      url: "https://cdn2.thedogapi.com/images/H1NIzlcV7.jpg",
      width: 900
    },
    life_span: "10 - 12 years",
    name: "Giant Schnauzer",
    reference_image_id: "H1NIzlcV7",
    temperament: "Strong Willed, Kind, Loyal, Intelligent, Dominant, Powerful",
    weight: {
      imperial: "65 - 90",
      metric: "29 - 41"
    }
  },
  {
    bred_for: "Rid the home and farm of vermin, and hunt badger and fox",
    breed_group: "Terrier",
    height: {
      imperial: "12.5 - 14",
      metric: "32 - 36"
    },
    id: 120,
    image: {
      height: 380,
      id: "H1oLMe94m",
      url: "https://cdn2.thedogapi.com/images/H1oLMe94m.jpg",
      width: 645
    },
    life_span: "12 - 15 years",
    name: "Glen of Imaal Terrier",
    reference_image_id: "H1oLMe94m",
    temperament: "Spirited, Agile, Loyal, Gentle, Active, Courageous",
    weight: {
      imperial: "32 - 40",
      metric: "15 - 18"
    }
  },
  {
    bred_for: "Retrieving",
    breed_group: "Sporting",
    height: {
      imperial: "21.5 - 24",
      metric: "55 - 61"
    },
    id: 121,
    image: {
      height: 652,
      id: "HJ7Pzg5EQ",
      url: "https://cdn2.thedogapi.com/images/HJ7Pzg5EQ.jpg",
      width: 900
    },
    life_span: "10 - 12 years",
    name: "Golden Retriever",
    reference_image_id: "HJ7Pzg5EQ",
    temperament: "Intelligent, Kind, Reliable, Friendly, Trustworthy, Confident",
    weight: {
      imperial: "55 - 75",
      metric: "25 - 34"
    }
  },
  {
    bred_for: "Find and point gamebirds",
    breed_group: "Sporting",
    height: {
      imperial: "23 - 27",
      metric: "58 - 69"
    },
    id: 123,
    image: {
      height: 467,
      id: "SJ5vzx5NX",
      url: "https://cdn2.thedogapi.com/images/SJ5vzx5NX.jpg",
      width: 622
    },
    life_span: "10 - 12 years",
    name: "Gordon Setter",
    reference_image_id: "SJ5vzx5NX",
    temperament: "Fearless, Alert, Loyal, Confident, Gay, Eager",
    weight: {
      imperial: "45 - 80",
      metric: "20 - 36"
    }
  },
  {
    bred_for: "Hunting & holding boars, Guardian",
    breed_group: "Working",
    height: {
      imperial: "28 - 32",
      metric: "71 - 81"
    },
    id: 124,
    image: {
      height: 732,
      id: "B1Edfl9NX",
      url: "https://cdn2.thedogapi.com/images/B1Edfl9NX.jpg",
      width: 800
    },
    life_span: "7 - 10 years",
    name: "Great Dane",
    reference_image_id: "B1Edfl9NX",
    temperament: "Friendly, Devoted, Reserved, Gentle, Confident, Loving",
    weight: {
      imperial: "110 - 190",
      metric: "50 - 86"
    }
  },
  {
    bred_for: "Sheep guardian",
    breed_group: "Working",
    height: {
      imperial: "25 - 32",
      metric: "64 - 81"
    },
    id: 125,
    image: {
      height: 550,
      id: "B12uzg9V7",
      url: "https://cdn2.thedogapi.com/images/B12uzg9V7.png",
      width: 800
    },
    life_span: "10 - 12 years",
    name: "Great Pyrenees",
    reference_image_id: "B12uzg9V7",
    temperament: "Strong Willed, Fearless, Affectionate, Patient, Gentle, Confident",
    weight: {
      imperial: "85 - 115",
      metric: "39 - 52"
    }
  },
  {
    bred_for: "Coursing hares",
    breed_group: "Hound",
    height: {
      imperial: "27 - 30",
      metric: "69 - 76"
    },
    id: 127,
    image: {
      height: 681,
      id: "ryNYMx94X",
      url: "https://cdn2.thedogapi.com/images/ryNYMx94X.jpg",
      width: 1024
    },
    life_span: "10 - 13 years",
    name: "Greyhound",
    reference_image_id: "ryNYMx94X",
    temperament: "Affectionate, Athletic, Gentle, Intelligent, Quiet, Even Tempered",
    weight: {
      imperial: "50 - 70",
      metric: "23 - 32"
    }
  },
  {
    bred_for: "Hunt and kill vermin in stables",
    height: {
      imperial: "9 - 11",
      metric: "23 - 28"
    },
    id: 128,
    image: {
      height: 380,
      id: "ryoYGec4Q",
      url: "https://cdn2.thedogapi.com/images/ryoYGec4Q.jpg",
      width: 645
    },
    life_span: "10 – 15 years",
    name: "Griffon Bruxellois",
    reference_image_id: "ryoYGec4Q",
    temperament: "Self-important, Inquisitive, Alert, Companionable, Sensitive, Watchful",
    weight: {
      imperial: "12",
      metric: "5"
    }
  },
  {
    bred_for: "Hunting hares by trailing them",
    breed_group: "Hound",
    height: {
      imperial: "18 - 22",
      metric: "46 - 56"
    },
    id: 129,
    image: {
      height: 1080,
      id: "B1IcfgqE7",
      url: "https://cdn2.thedogapi.com/images/B1IcfgqE7.jpg",
      width: 1920
    },
    life_span: "12 - 15 years",
    name: "Harrier",
    reference_image_id: "B1IcfgqE7",
    temperament: "Outgoing, Friendly, Cheerful, Sweet-Tempered, Tolerant, Active",
    weight: {
      imperial: "40 - 60",
      metric: "18 - 27"
    }
  },
  {
    bred_for: "Companionship",
    breed_group: "Toy",
    height: {
      imperial: "8.5 - 11.5",
      metric: "22 - 29"
    },
    id: 130,
    image: {
      height: 507,
      id: "rkXiGl9V7",
      url: "https://cdn2.thedogapi.com/images/rkXiGl9V7.jpg",
      width: 800
    },
    life_span: "14 - 15 years",
    name: "Havanese",
    reference_image_id: "rkXiGl9V7",
    temperament: "Affectionate, Responsive, Playful, Companionable, Gentle, Intelligent",
    weight: {
      imperial: "7 - 13",
      metric: "3 - 6"
    }
  },
  {
    bred_for: "Bird setting, retrieving",
    breed_group: "Sporting",
    height: {
      imperial: "24 - 27",
      metric: "61 - 69"
    },
    id: 134,
    image: {
      height: 522,
      id: "S1osGeqVm",
      url: "https://cdn2.thedogapi.com/images/S1osGeqVm.jpg",
      width: 818
    },
    life_span: "10 - 11 years",
    name: "Irish Setter",
    reference_image_id: "S1osGeqVm",
    temperament: "Affectionate, Energetic, Lively, Independent, Playful, Companionable",
    weight: {
      imperial: "35 - 70",
      metric: "16 - 32"
    }
  },
  {
    breed_group: "Terrier",
    height: {
      imperial: "18",
      metric: "46"
    },
    id: 135,
    image: {
      height: 626,
      id: "By-hGecVX",
      url: "https://cdn2.thedogapi.com/images/By-hGecVX.jpg",
      width: 800
    },
    life_span: "12 - 16 years",
    name: "Irish Terrier",
    reference_image_id: "By-hGecVX",
    temperament: "Respectful, Lively, Intelligent, Dominant, Protective, Trainable",
    weight: {
      imperial: "25 - 27",
      metric: "11 - 12"
    }
  },
  {
    bred_for: "Coursing wolves, elk",
    breed_group: "Hound",
    height: {
      imperial: "30 - 35",
      metric: "76 - 89"
    },
    id: 137,
    image: {
      height: 630,
      id: "Hyd2zgcEX",
      url: "https://cdn2.thedogapi.com/images/Hyd2zgcEX.jpg",
      width: 1000
    },
    life_span: "6 - 8 years",
    name: "Irish Wolfhound",
    reference_image_id: "Hyd2zgcEX",
    temperament: "Sweet-Tempered, Loyal, Dignified, Patient, Thoughtful, Generous",
    weight: {
      imperial: "105 - 180",
      metric: "48 - 82"
    }
  },
  {
    bred_for: "Lapdog",
    breed_group: "Toy",
    height: {
      imperial: "13 - 15",
      metric: "33 - 38"
    },
    id: 138,
    image: {
      height: 377,
      id: "SJAnzg9NX",
      url: "https://cdn2.thedogapi.com/images/SJAnzg9NX.jpg",
      width: 640
    },
    life_span: "12 - 15 years",
    name: "Italian Greyhound",
    reference_image_id: "SJAnzg9NX",
    temperament: "Mischievous, Affectionate, Agile, Athletic, Companionable, Intelligent",
    weight: {
      imperial: "7 - 15",
      metric: "3 - 7"
    }
  },
  {
    bred_for: "Lapdog",
    breed_group: "Toy",
    height: {
      imperial: "8 - 11",
      metric: "20 - 28"
    },
    id: 140,
    image: {
      height: 581,
      id: "r1H6feqEm",
      url: "https://cdn2.thedogapi.com/images/r1H6feqEm.jpg",
      width: 900
    },
    life_span: "12 - 14 years",
    name: "Japanese Chin",
    reference_image_id: "r1H6feqEm",
    temperament: "Alert, Loyal, Independent, Intelligent, Loving, Cat-like",
    weight: {
      imperial: "4 - 9",
      metric: "2 - 4"
    }
  },
  {
    bred_for: "Companion",
    height: {
      imperial: "12 - 15",
      metric: "30 - 38"
    },
    id: 141,
    image: {
      height: 351,
      id: "HksaMxqNX",
      url: "https://cdn2.thedogapi.com/images/HksaMxqNX.jpg",
      width: 600
    },
    life_span: "10 – 16 years",
    name: "Japanese Spitz",
    reference_image_id: "HksaMxqNX",
    temperament: "Affectionate, Obedient, Playful, Companionable, Intelligent, Proud",
    weight: {
      imperial: "15 - 19",
      metric: "7 - 9"
    }
  },
  {
    bred_for: "Barge watchdog",
    breed_group: "Non-Sporting",
    height: {
      imperial: "17 - 18",
      metric: "43 - 46"
    },
    id: 142,
    image: {
      height: 683,
      id: "S1GAGg9Vm",
      url: "https://cdn2.thedogapi.com/images/S1GAGg9Vm.jpg",
      width: 1024
    },
    life_span: "12 - 15 years",
    name: "Keeshond",
    reference_image_id: "S1GAGg9Vm",
    temperament: "Agile, Obedient, Playful, Quick, Sturdy, Bright",
    weight: {
      imperial: "35 - 45",
      metric: "16 - 20"
    }
  },
  {
    bred_for: "Sheep guardian",
    breed_group: "Working",
    height: {
      imperial: "25.5 - 27.5",
      metric: "65 - 70"
    },
    id: 144,
    image: {
      height: 772,
      id: "Bko0fl547",
      url: "https://cdn2.thedogapi.com/images/Bko0fl547.jpg",
      width: 1030
    },
    life_span: "10 - 12 years",
    name: "Komondor",
    reference_image_id: "Bko0fl547",
    temperament: "Steady, Fearless, Affectionate, Independent, Gentle, Calm",
    weight: {
      imperial: "80 - 100",
      metric: "36 - 45"
    }
  },
  {
    bred_for: "Guardian, hunting large game",
    breed_group: "Working",
    height: {
      imperial: "26 - 30",
      metric: "66 - 76"
    },
    id: 147,
    image: {
      height: 768,
      id: "BykZ7ecVX",
      url: "https://cdn2.thedogapi.com/images/BykZ7ecVX.jpg",
      width: 960
    },
    life_span: "8 - 10 years",
    name: "Kuvasz",
    reference_image_id: "BykZ7ecVX",
    temperament: "Clownish, Loyal, Patient, Independent, Intelligent, Protective",
    weight: {
      imperial: "70 - 115",
      metric: "32 - 52"
    }
  },
  {
    bred_for: "Water retrieving",
    breed_group: "Sporting",
    height: {
      imperial: "21.5 - 24.5",
      metric: "55 - 62"
    },
    id: 149,
    image: {
      height: 667,
      id: "B1uW7l5VX",
      url: "https://cdn2.thedogapi.com/images/B1uW7l5VX.jpg",
      width: 992
    },
    life_span: "10 - 13 years",
    name: "Labrador Retriever",
    reference_image_id: "B1uW7l5VX",
    temperament: "Kind, Outgoing, Agile, Gentle, Intelligent, Trusting, Even Tempered",
    weight: {
      imperial: "55 - 80",
      metric: "25 - 36"
    }
  },
  {
    bred_for: "Water retrieval dog in the marshes of Romagna",
    breed_group: "Sporting",
    height: {
      imperial: "16 - 19",
      metric: "41 - 48"
    },
    id: 151,
    image: {
      height: 1200,
      id: "ryzzmgqE7",
      url: "https://cdn2.thedogapi.com/images/ryzzmgqE7.jpg",
      width: 1600
    },
    life_span: "14 - 16 years",
    name: "Lagotto Romagnolo",
    reference_image_id: "ryzzmgqE7",
    temperament: "Keen, Loyal, Companionable, Loving, Active, Trainable",
    weight: {
      imperial: "24 - 35",
      metric: "11 - 16"
    }
  },
  {
    bred_for: "Cattle herding, Ratting, Driving cattle to market.",
    height: {
      imperial: "10 - 12",
      metric: "25 - 30"
    },
    id: 153,
    image: {
      height: 453,
      id: "S1RGml5Em",
      url: "https://cdn2.thedogapi.com/images/S1RGml5Em.jpg",
      width: 680
    },
    life_span: "12 – 15 years",
    name: "Lancashire Heeler",
    reference_image_id: "S1RGml5Em",
    temperament: "Clever, Friendly, Alert, Intelligent",
    weight: {
      imperial: "6 - 13",
      metric: "3 - 6"
    }
  },
  {
    bred_for: "Guardian, appearance.",
    breed_group: "Working",
    height: {
      imperial: "25.5 - 31.5",
      metric: "65 - 80"
    },
    id: 155,
    image: {
      height: 694,
      id: "ByrmQlqVm",
      url: "https://cdn2.thedogapi.com/images/ByrmQlqVm.jpg",
      width: 1024
    },
    life_span: "6 - 8 years",
    name: "Leonberger",
    reference_image_id: "ByrmQlqVm",
    temperament: "Obedient, Fearless, Loyal, Companionable, Adaptable, Loving",
    weight: {
      imperial: "120 - 170",
      metric: "54 - 77"
    }
  },
  {
    bred_for: "Guarding inside the home, companion",
    breed_group: "Non-Sporting",
    height: {
      imperial: "10 - 11",
      metric: "25 - 28"
    },
    id: 156,
    image: {
      height: 444,
      id: "SJp7Qe5EX",
      url: "https://cdn2.thedogapi.com/images/SJp7Qe5EX.jpg",
      width: 680
    },
    life_span: "12 - 15 years",
    name: "Lhasa Apso",
    reference_image_id: "SJp7Qe5EX",
    temperament: "Steady, Fearless, Friendly, Devoted, Assertive, Spirited, Energetic, Lively, Alert, Obedient, Playful, Intelligent",
    weight: {
      imperial: "12 - 18",
      metric: "5 - 8"
    }
  },
  {
    bred_for: "Lapdog",
    breed_group: "Toy",
    height: {
      imperial: "8 - 10",
      metric: "20 - 25"
    },
    id: 161,
    image: {
      height: 453,
      id: "B1SV7gqN7",
      url: "https://cdn2.thedogapi.com/images/B1SV7gqN7.jpg",
      width: 680
    },
    life_span: "15 - 18 years",
    name: "Maltese",
    reference_image_id: "B1SV7gqN7",
    temperament: "Playful, Docile, Fearless, Affectionate, Sweet-Tempered, Lively, Responsive, Easygoing, Gentle, Intelligent, Active",
    weight: {
      imperial: "4 - 7",
      metric: "2 - 3"
    }
  },
  {
    breed_group: "Herding",
    height: {
      imperial: "13 - 18",
      metric: "33 - 46"
    },
    id: 165,
    image: {
      height: 640,
      id: "BkHHQgcN7",
      url: "https://cdn2.thedogapi.com/images/BkHHQgcN7.jpg",
      width: 920
    },
    life_span: "12 - 15 years",
    name: "Miniature American Shepherd",
    reference_image_id: "BkHHQgcN7",
    temperament: "Energetic, Loyal, Intelligent, Trainable",
    weight: {
      imperial: "20 - 40",
      metric: "9 - 18"
    }
  },
  {
    bred_for: "Small vermin hunting",
    breed_group: "Toy",
    height: {
      imperial: "10 - 12.5",
      metric: "25 - 32"
    },
    id: 167,
    image: {
      height: 1125,
      id: "Hy3H7g94X",
      url: "https://cdn2.thedogapi.com/images/Hy3H7g94X.jpg",
      width: 1500
    },
    life_span: "15 years",
    name: "Miniature Pinscher",
    reference_image_id: "Hy3H7g94X",
    temperament: "Clever, Outgoing, Friendly, Energetic, Responsive, Playful",
    weight: {
      imperial: "8 - 11",
      metric: "4 - 5"
    }
  },
  {
    bred_for: "Ratting",
    breed_group: "Terrier",
    height: {
      imperial: "12 - 14",
      metric: "30 - 36"
    },
    id: 168,
    image: {
      height: 533,
      id: "SJIUQl9NX",
      url: "https://cdn2.thedogapi.com/images/SJIUQl9NX.jpg",
      width: 800
    },
    life_span: "12 - 14 years",
    name: "Miniature Schnauzer",
    reference_image_id: "SJIUQl9NX",
    temperament: "Fearless, Friendly, Spirited, Alert, Obedient, Intelligent",
    weight: {
      imperial: "11 - 20",
      metric: "5 - 9"
    }
  },
  {
    bred_for: "All purpose water dog, fishing aid",
    breed_group: "Working",
    height: {
      imperial: "26 - 28",
      metric: "66 - 71"
    },
    id: 171,
    image: {
      height: 986,
      id: "Sk4DXl54m",
      url: "https://cdn2.thedogapi.com/images/Sk4DXl54m.jpg",
      width: 1174
    },
    life_span: "8 - 10 years",
    name: "Newfoundland",
    reference_image_id: "Sk4DXl54m",
    temperament: "Sweet-Tempered, Gentle, Trainable",
    weight: {
      imperial: "100 - 150",
      metric: "45 - 68"
    }
  },
  {
    bred_for: "Ratting, fox bolting",
    breed_group: "Terrier",
    height: {
      imperial: "9 - 10",
      metric: "23 - 25"
    },
    id: 172,
    image: {
      height: 1092,
      id: "B1ADQg94X",
      url: "https://cdn2.thedogapi.com/images/B1ADQg94X.jpg",
      width: 1468
    },
    life_span: "12 - 15 years",
    name: "Norfolk Terrier",
    reference_image_id: "B1ADQg94X",
    temperament: "Self-confidence, Fearless, Spirited, Companionable, Happy, Lovable",
    weight: {
      imperial: "11 - 12",
      metric: "5 - 5"
    }
  },
  {
    bred_for: "Ratting, fox bolting",
    breed_group: "Terrier",
    height: {
      imperial: "10",
      metric: "25"
    },
    id: 176,
    image: {
      height: 640,
      id: "BkgKXlqE7",
      url: "https://cdn2.thedogapi.com/images/BkgKXlqE7.jpg",
      width: 1140
    },
    life_span: "12 - 15 years",
    name: "Norwich Terrier",
    reference_image_id: "BkgKXlqE7",
    temperament: "Hardy, Affectionate, Energetic, Sensitive, Intelligent",
    weight: {
      imperial: "11 - 12",
      metric: "5 - 5"
    }
  },
  {
    breed_group: "Sporting",
    height: {
      imperial: "17 - 21",
      metric: "43 - 53"
    },
    id: 177,
    image: {
      height: 420,
      id: "SyYtQe5V7",
      url: "https://cdn2.thedogapi.com/images/SyYtQe5V7.jpg",
      width: 630
    },
    life_span: "12 - 14 years",
    name: "Nova Scotia Duck Tolling Retriever",
    reference_image_id: "SyYtQe5V7",
    temperament: "Outgoing, Alert, Patient, Intelligent, Loving",
    weight: {
      imperial: "35 - 50",
      metric: "16 - 23"
    }
  },
  {
    bred_for: "Driving sheep, cattle",
    breed_group: "Herding",
    height: {
      imperial: "21",
      metric: "53"
    },
    id: 178,
    image: {
      height: 889,
      id: "HkZ57lq4m",
      url: "https://cdn2.thedogapi.com/images/HkZ57lq4m.jpg",
      width: 1334
    },
    life_span: "10 - 12 years",
    name: "Old English Sheepdog",
    reference_image_id: "HkZ57lq4m",
    temperament: "Sociable, Bubbly, Playful, Adaptable, Intelligent, Loving",
    weight: {
      imperial: "60 - 100",
      metric: "27 - 45"
    }
  },
  {
    height: {
      imperial: "15 - 19",
      metric: "38 - 48"
    },
    id: 179,
    image: {
      height: 546,
      id: "B1d5me547",
      url: "https://cdn2.thedogapi.com/images/B1d5me547.jpg",
      width: 554
    },
    life_span: "9 – 14 years",
    name: "Olde English Bulldogge",
    reference_image_id: "B1d5me547",
    temperament: "Friendly, Alert, Confident, Loving, Courageous, Strong",
    weight: {
      imperial: "65 – 85",
      metric: "NaN"
    }
  },
  {
    bred_for: "Lapdog",
    breed_group: "Toy",
    height: {
      imperial: "8 - 11",
      metric: "20 - 28"
    },
    id: 181,
    image: {
      height: 765,
      id: "SkJj7e547",
      url: "https://cdn2.thedogapi.com/images/SkJj7e547.jpg",
      width: 960
    },
    life_span: "13 - 17 years",
    name: "Papillon",
    reference_image_id: "SkJj7e547",
    temperament: "Hardy, Friendly, Energetic, Alert, Intelligent, Happy",
    weight: {
      imperial: "3 - 12",
      metric: "1 - 5"
    }
  },
  {
    bred_for: "Lapdog",
    breed_group: "Toy",
    height: {
      imperial: "6 - 9",
      metric: "15 - 23"
    },
    id: 183,
    image: {
      height: 640,
      id: "ByIiml9Nm",
      url: "https://cdn2.thedogapi.com/images/ByIiml9Nm.jpg",
      width: 960
    },
    life_span: "14 - 18 years",
    name: "Pekingese",
    reference_image_id: "ByIiml9Nm",
    temperament: "Opinionated, Good-natured, Stubborn, Affectionate, Aggressive, Intelligent",
    weight: {
      imperial: "14",
      metric: "6"
    }
  },
  {
    bred_for: "Driving stock to market in northern Wales",
    breed_group: "Herding",
    height: {
      imperial: "10 - 12",
      metric: "25 - 30"
    },
    id: 184,
    image: {
      height: 720,
      id: "rJ6iQeqEm",
      url: "https://cdn2.thedogapi.com/images/rJ6iQeqEm.jpg",
      width: 1280
    },
    life_span: "12 - 14 years",
    name: "Pembroke Welsh Corgi",
    reference_image_id: "rJ6iQeqEm",
    temperament: "Tenacious, Outgoing, Friendly, Bold, Playful, Protective",
    weight: {
      imperial: "25 - 30",
      metric: "11 - 14"
    }
  },
  {
    breed_group: "Working",
    height: {
      imperial: "22 - 25.5",
      metric: "56 - 65"
    },
    id: 185,
    image: {
      height: 483,
      id: "S1V3Qeq4X",
      url: "https://cdn2.thedogapi.com/images/S1V3Qeq4X.jpg",
      width: 600
    },
    life_span: "10 - 12 years",
    name: "Perro de Presa Canario",
    reference_image_id: "S1V3Qeq4X",
    temperament: "Strong Willed, Suspicious, Gentle, Dominant, Calm",
    weight: {
      imperial: "88 - 110",
      metric: "40 - 50"
    }
  },
  {
    bred_for: "Hunting rabbits",
    breed_group: "Hound",
    height: {
      imperial: "21 - 25",
      metric: "53 - 64"
    },
    id: 188,
    image: {
      height: 2938,
      id: "Byz6mgqEQ",
      url: "https://cdn2.thedogapi.com/images/Byz6mgqEQ.jpg",
      width: 3918
    },
    life_span: "12 - 14 years",
    name: "Pharaoh Hound",
    reference_image_id: "Byz6mgqEQ",
    temperament: "Affectionate, Sociable, Playful, Intelligent, Active, Trainable",
    weight: {
      imperial: "40 - 60",
      metric: "18 - 27"
    }
  },
  {
    bred_for: "Hunting big-game like Boar.",
    breed_group: "Hound",
    height: {
      imperial: "20 - 25",
      metric: "51 - 64"
    },
    id: 189,
    image: {
      height: 480,
      id: "B1i67l5VQ",
      url: "https://cdn2.thedogapi.com/images/B1i67l5VQ.jpg",
      width: 640
    },
    life_span: "12 - 14 years",
    name: "Plott",
    reference_image_id: "B1i67l5VQ",
    temperament: "Bold, Alert, Loyal, Intelligent",
    weight: {
      imperial: "40 - 60",
      metric: "18 - 27"
    }
  },
  {
    bred_for: "Companion",
    breed_group: "Toy",
    height: {
      imperial: "8 - 12",
      metric: "20 - 30"
    },
    id: 193,
    image: {
      height: 532,
      id: "HJd0XecNX",
      url: "https://cdn2.thedogapi.com/images/HJd0XecNX.jpg",
      width: 800
    },
    life_span: "15 years",
    name: "Pomeranian",
    reference_image_id: "HJd0XecNX",
    temperament: "Extroverted, Friendly, Sociable, Playful, Intelligent, Active",
    weight: {
      imperial: "3 - 7",
      metric: "1 - 3"
    }
  },
  {
    height: {
      imperial: "11 - 15",
      metric: "28 - 38"
    },
    id: 196,
    image: {
      height: 853,
      id: "Hkxk4ecVX",
      url: "https://cdn2.thedogapi.com/images/Hkxk4ecVX.jpg",
      width: 1280
    },
    life_span: "12 – 15 years",
    name: "Poodle (Miniature)",
    reference_image_id: "Hkxk4ecVX",
    weight: {
      imperial: "15 - 17",
      metric: "7 - 8"
    }
  },
  {
    height: {
      imperial: "9 - 11",
      metric: "23 - 28"
    },
    id: 197,
    image: {
      height: 403,
      id: "rJFJVxc4m",
      url: "https://cdn2.thedogapi.com/images/rJFJVxc4m.jpg",
      width: 620
    },
    life_span: "18 years",
    name: "Poodle (Toy)",
    reference_image_id: "rJFJVxc4m",
    weight: {
      imperial: "6 - 9",
      metric: "3 - 4"
    }
  },
  {
    bred_for: "Lapdog",
    breed_group: "Toy",
    height: {
      imperial: "10 - 12",
      metric: "25 - 30"
    },
    id: 201,
    image: {
      height: 600,
      id: "HyJvcl9N7",
      url: "https://cdn2.thedogapi.com/images/HyJvcl9N7.jpg",
      width: 800
    },
    life_span: "12 - 14 years",
    name: "Pug",
    reference_image_id: "HyJvcl9N7",
    temperament: "Docile, Clever, Charming, Stubborn, Sociable, Playful, Quiet, Attentive",
    weight: {
      imperial: "14 - 18",
      metric: "6 - 8"
    }
  },
  {
    bred_for: "Herding",
    breed_group: "Herding",
    height: {
      imperial: "16 - 17",
      metric: "41 - 43"
    },
    id: 204,
    image: {
      height: 829,
      id: "ryPgVl5N7",
      url: "https://cdn2.thedogapi.com/images/ryPgVl5N7.jpg",
      width: 1199
    },
    life_span: "12 - 16 Years years",
    name: "Puli",
    reference_image_id: "ryPgVl5N7",
    temperament: "Energetic, Agile, Loyal, Obedient, Intelligent, Faithful",
    weight: {
      imperial: "25 - 35",
      metric: "11 - 16"
    }
  },
  {
    breed_group: "Herding",
    height: {
      imperial: "15 - 18.5",
      metric: "38 - 47"
    },
    id: 205,
    image: {
      height: 391,
      id: "SyRe4xcN7",
      url: "https://cdn2.thedogapi.com/images/SyRe4xcN7.jpg",
      width: 695
    },
    life_span: "13 - 15 years",
    name: "Pumi",
    reference_image_id: "SyRe4xcN7",
    temperament: "Lively, Reserved, Intelligent, Active, Protective, Vocal",
    weight: {
      imperial: "18 - 33",
      metric: "8 - 15"
    }
  },
  {
    breed_group: "Terrier",
    height: {
      imperial: "10 - 13",
      metric: "25 - 33"
    },
    id: 207,
    image: {
      height: 689,
      id: "HkXWNl9E7",
      url: "https://cdn2.thedogapi.com/images/HkXWNl9E7.jpg",
      width: 825
    },
    life_span: "12 - 18 years",
    name: "Rat Terrier",
    reference_image_id: "HkXWNl9E7",
    temperament: "Affectionate, Lively, Inquisitive, Alert, Intelligent, Loving",
    weight: {
      imperial: "8 - 25",
      metric: "4 - 11"
    }
  },
  {
    bred_for: "Hunting raccoon, deer, bear, and cougar.",
    breed_group: "Hound",
    height: {
      imperial: "21 - 27",
      metric: "53 - 69"
    },
    id: 208,
    image: {
      height: 1323,
      id: "HJMzEl5N7",
      url: "https://cdn2.thedogapi.com/images/HJMzEl5N7.jpg",
      width: 1537
    },
    life_span: "10 - 12 years",
    name: "Redbone Coonhound",
    reference_image_id: "HJMzEl5N7",
    temperament: "Affectionate, Energetic, Independent, Companionable, Familial, Unflappable",
    weight: {
      imperial: "45 - 80",
      metric: "20 - 36"
    }
  },
  {
    bred_for: "Big game hunting, guarding",
    breed_group: "Hound",
    height: {
      imperial: "24 - 27",
      metric: "61 - 69"
    },
    id: 209,
    image: {
      height: 667,
      id: "By9zNgqE7",
      url: "https://cdn2.thedogapi.com/images/By9zNgqE7.jpg",
      width: 1000
    },
    life_span: "10 - 12 years",
    name: "Rhodesian Ridgeback",
    reference_image_id: "By9zNgqE7",
    temperament: "Strong Willed, Mischievous, Loyal, Dignified, Sensitive, Intelligent",
    weight: {
      imperial: "75 - 80",
      metric: "34 - 36"
    }
  },
  {
    bred_for: "Cattle drover, guardian, draft",
    breed_group: "Working",
    height: {
      imperial: "22 - 27",
      metric: "56 - 69"
    },
    id: 210,
    image: {
      height: 595,
      id: "r1xXEgcNX",
      url: "https://cdn2.thedogapi.com/images/r1xXEgcNX.jpg",
      width: 736
    },
    life_span: "8 - 10 years",
    name: "Rottweiler",
    reference_image_id: "r1xXEgcNX",
    temperament: "Steady, Good-natured, Fearless, Devoted, Alert, Obedient, Confident, Self-assured, Calm, Courageous",
    weight: {
      imperial: "75 - 110",
      metric: "34 - 50"
    }
  },
  {
    breed_group: "Toy",
    height: {
      imperial: "7.5 - 10.5",
      metric: "19 - 27"
    },
    id: 211,
    image: {
      height: 380,
      id: "HkP7Vxc4Q",
      url: "https://cdn2.thedogapi.com/images/HkP7Vxc4Q.jpg",
      width: 645
    },
    life_span: "10 - 12 years",
    name: "Russian Toy",
    reference_image_id: "HkP7Vxc4Q",
    weight: {
      imperial: "3 - 6",
      metric: "1 - 3"
    }
  },
  {
    bred_for: "Draft, search, rescue",
    breed_group: "Working",
    height: {
      imperial: "25.5 - 27.5",
      metric: "65 - 70"
    },
    id: 212,
    image: {
      height: 1084,
      id: "_Qf9nfRzL",
      url: "https://cdn2.thedogapi.com/images/_Qf9nfRzL.png",
      width: 1080
    },
    life_span: "7 - 10 years",
    name: "Saint Bernard",
    reference_image_id: "_Qf9nfRzL",
    temperament: "Friendly, Lively, Gentle, Watchful, Calm",
    weight: {
      imperial: "130 - 180",
      metric: "59 - 82"
    }
  },
  {
    bred_for: "Coursing gazelle and hare",
    breed_group: "Hound",
    height: {
      imperial: "23 - 28",
      metric: "58 - 71"
    },
    id: 213,
    image: {
      height: 450,
      id: "fjFIuehNo",
      url: "https://cdn2.thedogapi.com/images/fjFIuehNo.jpg",
      width: 750
    },
    life_span: "12 - 14 years",
    name: "Saluki",
    reference_image_id: "fjFIuehNo",
    temperament: "Aloof, Reserved, Intelligent, Quiet",
    weight: {
      imperial: "35 - 65",
      metric: "16 - 29"
    }
  },
  {
    bred_for: "Herding reindeer, guardian, draft",
    breed_group: "Working",
    height: {
      imperial: "19 - 23.5",
      metric: "48 - 60"
    },
    id: 214,
    image: {
      height: 797,
      id: "S1T8Ee9Nm",
      url: "https://cdn2.thedogapi.com/images/S1T8Ee9Nm.jpg",
      width: 1200
    },
    life_span: "12 - 14 years",
    name: "Samoyed",
    reference_image_id: "S1T8Ee9Nm",
    temperament: "Stubborn, Friendly, Sociable, Lively, Alert, Playful",
    weight: {
      imperial: "50 - 60",
      metric: "23 - 27"
    }
  },
  {
    bred_for: "Barge watchdog",
    breed_group: "Non-Sporting",
    height: {
      imperial: "10 - 13",
      metric: "25 - 33"
    },
    id: 216,
    image: {
      height: 681,
      id: "SyBvVgc47",
      url: "https://cdn2.thedogapi.com/images/SyBvVgc47.jpg",
      width: 1024
    },
    life_span: "13 - 15 years",
    name: "Schipperke",
    reference_image_id: "SyBvVgc47",
    temperament: "Fearless, Agile, Curious, Independent, Confident, Faithful",
    weight: {
      imperial: "10 - 16",
      metric: "5 - 7"
    }
  },
  {
    bred_for: "Coursing deer",
    breed_group: "Hound",
    height: {
      imperial: "28 - 32",
      metric: "71 - 81"
    },
    id: 218,
    image: {
      height: 480,
      id: "SkNjqx9NQ",
      url: "https://cdn2.thedogapi.com/images/SkNjqx9NQ.jpg",
      width: 700
    },
    life_span: "8 - 10 years",
    name: "Scottish Deerhound",
    reference_image_id: "SkNjqx9NQ",
    temperament: "Docile, Friendly, Dignified, Gentle",
    weight: {
      imperial: "70 - 130",
      metric: "32 - 59"
    }
  },
  {
    bred_for: "Vermin hunting",
    breed_group: "Terrier",
    height: {
      imperial: "10",
      metric: "25"
    },
    id: 219,
    image: {
      height: 976,
      id: "Bklnce5NX",
      url: "https://cdn2.thedogapi.com/images/Bklnce5NX.jpg",
      width: 1280
    },
    life_span: "11 - 13 years",
    name: "Scottish Terrier",
    reference_image_id: "Bklnce5NX",
    temperament: "Feisty, Alert, Independent, Playful, Quick, Self-assured",
    weight: {
      imperial: "18 - 22",
      metric: "8 - 10"
    }
  },
  {
    bred_for: "Sheep herding",
    breed_group: "Herding",
    height: {
      imperial: "13 - 16",
      metric: "33 - 41"
    },
    id: 221,
    image: {
      height: 640,
      id: "rJa29l9E7",
      url: "https://cdn2.thedogapi.com/images/rJa29l9E7.jpg",
      width: 824
    },
    life_span: "12 - 14 years",
    name: "Shetland Sheepdog",
    reference_image_id: "rJa29l9E7",
    temperament: "Affectionate, Lively, Responsive, Alert, Loyal, Reserved, Playful, Gentle, Intelligent, Active, Trainable, Strong",
    weight: {
      imperial: "30",
      metric: "14"
    }
  },
  {
    bred_for: "Hunting in the mountains of Japan, Alert Watchdog",
    breed_group: "Non-Sporting",
    height: {
      imperial: "13.5 - 16.5",
      metric: "34 - 42"
    },
    id: 222,
    image: {
      height: 1080,
      id: "Zn3IjPX3f",
      url: "https://cdn2.thedogapi.com/images/Zn3IjPX3f.jpg",
      width: 1080
    },
    life_span: "12 - 16 years",
    name: "Shiba Inu",
    reference_image_id: "Zn3IjPX3f",
    temperament: "Charming, Fearless, Keen, Alert, Confident, Faithful",
    weight: {
      imperial: "17 - 23",
      metric: "8 - 10"
    }
  },
  {
    bred_for: "Lapdog",
    breed_group: "Toy",
    height: {
      imperial: "8 - 11",
      metric: "20 - 28"
    },
    id: 223,
    image: {
      height: 600,
      id: "BkrJjgcV7",
      url: "https://cdn2.thedogapi.com/images/BkrJjgcV7.jpg",
      width: 800
    },
    life_span: "10 - 18 years",
    name: "Shih Tzu",
    reference_image_id: "BkrJjgcV7",
    temperament: "Clever, Spunky, Outgoing, Friendly, Affectionate, Lively, Alert, Loyal, Independent, Playful, Gentle, Intelligent, Happy, Active, Courageous",
    weight: {
      imperial: "9 - 16",
      metric: "4 - 7"
    }
  },
  {
    bred_for: "Swimming, Carrying backpacks, Pulling carts or sleds",
    height: {
      imperial: "26 - 30",
      metric: "66 - 76"
    },
    id: 225,
    image: {
      height: 803,
      id: "SJJxjecEX",
      url: "https://cdn2.thedogapi.com/images/SJJxjecEX.jpg",
      width: 1005
    },
    life_span: "9 – 14 years",
    name: "Shiloh Shepherd",
    reference_image_id: "SJJxjecEX",
    temperament: "Outgoing, Loyal, Companionable, Gentle, Loving, Trainable",
    weight: {
      imperial: "120 - 140",
      metric: "54 - 64"
    }
  },
  {
    bred_for: "Sled pulling",
    breed_group: "Working",
    height: {
      imperial: "20 - 23.5",
      metric: "51 - 60"
    },
    id: 226,
    image: {
      height: 1280,
      id: "S17ZilqNm",
      url: "https://cdn2.thedogapi.com/images/S17ZilqNm.jpg",
      width: 1920
    },
    life_span: "12 years",
    name: "Siberian Husky",
    reference_image_id: "S17ZilqNm",
    temperament: "Outgoing, Friendly, Alert, Gentle, Intelligent",
    weight: {
      imperial: "35 - 60",
      metric: "16 - 27"
    }
  },
  {
    bred_for: "Small vermin hunting, companionship",
    breed_group: "Toy",
    height: {
      imperial: "9 - 10",
      metric: "23 - 25"
    },
    id: 228,
    image: {
      height: 1142,
      id: "ByzGsl5Nm",
      url: "https://cdn2.thedogapi.com/images/ByzGsl5Nm.jpg",
      width: 1599
    },
    life_span: "12 - 15 years",
    name: "Silky Terrier",
    reference_image_id: "ByzGsl5Nm",
    temperament: "Friendly, Responsive, Inquisitive, Alert, Quick, Joyful",
    weight: {
      imperial: "8 - 10",
      metric: "4 - 5"
    }
  },
  {
    bred_for: "Fox bolting",
    breed_group: "Terrier",
    height: {
      imperial: "15.5",
      metric: "39"
    },
    id: 232,
    image: {
      height: 1031,
      id: "Syszjx9Em",
      url: "https://cdn2.thedogapi.com/images/Syszjx9Em.jpg",
      width: 1600
    },
    life_span: "12 - 14 years",
    name: "Smooth Fox Terrier",
    reference_image_id: "Syszjx9Em",
    temperament: "Fearless, Affectionate, Alert, Playful, Intelligent, Active",
    weight: {
      imperial: "up - 18",
      metric: "NaN - 8"
    }
  },
  {
    bred_for: "Vermin hunting, guarding, all-around farm helper",
    breed_group: "Terrier",
    height: {
      imperial: "16 - 18",
      metric: "41 - 46"
    },
    id: 233,
    image: {
      height: 800,
      id: "HJHmix5NQ",
      url: "https://cdn2.thedogapi.com/images/HJHmix5NQ.jpg",
      width: 1200
    },
    life_span: "12 - 15 years",
    name: "Soft Coated Wheaten Terrier",
    reference_image_id: "HJHmix5NQ",
    temperament: "Affectionate, Spirited, Energetic, Playful, Intelligent, Faithful",
    weight: {
      imperial: "30 - 40",
      metric: "14 - 18"
    }
  },
  {
    bred_for: "Herding flocks of sheep and goats from one pasture to another",
    breed_group: "Sporting",
    height: {
      imperial: "16 - 20",
      metric: "41 - 51"
    },
    id: 235,
    image: {
      height: 922,
      id: "HJf4jl9VX",
      url: "https://cdn2.thedogapi.com/images/HJf4jl9VX.jpg",
      width: 1200
    },
    life_span: "12 - 15 years",
    name: "Spanish Water Dog",
    reference_image_id: "HJf4jl9VX",
    temperament: "Trainable, Diligent, Affectionate, Loyal, Athletic, Intelligent",
    weight: {
      imperial: "30 - 50",
      metric: "14 - 23"
    }
  },
  {
    breed_group: "Sporting",
    height: {
      imperial: "22.5 - 27.5",
      metric: "57 - 70"
    },
    id: 236,
    image: {
      height: 772,
      id: "rk5Eoe5Nm",
      url: "https://cdn2.thedogapi.com/images/rk5Eoe5Nm.jpg",
      width: 1030
    },
    life_span: "10 - 12 years",
    name: "Spinone Italiano",
    reference_image_id: "rk5Eoe5Nm",
    temperament: "Docile, Friendly, Affectionate, Loyal, Patient, Gentle",
    weight: {
      imperial: "61 - 85",
      metric: "28 - 39"
    }
  },
  {
    bred_for: "",
    breed_group: "Terrier",
    height: {
      imperial: "14 - 16",
      metric: "36 - 41"
    },
    id: 238,
    image: {
      height: 852,
      id: "H1zSie9V7",
      url: "https://cdn2.thedogapi.com/images/H1zSie9V7.jpg",
      width: 1280
    },
    life_span: "12 - 14 years",
    name: "Staffordshire Bull Terrier",
    reference_image_id: "H1zSie9V7",
    temperament: "Reliable, Fearless, Bold, Affectionate, Loyal, Intelligent, Courageous",
    weight: {
      imperial: "24 - 38",
      metric: "11 - 17"
    }
  },
  {
    bred_for: "Ratting, guarding",
    breed_group: "Working",
    height: {
      imperial: "17.5 - 19.5",
      metric: "44 - 50"
    },
    id: 239,
    image: {
      height: 585,
      id: "tmzeu6ID_",
      url: "https://cdn2.thedogapi.com/images/tmzeu6ID_.jpg",
      width: 650
    },
    life_span: "13 - 15 years",
    name: "Standard Schnauzer",
    reference_image_id: "tmzeu6ID_",
    temperament: "Trainable, Good-natured, Devoted, Lively, Playful, Intelligent",
    weight: {
      imperial: "30 - 50",
      metric: "14 - 23"
    }
  },
  {
    breed_group: "Herding",
    height: {
      imperial: "11.5 - 13.5",
      metric: "29 - 34"
    },
    id: 242,
    image: {
      height: 851,
      id: "HJ-Dix94Q",
      url: "https://cdn2.thedogapi.com/images/HJ-Dix94Q.jpg",
      width: 1280
    },
    life_span: "12 - 14 years",
    name: "Swedish Vallhund",
    reference_image_id: "HJ-Dix94Q",
    temperament: "Fearless, Friendly, Energetic, Alert, Intelligent, Watchful",
    weight: {
      imperial: "20 - 30",
      metric: "9 - 14"
    }
  },
  {
    breed_group: "Hound",
    height: {
      imperial: "20 - 24",
      metric: "51 - 61"
    },
    id: 243,
    image: {
      height: 720,
      id: "zv89hR-O8",
      url: "https://cdn2.thedogapi.com/images/zv89hR-O8.jpg",
      width: 1080
    },
    life_span: "10 - 12 years",
    name: "Thai Ridgeback",
    reference_image_id: "zv89hR-O8",
    temperament: "Protective, Loyal, Independent, Intelligent, Loving, Familial",
    weight: {
      imperial: "35 - 55",
      metric: "16 - 25"
    }
  },
  {
    breed_group: "Working",
    height: {
      imperial: "24 - 26",
      metric: "61 - 66"
    },
    id: 244,
    image: {
      height: 1375,
      id: "SkM9sec47",
      url: "https://cdn2.thedogapi.com/images/SkM9sec47.jpg",
      width: 1600
    },
    life_span: "10 - 14 years",
    name: "Tibetan Mastiff",
    reference_image_id: "SkM9sec47",
    temperament: "Strong Willed, Tenacious, Aloof, Stubborn, Intelligent, Protective",
    weight: {
      imperial: "85 - 140",
      metric: "39 - 64"
    }
  },
  {
    breed_group: "Non-Sporting",
    height: {
      imperial: "10",
      metric: "25"
    },
    id: 245,
    image: {
      height: 825,
      id: "Hyjcol947",
      url: "https://cdn2.thedogapi.com/images/Hyjcol947.jpg",
      width: 1023
    },
    life_span: "12 - 15 years",
    name: "Tibetan Spaniel",
    reference_image_id: "Hyjcol947",
    temperament: "Willful, Aloof, Assertive, Independent, Playful, Intelligent, Happy",
    weight: {
      imperial: "9 - 15",
      metric: "4 - 7"
    }
  },
  {
    bred_for: "Good luck charms, mascots, watchdogs, herding dogs, and companions",
    breed_group: "Non-Sporting",
    height: {
      imperial: "14 - 17",
      metric: "36 - 43"
    },
    id: 246,
    image: {
      height: 1226,
      id: "6f5n_42mB",
      url: "https://cdn2.thedogapi.com/images/6f5n_42mB.jpg",
      width: 981
    },
    life_span: "12 - 15 years",
    name: "Tibetan Terrier",
    reference_image_id: "6f5n_42mB",
    temperament: "Affectionate, Energetic, Amiable, Reserved, Gentle, Sensitive",
    weight: {
      imperial: "20 - 24",
      metric: "9 - 11"
    }
  },
  {
    breed_group: "Toy",
    height: {
      imperial: "8 - 11",
      metric: "20 - 28"
    },
    id: 248,
    image: {
      height: 1024,
      id: "B17ase9V7",
      url: "https://cdn2.thedogapi.com/images/B17ase9V7.jpg",
      width: 1200
    },
    life_span: "12 - 15 years",
    name: "Toy Fox Terrier",
    reference_image_id: "B17ase9V7",
    temperament: "Friendly, Spirited, Alert, Loyal, Playful, Intelligent",
    weight: {
      imperial: "4 - 9",
      metric: "2 - 4"
    }
  },
  {
    breed_group: "Hound",
    height: {
      imperial: "20 - 27",
      metric: "51 - 69"
    },
    id: 250,
    image: {
      height: 1080,
      id: "SkRpsgc47",
      url: "https://cdn2.thedogapi.com/images/SkRpsgc47.jpg",
      width: 1920
    },
    life_span: "10 - 13 years",
    name: "Treeing Walker Coonhound",
    reference_image_id: "SkRpsgc47",
    temperament: "Clever, Affectionate, Confident, Intelligent, Loving, Trainable",
    weight: {
      imperial: "45 - 80",
      metric: "20 - 36"
    }
  },
  {
    bred_for: "Pointing and trailing",
    breed_group: "Sporting",
    height: {
      imperial: "21 - 24",
      metric: "53 - 61"
    },
    id: 251,
    image: {
      height: 1276,
      id: "r1o0jx9Em",
      url: "https://cdn2.thedogapi.com/images/r1o0jx9Em.jpg",
      width: 2269
    },
    life_span: "10 - 14 years",
    name: "Vizsla",
    reference_image_id: "r1o0jx9Em",
    temperament: "Affectionate, Energetic, Loyal, Gentle, Quiet",
    weight: {
      imperial: "50 - 65",
      metric: "23 - 29"
    }
  },
  {
    bred_for: "Large game trailing and versatile gundog",
    breed_group: "Sporting",
    height: {
      imperial: "23 - 27",
      metric: "58 - 69"
    },
    id: 253,
    image: {
      height: 954,
      id: "SyU12l9V7",
      url: "https://cdn2.thedogapi.com/images/SyU12l9V7.jpg",
      width: 901
    },
    life_span: "12 - 15 years",
    name: "Weimaraner",
    reference_image_id: "SyU12l9V7",
    temperament: "Steady, Aloof, Stubborn, Energetic, Alert, Intelligent, Powerful, Fast",
    weight: {
      imperial: "55 - 90",
      metric: "25 - 41"
    }
  },
  {
    bred_for: "Flushing and retrieving birds",
    breed_group: "Sporting",
    height: {
      imperial: "17 - 19",
      metric: "43 - 48"
    },
    id: 254,
    image: {
      height: 944,
      id: "BJ1gnx5Vm",
      url: "https://cdn2.thedogapi.com/images/BJ1gnx5Vm.jpg",
      width: 1331
    },
    life_span: "12 - 15 years",
    name: "Welsh Springer Spaniel",
    reference_image_id: "BJ1gnx5Vm",
    temperament: "Stubborn, Friendly, Affectionate, Loyal, Playful, Active",
    weight: {
      imperial: "35 - 55",
      metric: "16 - 25"
    }
  },
  {
    bred_for: "Fox, badger, vermin hunting",
    breed_group: "Terrier",
    height: {
      imperial: "10 - 11",
      metric: "25 - 28"
    },
    id: 256,
    image: {
      height: 1032,
      id: "Bkdx2g5Em",
      url: "https://cdn2.thedogapi.com/images/Bkdx2g5Em.jpg",
      width: 1065
    },
    life_span: "15 - 20 years",
    name: "West Highland White Terrier",
    reference_image_id: "Bkdx2g5Em",
    temperament: "Hardy, Friendly, Alert, Independent, Gay, Active, Courageous",
    weight: {
      imperial: "15 - 22",
      metric: "7 - 10"
    }
  },
  {
    bred_for: "Coursing, racing",
    breed_group: "Hound",
    height: {
      imperial: "18 - 22",
      metric: "46 - 56"
    },
    id: 257,
    image: {
      height: 1071,
      id: "Hyv-ne94m",
      url: "https://cdn2.thedogapi.com/images/Hyv-ne94m.jpg",
      width: 1600
    },
    life_span: "12 - 15 years",
    name: "Whippet",
    reference_image_id: "Hyv-ne94m",
    temperament: "Friendly, Affectionate, Lively, Gentle, Intelligent, Quiet",
    weight: {
      imperial: "25 - 35",
      metric: "11 - 16"
    }
  },
  {
    height: {
      imperial: "22 - 25",
      metric: "56 - 64"
    },
    id: 258,
    image: {
      height: 800,
      id: "r14M3e9E7",
      url: "https://cdn2.thedogapi.com/images/r14M3e9E7.jpg",
      width: 1200
    },
    life_span: "12 – 14 years",
    name: "White Shepherd",
    reference_image_id: "r14M3e9E7",
    temperament: "Self-confidence, Aloof, Fearless, Alert, Companionable, Eager",
    weight: {
      imperial: "60 - 85",
      metric: "27 - 39"
    }
  },
  {
    bred_for: "Vermin hunting, fox bolting",
    height: {
      imperial: "13 - 16",
      metric: "33 - 41"
    },
    history: " England",
    id: 259,
    image: {
      height: 795,
      id: "SJ6f2g9EQ",
      url: "https://cdn2.thedogapi.com/images/SJ6f2g9EQ.jpg",
      width: 1000
    },
    life_span: "13 – 14 years",
    name: "Wire Fox Terrier",
    reference_image_id: "SJ6f2g9EQ",
    temperament: "Fearless, Friendly, Bold, Keen, Alert, Quick",
    weight: {
      imperial: "15 - 19",
      metric: "7 - 9"
    }
  },
  {
    breed_group: "Sporting",
    height: {
      imperial: "21.5 - 25",
      metric: "55 - 64"
    },
    id: 261,
    image: {
      height: 770,
      id: "r1I4hl5Em",
      url: "https://cdn2.thedogapi.com/images/r1I4hl5Em.jpg",
      width: 1024
    },
    life_span: "12 - 14 years",
    name: "Wirehaired Vizsla",
    reference_image_id: "r1I4hl5Em",
    weight: {
      imperial: "45 - 65",
      metric: "20 - 29"
    }
  },
  {
    breed_group: "Non-Sporting",
    height: {
      imperial: "10 - 23",
      metric: "25 - 58"
    },
    id: 262,
    image: {
      height: 1350,
      id: "HkNS3gqEm",
      url: "https://cdn2.thedogapi.com/images/HkNS3gqEm.jpg",
      width: 1500
    },
    life_span: "12 - 14 years",
    name: "Xoloitzcuintli",
    reference_image_id: "HkNS3gqEm",
    temperament: "Cheerful, Alert, Companionable, Intelligent, Protective, Calm",
    weight: {
      imperial: "9 - 31",
      metric: "4 - 14"
    }
  },
  {
    bred_for: "Small vermin hunting",
    breed_group: "Toy",
    height: {
      imperial: "8 - 9",
      metric: "20 - 23"
    },
    id: 264,
    image: {
      height: 683,
      id: "B12BnxcVQ",
      url: "https://cdn2.thedogapi.com/images/B12BnxcVQ.jpg",
      width: 1024
    },
    life_span: "12 - 16 years",
    name: "Yorkshire Terrier",
    reference_image_id: "B12BnxcVQ",
    temperament: "Bold, Independent, Confident, Intelligent, Courageous",
    weight: {
      imperial: "4 - 7",
      metric: "2 - 3"
    }
  }
]

module.exports = { dogs }