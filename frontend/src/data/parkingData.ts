// parkingData.ts

export interface ParkingData {
  id: number;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  permits: string[];
  hasCharging: boolean;
}

const campusParkingData: ParkingData[] = [
  {
    "id": 1,
    "name": "Animal Science - GR",
    "position": {
      "lat": 29.631056960834925,
      "lng": -82.35109602825995
    },
    "permits": [
      "Green"
    ],
    "hasCharging": false
  },
  {
    "id": 2,
    "name": "Animal Science - OR",
    "position": {
      "lat": 29.63107821995999,
      "lng": -82.35110408295655
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 3,
    "name": "Archer Field - BL",
    "position": {
      "lat": 29.636673187932907,
      "lng": -82.35408279409123
    },
    "permits": [
      "Blue"
    ],
    "hasCharging": false
  },
  {
    "id": 4,
    "name": "Baby Gator - GR",
    "position": {
      "lat": 29.645297006202508,
      "lng": -82.36095195448759
    },
    "permits": [
      "Green"
    ],
    "hasCharging": false
  },
  {
    "id": 5,
    "name": "Band Practice - BL",
    "position": {
      "lat": 29.639238866961172,
      "lng": -82.35121551900728
    },
    "permits": [
      "Blue"
    ],
    "hasCharging": false
  },
  {
    "id": 6,
    "name": "Bat House Parking",
    "position": {
      "lat": 29.64342326139492,
      "lng": -82.36405168301552
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 7,
    "name": "Baughman Center",
    "position": {
      "lat": 29.641635889768967,
      "lng": -82.36381956921063
    },
    "permits": [
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 8,
    "name": "Beaty Towers - R1",
    "position": {
      "lat": 29.643686068247128,
      "lng": -82.34069829890966
    },
    "permits": [
      "Red One"
    ],
    "hasCharging": false
  },
  {
    "id": 9,
    "name": "Bio Medical Circle",
    "position": {
      "lat": 29.640993966105032,
      "lng": -82.34589728331245
    },
    "permits": [
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 10,
    "name": "Black Hall - OR",
    "position": {
      "lat": 29.641659694235354,
      "lng": -82.34753341393765
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 11,
    "name": "Building 105 Parking",
    "position": {
      "lat": 29.653003630029367,
      "lng": -82.34281598175647
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 12,
    "name": "Cancer Genetics - OR1",
    "position": {
      "lat": 29.6371198954269,
      "lng": -82.35325282260952
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 13,
    "name": "Cancer Genetics - OR2",
    "position": {
      "lat": 29.637408185819858,
      "lng": -82.3537685221057
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 14,
    "name": "Cancer Genetics - ORB1",
    "position": {
      "lat": 29.63697180072695,
      "lng": -82.35376625030214
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 15,
    "name": "Cancer Genetics - ORB2",
    "position": {
      "lat": 29.63753660677245,
      "lng": -82.35302854351991
    },
    "permits": [
      "Blue",
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 16,
    "name": "Cancer Research - BL",
    "position": {
      "lat": 29.637318789849175,
      "lng": -82.34990492785106
    },
    "permits": [
      "Blue"
    ],
    "hasCharging": false
  },
  {
    "id": 17,
    "name": "Corry Village - BR1",
    "position": {
      "lat": 29.64660891136147,
      "lng": -82.3624108499379
    },
    "permits": [
      "Brown"
    ],
    "hasCharging": false
  },
  {
    "id": 18,
    "name": "Corry Village - BR2",
    "position": {
      "lat": 29.646520840807792,
      "lng": -82.36051079719954
    },
    "permits": [
      "Brown"
    ],
    "hasCharging": false
  },
  {
    "id": 19,
    "name": "Corry Village - GBR",
    "position": {
      "lat": 29.64629900287874,
      "lng": -82.3623568632503
    },
    "permits": [
      "Brown",
      "Green"
    ],
    "hasCharging": false
  },
  {
    "id": 20,
    "name": "Criser Hall - GS",
    "position": {
      "lat": 29.650036755148033,
      "lng": -82.34080534873031
    },
    "permits": [
      "Gold",
      "Silver"
    ],
    "hasCharging": false
  },
  {
    "id": 21,
    "name": "Cultural Plaza",
    "position": {
      "lat": 29.637192684299624,
      "lng": -82.36967993282154
    },
    "permits": [
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 22,
    "name": "Cypress - OR",
    "position": {
      "lat": 29.645692345953186,
      "lng": -82.33958935969898
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 23,
    "name": "Deriso - BL",
    "position": {
      "lat": 29.633014518266883,
      "lng": -82.3513986579523
    },
    "permits": [
      "Blue"
    ],
    "hasCharging": false
  },
  {
    "id": 24,
    "name": "Diamond Village - BW",
    "position": {
      "lat": 29.64270282050981,
      "lng": -82.33975401157608
    },
    "permits": [
      "Brown 3"
    ],
    "hasCharging": false
  },
  {
    "id": 25,
    "name": "East Hall - OR",
    "position": {
      "lat": 29.646796185005503,
      "lng": -82.3501244368684
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 26,
    "name": "East Law - OR",
    "position": {
      "lat": 29.648928742945436,
      "lng": -82.35839613274158
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 27,
    "name": "East Pan Parking",
    "position": {
      "lat": 29.64412965135493,
      "lng": -82.33657503801138
    },
    "permits": [
      "Red One"
    ],
    "hasCharging": false
  },
  {
    "id": 28,
    "name": "Elmore Hall",
    "position": {
      "lat": 29.642841776234093,
      "lng": -82.3661724178644
    },
    "permits": [
      "Orange",
      "Green",
      "Staff Commuter"
    ],
    "hasCharging": false
  },
  {
    "id": 29,
    "name": "Engineering Design - OR",
    "position": {
      "lat": 29.642144516626526,
      "lng": -82.34836632733918
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 30,
    "name": "Entomology and Nematology - OR",
    "position": {
      "lat": 29.635370300395806,
      "lng": -82.36594646744905
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 31,
    "name": "Facilities Services - GR",
    "position": {
      "lat": 29.643081774578373,
      "lng": -82.37076342027343
    },
    "permits": [
      "Green",
      "Staff Commuter"
    ],
    "hasCharging": false
  },
  {
    "id": 32,
    "name": "Facilities Services - OR1",
    "position": {
      "lat": 29.6440203950278,
      "lng": -82.37085876298643
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 33,
    "name": "Facilities Services - OR2",
    "position": {
      "lat": 29.64240510413526,
      "lng": -82.3707742842791
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 34,
    "name": "Fifield",
    "position": {
      "lat": 29.63856648258189,
      "lng": -82.36027771860871
    },
    "permits": [
      "Orange",
      "Green",
      "Staff Commuter"
    ],
    "hasCharging": false
  },
  {
    "id": 35,
    "name": "Fifield - VS",
    "position": {
      "lat": 29.637815728650803,
      "lng": -82.36109060159045
    },
    "permits": [
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 36,
    "name": "Fine Arts C - GS",
    "position": {
      "lat": 29.647412619910522,
      "lng": -82.3405290527969
    },
    "permits": [
      "Gold",
      "Silver"
    ],
    "hasCharging": false
  },
  {
    "id": 37,
    "name": "Flavet - GRX",
    "position": {
      "lat": 29.645851201304247,
      "lng": -82.35275075463083
    },
    "permits": [
      "Green"
    ],
    "hasCharging": false
  },
  {
    "id": 38,
    "name": "Fletcher Drive - OR",
    "position": {
      "lat": 29.65115935954045,
      "lng": -82.34632691973728
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 39,
    "name": "Forestry - GR",
    "position": {
      "lat": 29.637863950047063,
      "lng": -82.3560021341699
    },
    "permits": [
      "Green",
      "Staff Commuter"
    ],
    "hasCharging": false
  },
  {
    "id": 40,
    "name": "Fraternity Row - RD",
    "position": {
      "lat": 29.64730162553168,
      "lng": -82.3576608174254
    },
    "permits": [
      "Red"
    ],
    "hasCharging": false
  },
  {
    "id": 41,
    "name": "Frazier Rogers - OR",
    "position": {
      "lat": 29.644682670598534,
      "lng": -82.34650478470354
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 42,
    "name": "Gale Lem Surface Lot",
    "position": {
      "lat": 29.641414668082923,
      "lng": -82.351076734738
    },
    "permits": [
      "Red"
    ],
    "hasCharging": false
  },
  {
    "id": 43,
    "name": "Garage 1",
    "position": {
      "lat": 29.641063382827024,
      "lng": -82.34206277747712
    },
    "permits": [
      "Gold",
      "Silver"
    ],
    "hasCharging": false
  },
  {
    "id": 44,
    "name": "Garage 10",
    "position": {
      "lat": 29.640627786492242,
      "lng": -82.34176705239075
    },
    "permits": [
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 45,
    "name": "Garage 12",
    "position": {
      "lat": 29.645590754483326,
      "lng": -82.34818267267505
    },
    "permits": [
      "Gold",
      "Silver",
      "Visitor"
    ],
    "hasCharging": true
  },
  {
    "id": 46,
    "name": "Garage 13",
    "position": {
      "lat": 29.640548849195778,
      "lng": -82.34970585784647
    },
    "permits": [
      "Blue",
      "Gold",
      "Silver",
      "Medical Resident",
      "Orange"
    ],
    "hasCharging": true
  },
  {
    "id": 47,
    "name": "Garage 14",
    "position": {
      "lat": 29.641959672524422,
      "lng": -82.35127046853401
    },
    "permits": [
      "Green",
      "Orange",
      "Blue"
    ],
    "hasCharging": true
  },
  {
    "id": 48,
    "name": "Garage 2",
    "position": {
      "lat": 29.63882576600377,
      "lng": -82.34657093150392
    },
    "permits": [
      "Gold",
      "Silver",
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 49,
    "name": "Garage 3",
    "position": {
      "lat": 29.638686152575946,
      "lng": -82.34745862463986
    },
    "permits": [
      "Gold",
      "Silver",
      "Medical Resident",
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 50,
    "name": "Garage 4",
    "position": {
      "lat": 29.645238227207646,
      "lng": -82.34284795004052
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": true
  },
  {
    "id": 51,
    "name": "Garage 5",
    "position": {
      "lat": 29.64321158503664,
      "lng": -82.35119692229107
    },
    "permits": [
      "Red",
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 52,
    "name": "Garage 6",
    "position": {
      "lat": 29.63715631077082,
      "lng": -82.34231385551685
    },
    "permits": [
      "Blue",
      "Gold",
      "Silver"
    ],
    "hasCharging": false
  },
  {
    "id": 53,
    "name": "Garage 7",
    "position": {
      "lat": 29.65057915003095,
      "lng": -82.35151385965115
    },
    "permits": [
      "Green",
      "Orange"
    ],
    "hasCharging": true
  },
  {
    "id": 54,
    "name": "Garage 8",
    "position": {
      "lat": 29.645452901783173,
      "lng": -82.33753096930464
    },
    "permits": [
      "Orange",
      "Red",
      "Red One"
    ],
    "hasCharging": true
  },
  {
    "id": 55,
    "name": "Garage 9",
    "position": {
      "lat": 29.636474732487333,
      "lng": -82.34910333648789
    },
    "permits": [
      "Blue"
    ],
    "hasCharging": false
  },
  {
    "id": 56,
    "name": "Garage I Over Sized",
    "position": {
      "lat": 29.641353832258766,
      "lng": -82.34220080854632
    },
    "permits": [
      "Gold",
      "Silver"
    ],
    "hasCharging": false
  },
  {
    "id": 57,
    "name": "Graham - R1",
    "position": {
      "lat": 29.64509353782691,
      "lng": -82.3529542936346
    },
    "permits": [
      "Red One"
    ],
    "hasCharging": false
  },
  {
    "id": 58,
    "name": "Graham - RD",
    "position": {
      "lat": 29.64535111010775,
      "lng": -82.3535480996478
    },
    "permits": [
      "Red"
    ],
    "hasCharging": false
  },
  {
    "id": 59,
    "name": "House 21 - R1",
    "position": {
      "lat": 29.647553411849774,
      "lng": -82.35942417945682
    },
    "permits": [
      "Red One"
    ],
    "hasCharging": false
  },
  {
    "id": 60,
    "name": "House 21 Parking",
    "position": {
      "lat": 29.647417486294348,
      "lng": -82.35864217586307
    },
    "permits": [
      "Red One"
    ],
    "hasCharging": false
  },
  {
    "id": 61,
    "name": "Housing - OR",
    "position": {
      "lat": 29.64385251477993,
      "lng": -82.34007071974887
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 62,
    "name": "Hume - R1",
    "position": {
      "lat": 29.644111997460502,
      "lng": -82.35102411059111
    },
    "permits": [
      "Red One"
    ],
    "hasCharging": false
  },
  {
    "id": 63,
    "name": "Hume West Parking",
    "position": {
      "lat": 29.644300570539826,
      "lng": -82.35519908313749
    },
    "permits": [
      "Red"
    ],
    "hasCharging": false
  },
  {
    "id": 64,
    "name": "HVN Garage",
    "position": {
      "lat": 29.63951983767367,
      "lng": -82.33975806791429
    },
    "permits": [
      "Gold",
      "Silver",
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 65,
    "name": "IFAS",
    "position": {
      "lat": 29.63881664962319,
      "lng": -82.3571938788706
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 66,
    "name": "IFAS Bookstore",
    "position": {
      "lat": 29.639731666,
      "lng": -82.35633394777953
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 67,
    "name": "IFAS Communication",
    "position": {
      "lat": 29.63861280820996,
      "lng": -82.35834045365162
    },
    "permits": [
      "Orange",
      "Green",
      "Staff Commuter"
    ],
    "hasCharging": false
  },
  {
    "id": 68,
    "name": "Infirmary - GS",
    "position": {
      "lat": 29.64889483033847,
      "lng": -82.34634470729878
    },
    "permits": [
      "Gold",
      "Silver"
    ],
    "hasCharging": false
  },
  {
    "id": 69,
    "name": "Jennings - R1",
    "position": {
      "lat": 29.643375209640283,
      "lng": -82.34280413587128
    },
    "permits": [
      "Red One"
    ],
    "hasCharging": false
  },
  {
    "id": 70,
    "name": "Keys Complex - R1_1",
    "position": {
      "lat": 29.64814160571714,
      "lng": -82.35413293732493
    },
    "permits": [
      "Red One"
    ],
    "hasCharging": false
  },
  {
    "id": 71,
    "name": "Keys Complex - R1_2",
    "position": {
      "lat": 29.64807379256489,
      "lng": -82.35495429182363
    },
    "permits": [
      "Red One"
    ],
    "hasCharging": false
  },
  {
    "id": 72,
    "name": "Keys Complex - R1_3",
    "position": {
      "lat": 29.647420642496513,
      "lng": -82.35429310145217
    },
    "permits": [
      "Red One"
    ],
    "hasCharging": false
  },
  {
    "id": 73,
    "name": "Lakeside Complex - RD2",
    "position": {
      "lat": 29.641681046795775,
      "lng": -82.36723431423204
    },
    "permits": [
      "Red"
    ],
    "hasCharging": false
  },
  {
    "id": 74,
    "name": "Large Animal Hospital Parking",
    "position": {
      "lat": 29.632646413990482,
      "lng": -82.35077203488784
    },
    "permits": [
      "Blue"
    ],
    "hasCharging": false
  },
  {
    "id": 75,
    "name": "Law School - GR",
    "position": {
      "lat": 29.648209441029024,
      "lng": -82.35882557949002
    },
    "permits": [
      "Green"
    ],
    "hasCharging": false
  },
  {
    "id": 76,
    "name": "Maguire Village - RD",
    "position": {
      "lat": 29.641037339842107,
      "lng": -82.36960070705653
    },
    "permits": [
      "Red"
    ],
    "hasCharging": false
  },
  {
    "id": 77,
    "name": "Mail and Document Services Parking",
    "position": {
      "lat": 29.642521034962193,
      "lng": -82.36696829621448
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 78,
    "name": "McCarty - OR",
    "position": {
      "lat": 29.646066648345187,
      "lng": -82.3441019848086
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 79,
    "name": "Memorial - GR",
    "position": {
      "lat": 29.639882052478416,
      "lng": -82.3616303159143
    },
    "permits": [
      "Green",
      "Staff Commuter"
    ],
    "hasCharging": false
  },
  {
    "id": 80,
    "name": "Microcell Parking",
    "position": {
      "lat": 29.640352220199755,
      "lng": -82.36371590755186
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 81,
    "name": "Motor Pool Parking",
    "position": {
      "lat": 29.642799268413434,
      "lng": -82.36745293721778
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 82,
    "name": "Murphree - OR",
    "position": {
      "lat": 29.65115442035831,
      "lng": -82.34728173144654
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 83,
    "name": "Murphree - R1",
    "position": {
      "lat": 29.651795147418543,
      "lng": -82.3455086490142
    },
    "permits": [
      "Gold",
      "Silver"
    ],
    "hasCharging": false
  },
  {
    "id": 84,
    "name": "Murphree - Red 1 West",
    "position": {
      "lat": 29.651189786705093,
      "lng": -82.34722610798259
    },
    "permits": [
      "Red One"
    ],
    "hasCharging": false
  },
  {
    "id": 85,
    "name": "Norman Field Lot Parking",
    "position": {
      "lat": 29.645426856423907,
      "lng": -82.33805221729737
    },
    "permits": [
      "Green",
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 86,
    "name": "North Norman Parking",
    "position": {
      "lat": 29.647283121527092,
      "lng": -82.337445466929
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 87,
    "name": "North Vet Med Blue Parking",
    "position": {
      "lat": 29.634162215158884,
      "lng": -82.34774865533653
    },
    "permits": [
      "Blue"
    ],
    "hasCharging": false
  },
  {
    "id": 88,
    "name": "North Vet Med Green Parking",
    "position": {
      "lat": 29.633679932811532,
      "lng": -82.34759930920671
    },
    "permits": [
      "Green"
    ],
    "hasCharging": false
  },
  {
    "id": 89,
    "name": "O'Connell Center NW",
    "position": {
      "lat": 29.651228508054206,
      "lng": -82.35088500893592
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": true
  },
  {
    "id": 90,
    "name": "Orthopedics - ORB2",
    "position": {
      "lat": 29.637992722126402,
      "lng": -82.376466346965
    },
    "permits": [
      "Blue",
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 91,
    "name": "Orthopedics Parking",
    "position": {
      "lat": 29.638242558270253,
      "lng": -82.3751221259028
    },
    "permits": [
      "Blue",
      "Orange",
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 92,
    "name": "PCPA - OR",
    "position": {
      "lat": 29.63494347660199,
      "lng": -82.36912197791081
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 93,
    "name": "Rhines Hall - OR",
    "position": {
      "lat": 29.647890470568807,
      "lng": -82.34903055487567
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 94,
    "name": "Ritchey Road - GR",
    "position": {
      "lat": 29.630443760369033,
      "lng": -82.3542156744049
    },
    "permits": [
      "Green",
      "Staff Commuter"
    ],
    "hasCharging": false
  },
  {
    "id": 95,
    "name": "Small Animal Hospital Parking",
    "position": {
      "lat": 29.633487345191693,
      "lng": -82.35092165372241
    },
    "permits": [
      "Blue"
    ],
    "hasCharging": false
  },
  {
    "id": 96,
    "name": "Sorority Pond Parking",
    "position": {
      "lat": 29.643626404123342,
      "lng": -82.33541238818174
    },
    "permits": [
      "Red"
    ],
    "hasCharging": false
  },
  {
    "id": 97,
    "name": "South End Zone Parking",
    "position": {
      "lat": 29.648744137586174,
      "lng": -82.34867976109594
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 98,
    "name": "Springs Complex - R1",
    "position": {
      "lat": 29.648557941916646,
      "lng": -82.35748667601355
    },
    "permits": [
      "Red One"
    ],
    "hasCharging": false
  },
  {
    "id": 99,
    "name": "Straughn Center - OR",
    "position": {
      "lat": 29.632461103143708,
      "lng": -82.35149061552575
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 100,
    "name": "SW 13th Street - GS",
    "position": {
      "lat": 29.651413608473646,
      "lng": -82.33863608807202
    },
    "permits": [
      "Gold",
      "Silver"
    ],
    "hasCharging": false
  },
  {
    "id": 101,
    "name": "The Institutes - OR",
    "position": {
      "lat": 29.65256521921915,
      "lng": -82.34206816814549
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 102,
    "name": "Tigert Hall - GS",
    "position": {
      "lat": 29.64940046869789,
      "lng": -82.34064664250347
    },
    "permits": [
      "Gold",
      "Silver"
    ],
    "hasCharging": false
  },
  {
    "id": 103,
    "name": "Triangle - BL",
    "position": {
      "lat": 29.635481233333817,
      "lng": -82.35188904878919
    },
    "permits": [
      "Blue"
    ],
    "hasCharging": false
  },
  {
    "id": 104,
    "name": "University Press - OR",
    "position": {
      "lat": 29.652606481494367,
      "lng": -82.34127880933399
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 105,
    "name": "Vet Med Parking",
    "position": {
      "lat": 29.63438854551427,
      "lng": -82.3492616552152
    },
    "permits": [
      "Blue",
      "Gold",
      "Silver",
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 106,
    "name": "Vet Med West - GR",
    "position": {
      "lat": 29.63384050244129,
      "lng": -82.35156844886473
    },
    "permits": [
      "Green"
    ],
    "hasCharging": false
  },
  {
    "id": 107,
    "name": "Wallace Parking",
    "position": {
      "lat": 29.63830769090516,
      "lng": -82.35893073193283
    },
    "permits": [
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 108,
    "name": "West Law - OR",
    "position": {
      "lat": 29.64895263815348,
      "lng": -82.35985394831731
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 109,
    "name": "West O'Connell - GR",
    "position": {
      "lat": 29.649021259281447,
      "lng": -82.35221832616327
    },
    "permits": [
      "Green"
    ],
    "hasCharging": false
  },
  {
    "id": 110,
    "name": "West O'Connell - OR",
    "position": {
      "lat": 29.650003373969007,
      "lng": -82.3518764445789
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 111,
    "name": "West Pan Parking",
    "position": {
      "lat": 29.64429730429876,
      "lng": -82.33848395509267
    },
    "permits": [
      "Red One"
    ],
    "hasCharging": false
  },
  {
    "id": 112,
    "name": "Woodlawn North - RD",
    "position": {
      "lat": 29.647730797904984,
      "lng": -82.35525804682102
    },
    "permits": [
      "Red"
    ],
    "hasCharging": false
  },
  {
    "id": 113,
    "name": "Woodlawn South - RD",
    "position": {
      "lat": 29.646664269151312,
      "lng": -82.35551232776147
    },
    "permits": [
      "Red"
    ],
    "hasCharging": false
  },
  {
    "id": 114,
    "name": "Yulee Reid - OR",
    "position": {
      "lat": 29.64714275998716,
      "lng": -82.3399978710216
    },
    "permits": [
      "Orange"
    ],
    "hasCharging": false
  },
  {
    "id": 115,
    "name": "Garage 11",
    "position": {
      "lat": 29.636289672286562,
      "lng": -82.36848933692389
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": true
  },
  {
    "id": 116,
    "name": "Fraternity Row - ADX",
    "position": {
      "lat": 29.646656804121594,
      "lng": -82.35785427922697
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 117,
    "name": "West Frat Drive Parking",
    "position": {
      "lat": 29.647682058766076,
      "lng": -82.35891637974358
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 118,
    "name": "Village Drive - ADX",
    "position": {
      "lat": 29.64752382078856,
      "lng": -82.35991020236983
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 119,
    "name": "Southwest Rec Center - ADX",
    "position": {
      "lat": 29.637819166882778,
      "lng": -82.36737219264627
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 120,
    "name": "Florida Ballpark - ADX",
    "position": {
      "lat": 29.6365629533199,
      "lng": -82.3648401244455
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 121,
    "name": "Food & Toxicology Parking",
    "position": {
      "lat": 29.637020807583937,
      "lng": -82.3595904311113
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "id": 122,
    "name": "University Gardens - ADX",
    "position": {
      "lat": 29.644845680309235,
      "lng": -82.35733916412552
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false
  },
  {
    "name": "Maguire Village Parking",
    "position": {
      "lat": 29.64083338545468,
      "lng": -82.3708722343045
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 123
  },
  {
    "name": "University Village South - BR",
    "position": {
      "lat": 29.638673389632615,
      "lng": -82.37136235022443
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 124
  },
  {
    "name": "Bledsoe Drive - AD",
    "position": {
      "lat": 29.639575481689317,
      "lng": -82.36992659888251
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 125
  },
  {
    "name": "Racing Lab",
    "position": {
      "lat": 29.64018188348437,
      "lng": -82.37388788884792
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 126
  },
  {
    "name": "Sports Medicine - SE",
    "position": {
      "lat": 29.637124779390742,
      "lng": -82.37514489212988
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 127
  },
  {
    "name": "Sports Medicine - SW",
    "position": {
      "lat": 29.63712979111304,
      "lng": -82.37628657395173
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 128
  },
  {
    "name": "Sports Medicine - NW",
    "position": {
      "lat": 29.637746231008656,
      "lng": -82.37720337904693
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 129
  },
  {
    "name": "Cultural Plaza - AD2",
    "position": {
      "lat": 29.637378920500616,
      "lng": -82.37121693725553
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 130
  },
  {
    "name": "Cultural Plaza - AD1",
    "position": {
      "lat": 29.63721608659846,
      "lng": -82.36877134587763
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 131
  },
  {
    "name": "North Lacrosse Parking",
    "position": {
      "lat": 29.63743613235019,
      "lng": -82.36605739753382
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 132
  },
  {
    "name": "Florida Ballpark - AD",
    "position": {
      "lat": 29.637154473699127,
      "lng": -82.36239660531704
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 133
  },
  {
    "name": "Entomology and Nematology - AD",
    "position": {
      "lat": 29.635284064213508,
      "lng": -82.3669941146795
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 134
  },
  {
    "name": "Mehrhof Hall",
    "position": {
      "lat": 29.63389773828888,
      "lng": -82.36107001120386
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 135
  },
  {
    "name": "Surge Area - AP",
    "position": {
      "lat": 29.63177640265801,
      "lng": -82.36784981847752
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 136
  },
  {
    "name": "Surge Area - AD",
    "position": {
      "lat": 29.631820414223903,
      "lng": -82.36683208791409
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 137
  },
  {
    "name": "Swine Unit Parking",
    "position": {
      "lat": 29.630474208176597,
      "lng": -82.36089325080788
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 138
  },
  {
    "name": "Organic Gardens Parking",
    "position": {
      "lat": 29.629277070712718,
      "lng": -82.35954640333148
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 139
  },
  {
    "name": "Solar Pond Parking",
    "position": {
      "lat": 29.62788185947433,
      "lng": -82.36060464060985
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 140
  },
  {
    "name": "Breeding & Genetics Parking",
    "position": {
      "lat": 29.633874827747842,
      "lng": -82.35570973083736
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 141
  },
  {
    "name": "Triangle - AD",
    "position": {
      "lat": 29.635297797188084,
      "lng": -82.35197651079605
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 142
  },
  {
    "name": "Vet Med West - AD",
    "position": {
      "lat": 29.634318122577394,
      "lng": -82.35160930882932
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 143
  },
  {
    "name": "Animal Nutrition - AD",
    "position": {
      "lat": 29.630716241564954,
      "lng": -82.3522404384988
    },
    "permits": [
      "Green",
      "Orange",
      "Blue",
      "Red",
      "Brown",
      "Gold",
      "Silver",
      "Red One",
      "Medical Resident",
      "Staff Commuter",
      "Visitor"
    ],
    "hasCharging": false,
    "id": 144
  }
]
export default campusParkingData;