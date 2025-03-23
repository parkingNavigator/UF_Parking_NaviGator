export interface ParkingData {
  id: number;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  permit: string;
  hasCharging: boolean;
  notes: string;
  permitHours: string;
}

const campusParkingData: ParkingData[] = [
  // --- Green Permit Parking (IDs 1-9) ---
  {
    id: 1,
    name: "West O'Connell - GR",
    position: { lat: 29.649021259281447, lng: -82.35221832616327 },
    permit: "Green",
    hasCharging: false,
    notes: "",
    permitHours: "7:30 AM - 4:30 PM, Mon-Fri"
  },
  {
    id: 2,
    name: "Garage 7",
    position: { lat: 29.65057915003095, lng: -82.35151385965115 },
    permit: "Green",
    hasCharging: false,
    notes: "",
    permitHours: "7:30 AM - 4:30 PM, Mon-Fri"
  },
  {
    id: 3,
    name: "Law School - GR",
    position: { lat: 29.648209441029024, lng: -82.35882557949002 },
    permit: "Green",
    hasCharging: false,
    notes: "",
    permitHours: "7:30 AM - 4:30 PM, Mon-Fri"
  },
  {
    id: 4,
    name: "Baby Gator - GR",
    position: { lat: 29.645297006202508, lng: -82.36095195448759 },
    permit: "Green",
    hasCharging: false,
    notes: "",
    permitHours: "7:30 AM - 4:30 PM, Mon-Fri"
  },
  {
    id: 5,
    name: "Flavet - GRX",
    position: { lat: 29.645851201304247, lng: -82.35275075463083 },
    permit: "Green",
    hasCharging: false,
    notes: "",
    permitHours: "7:30 AM - 4:30 PM, Mon-Fri"
  },
  {
    id: 6,
    name: "Garage 14",
    position: { lat: 29.641959672524422, lng: -82.35127046853401 },
    permit: "Green",
    hasCharging: false,
    notes: "",
    permitHours: "7:30 AM – 4:30 PM, Mon–Fri"
  },
  {
    id: 7,
    name: "Vet Med West - GR",
    position: { lat: 29.63384050244129, lng: -82.35156844886473 },
    permit: "Green",
    hasCharging: false,
    notes: "",
    permitHours: "7:30 AM - 4:30 PM, Mon-Fri"
  },
  {
    id: 8,
    name: "Animal Science - GR",
    position: { lat: 29.631056960834925, lng: -82.35109602825995 },
    permit: "Green",
    hasCharging: false,
    notes: "",
    permitHours: "7:30 AM - 4:30 PM, Mon-Fri"
  },
  {
    id: 9,
    name: "North Vet Med Green Parking",
    position: { lat: 29.633679932811532, lng: -82.34759930920671 },
    permit: "Green",
    hasCharging: false,
    notes: "",
    permitHours: "7:30 AM - 4:30 PM, Mon-Fri"
  },
  
  // --- Other Permit Types (IDs shifted by +9) ---

  // Permit type: Blue (original IDs 1–14 become 10–23)
  {
    id: 10,
    name: "Garage 13",
    position: { lat: 29.640548849195778, lng: -82.34970585784647 },
    permit: "Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 11,
    name: "Band Practice - BL",
    position: { lat: 29.639238866961172, lng: -82.35121551900728 },
    permit: "Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 12,
    name: "Archer Field - BL",
    position: { lat: 29.636673187932907, lng: -82.35408279409123 },
    permit: "Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 13,
    name: "Triangle - BL",
    position: { lat: 29.635481233333817, lng: -82.35188904878919 },
    permit: "Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 14,
    name: "Cancer Research - BL",
    position: { lat: 29.637318789849175, lng: -82.34990492785106 },
    permit: "Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 15,
    name: "Cancer Research - BL",
    position: { lat: 29.637564360594727, lng: -82.34885441454745 },
    permit: "Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 16,
    name: "Garage 9",
    position: { lat: 29.636474732487333, lng: -82.34910333648789 },
    permit: "Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 17,
    name: "Deriso - BL",
    position: { lat: 29.633014518266883, lng: -82.3513986579523 },
    permit: "Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 18,
    name: "Small Animal Hospital Parking",
    position: { lat: 29.633487345191693, lng: -82.35092165372241 },
    permit: "Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 19,
    name: "Large Animal Hospital Parking",
    position: { lat: 29.632646413990482, lng: -82.35077203488784 },
    permit: "Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 20,
    name: "Vet Med Parking",
    position: { lat: 29.63438854551427, lng: -82.3492616552152 },
    permit: "Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 21,
    name: "Vet Med Parking",
    position: { lat: 29.633397453093817, lng: -82.34831328935472 },
    permit: "Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 22,
    name: "North Vet Med Blue Parking",
    position: { lat: 29.634162215158884, lng: -82.34774865533653 },
    permit: "Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 23,
    name: "Garage 6",
    position: { lat: 29.63715631077082, lng: -82.34231385551685 },
    permit: "Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  
  // Permit type: Brown (original IDs 15–16 become 24–25)
  {
    id: 24,
    name: "Corry Village - BR1",
    position: { lat: 29.64660891136147, lng: -82.3624108499379 },
    permit: "Brown",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 25,
    name: "Corry Village - BR2",
    position: { lat: 29.646520840807792, lng: -82.36051079719954 },
    permit: "Brown",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  
  // Permit type: Brown 3 (original ID 17 becomes 26)
  {
    id: 26,
    name: "Diamond Village - BW",
    position: { lat: 29.64270282050981, lng: -82.33975401157608 },
    permit: "Brown 3",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  
  // Permit type: Brown 3 Except Official Business (original ID 18 becomes 27)
  {
    id: 27,
    name: "Brown 3 Except Official Business",
    position: { lat: 29.641939095115045, lng: -82.34121378139218 },
    permit: "Brown 3 Except Official Business",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  
  // Permit type: Gold/Silver (original IDs 19–33 become 28–42)
  {
    id: 28,
    name: "Murphree - R1",
    position: { lat: 29.651795147418543, lng: -82.3455086490142 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 29,
    name: "SW 13th Street - GS",
    position: { lat: 29.651413608473646, lng: -82.33863608807202 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 30,
    name: "Criser Hall - GS",
    position: { lat: 29.650036755148033, lng: -82.34080534873031 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 31,
    name: "Infirmary - GS",
    position: { lat: 29.64889483033847, lng: -82.34634470729878 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 32,
    name: "Tigert Hall - GS",
    position: { lat: 29.64940046869789, lng: -82.34064664250347 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 33,
    name: "Fine Arts C - GS",
    position: { lat: 29.647412619910522, lng: -82.3405290527969 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 34,
    name: "Garage 12",
    position: { lat: 29.645590754483326, lng: -82.34818267267505 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 35,
    name: "Garage 13",
    position: { lat: 29.64068102112276, lng: -82.3492440441748 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 36,
    name: "Garage I Over Sized",
    position: { lat: 29.641353832258766, lng: -82.34220080854632 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 37,
    name: "Garage 1",
    position: { lat: 29.641063382827024, lng: -82.34206277747712 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 38,
    name: "Garage 3",
    position: { lat: 29.638686152575946, lng: -82.34745862463986 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 39,
    name: "Garage 2",
    position: { lat: 29.63882576600377, lng: -82.34657093150392 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 40,
    name: "HVN Garage",
    position: { lat: 29.63951983767367, lng: -82.33975806791429 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 41,
    name: "Garage 6",
    position: { lat: 29.637210947298822, lng: -82.34260134550512 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 42,
    name: "Vet Med Parking",
    position: { lat: 29.63416744717136, lng: -82.3495243605367 },
    permit: "Gold/Silver",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  
  // Permit type: Green/Brown (original ID 34 becomes 43)
  {
    id: 43,
    name: "Corry Village - GBR",
    position: { lat: 29.64629900287874, lng: -82.3623568632503 },
    permit: "Green/Brown",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  
  // Permit type: Medical Resident (original IDs 35–36 become 44–45)
  {
    id: 44,
    name: "Garage 3",
    position: { lat: 29.638639289929547, lng: -82.3477481336588 },
    permit: "Medical Resident",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 45,
    name: "Garage 13",
    position: { lat: 29.640342505786556, lng: -82.34989618340101 },
    permit: "Medical Resident",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  
  // Permit type: Orange (original IDs 37–80 become 46–89)
  {
    id: 46,
    name: "Building 105 Parking",
    position: { lat: 29.653003630029367, lng: -82.34281598175647 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 47,
    name: "The Institutes - OR",
    position: { lat: 29.65256521921915, lng: -82.34206816814549 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 48,
    name: "University Press - OR",
    position: { lat: 29.652606481494367, lng: -82.34127880933399 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 49,
    name: "O'Connell Center NW",
    position: { lat: 29.651228508054206, lng: -82.35088500893592 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 50,
    name: "Garage 7",
    position: { lat: 29.650650622570286, lng: -82.35149313306086 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 51,
    name: "Murphree - OR",
    position: { lat: 29.65115442035831, lng: -82.34728173144654 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 52,
    name: "Fletcher Drive - OR",
    position: { lat: 29.65115935954045, lng: -82.34632691973728 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 53,
    name: "West O'Connell - OR",
    position: { lat: 29.650003373969007, lng: -82.3518764445789 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 54,
    name: "South End Zone Parking",
    position: { lat: 29.648744137586174, lng: -82.34867976109594 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 55,
    name: "West Law - OR",
    position: { lat: 29.64895263815348, lng: -82.35985394831731 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 56,
    name: "East Law - OR",
    position: { lat: 29.648928742945436, lng: -82.35839613274158 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 57,
    name: "East Hall - OR",
    position: { lat: 29.646796185005503, lng: -82.3501244368684 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 58,
    name: "Rhines Hall - OR",
    position: { lat: 29.647890470568807, lng: -82.34903055487567 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 59,
    name: "McCarty - OR",
    position: { lat: 29.646066648345187, lng: -82.3441019848086 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 60,
    name: "Garage 4",
    position: { lat: 29.645238227207646, lng: -82.34284795004052 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 61,
    name: "Yulee Reid - OR",
    position: { lat: 29.64714275998716, lng: -82.3399978710216 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 62,
    name: "Cypress - OR",
    position: { lat: 29.645692345953186, lng: -82.33958935969898 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 63,
    name: "North Norman Parking",
    position: { lat: 29.647283121527092, lng: -82.337445466929 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 64,
    name: "Garage 8",
    position: { lat: 29.645452901783173, lng: -82.33753096930464 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 65,
    name: "Garage 14",
    position: { lat: 29.642032789263457, lng: -82.35126538148084 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 66,
    name: "Frazier Rogers - OR",
    position: { lat: 29.644682670598534, lng: -82.34650478470354 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 67,
    name: "Housing - OR",
    position: { lat: 29.64385251477993, lng: -82.34007071974887 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 68,
    name: "Engineering Design - OR",
    position: { lat: 29.642144516626526, lng: -82.34836632733918 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 69,
    name: "Black Hall - OR",
    position: { lat: 29.641659694235354, lng: -82.34753341393765 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 70,
    name: "Garage 13",
    position: { lat: 29.640550571183095, lng: -82.34971885644005 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 71,
    name: "Facilities Services - OR1",
    position: { lat: 29.6440203950278, lng: -82.37085876298643 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 72,
    name: "Facilities Services - OR2",
    position: { lat: 29.64240510413526, lng: -82.3707742842791 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 73,
    name: "Motor Pool Parking",
    position: { lat: 29.642799268413434, lng: -82.36745293721778 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 74,
    name: "Elmore Hall",
    position: { lat: 29.642841776234093, lng: -82.3661724178644 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 75,
    name: "Mail and Document Services Parking",
    position: { lat: 29.642521034962193, lng: -82.36696829621448 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 76,
    name: "Bat House Parking",
    position: { lat: 29.64342326139492, lng: -82.36405168301552 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 77,
    name: "Microcell Parking",
    position: { lat: 29.640352220199755, lng: -82.36371590755186 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 78,
    name: "Microcell Parking",
    position: { lat: 29.639938216330336, lng: -82.36246651039589 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 79,
    name: "Fifield",
    position: { lat: 29.63856648258189, lng: -82.36027771860871 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 80,
    name: "IFAS Bookstore",
    position: { lat: 29.639731666, lng: -82.35633394777953 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 81,
    name: "IFAS Communication",
    position: { lat: 29.63861280820996, lng: -82.35834045365162 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 82,
    name: "IFAS",
    position: { lat: 29.63881664962319, lng: -82.3571938788706 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 83,
    name: "Cancer Genetics - OR2",
    position: { lat: 29.637408185819858, lng: -82.3537685221057 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 84,
    name: "Cancer Genetics - ORB1",
    position: { lat: 29.63697180072695, lng: -82.35376625030214 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 85,
    name: "Cancer Genetics - OR1",
    position: { lat: 29.6371198954269, lng: -82.35325282260952 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 86,
    name: "PCPA - OR",
    position: { lat: 29.63494347660199, lng: -82.36912197791081 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 87,
    name: "Entomology and Nematology - OR",
    position: { lat: 29.635370300395806, lng: -82.36594646744905 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 88,
    name: "Straughn Center - OR",
    position: { lat: 29.632461103143708, lng: -82.35149061552575 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 89,
    name: "Animal Science - OR",
    position: { lat: 29.63107821995999, lng: -82.35110408295655 },
    permit: "Orange",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  
  // Permit type: Orange/Blue (original IDs 81–84 become 90–93)
  {
    id: 90,
    name: "Orthopedics Parking",
    position: { lat: 29.638242558270253, lng: -82.3751221259028 },
    permit: "Orange/Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 91,
    name: "Orthopedics - ORB2",
    position: { lat: 29.637992722126402, lng: -82.376466346965 },
    permit: "Orange/Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 92,
    name: "Garage 14",
    position: { lat: 29.642031626163615, lng: -82.35124892277362 },
    permit: "Orange/Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 93,
    name: "Cancer Genetics - ORB2",
    position: { lat: 29.63753660677245, lng: -82.35302854351991 },
    permit: "Orange/Blue",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  
  // Permit type: Orange/Green (original ID 85 becomes 94)
  {
    id: 94,
    name: "Norman Field Lot Parking",
    position: { lat: 29.645426856423907, lng: -82.33805221729737 },
    permit: "Orange/Green",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  
  // Permit type: Red (original IDs 86–97 become 95–106)
  {
    id: 95,
    name: "Fraternity Row - RD",
    position: { lat: 29.64730162553168, lng: -82.3576608174254 },
    permit: "Red",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 96,
    name: "Woodlawn North - RD",
    position: { lat: 29.647730797904984, lng: -82.35525804682102 },
    permit: "Red",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 97,
    name: "Woodlawn South - RD",
    position: { lat: 29.646664269151312, lng: -82.35551232776147 },
    permit: "Red",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 98,
    name: "Graham - RD",
    position: { lat: 29.64535111010775, lng: -82.3535480996478 },
    permit: "Red",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 99,
    name: "Hume West Parking",
    position: { lat: 29.644300570539826, lng: -82.35519908313749 },
    permit: "Red",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 100,
    name: "Garage 5",
    position: { lat: 29.64321158503664, lng: -82.35119692229107 },
    permit: "Red",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 101,
    name: "Gale Lem Surface Lot",
    position: { lat: 29.641414668082923, lng: -82.351076734738 },
    permit: "Red",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 102,
    name: "Garage 8",
    position: { lat: 29.64556479904101, lng: -82.33753683971541 },
    permit: "Red",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 103,
    name: "Sorority Pond Parking",
    position: { lat: 29.643626404123342, lng: -82.33541238818174 },
    permit: "Red",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 104,
    name: "Maguire Village - RD",
    position: { lat: 29.641037339842107, lng: -82.36960070705653 },
    permit: "Red",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 105,
    name: "Lakeside Complex - RD2",
    position: { lat: 29.641681046795775, lng: -82.36723431423204 },
    permit: "Red",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 106,
    name: "Lakeside Complex - RD2",
    position: { lat: 29.642063082311157, lng: -82.36628896137165 },
    permit: "Red",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  
  // Permit type: Red One (original IDs 98–112 become 107–121)
  {
    id: 107,
    name: "Murphree - Red 1 West",
    position: { lat: 29.651189786705093, lng: -82.34722610798259 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 108,
    name: "House 21 - R1",
    position: { lat: 29.647553411849774, lng: -82.35942417945682 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 109,
    name: "House 21 Parking",
    position: { lat: 29.647417486294348, lng: -82.35864217586307 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 110,
    name: "Springs Complex - R1",
    position: { lat: 29.648557941916646, lng: -82.35748667601355 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 111,
    name: "Springs Complex - R1",
    position: { lat: 29.648622185647742, lng: -82.35664478765239 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 112,
    name: "Keys Complex - R1_2",
    position: { lat: 29.64807379256489, lng: -82.35495429182363 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 113,
    name: "Keys Complex - R1_1",
    position: { lat: 29.64814160571714, lng: -82.35413293732493 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 114,
    name: "Keys Complex - R1_3",
    position: { lat: 29.647420642496513, lng: -82.35429310145217 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 115,
    name: "Graham - R1",
    position: { lat: 29.64509353782691, lng: -82.3529542936346 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 116,
    name: "Hume - R1",
    position: { lat: 29.644111997460502, lng: -82.35102411059111 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 117,
    name: "Jennings - R1",
    position: { lat: 29.643375209640283, lng: -82.34280413587128 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 118,
    name: "Beaty Towers - R1",
    position: { lat: 29.643686068247128, lng: -82.34069829890966 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 119,
    name: "Garage 8",
    position: { lat: 29.64542895436388, lng: -82.33752346838284 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 120,
    name: "West Pan Parking",
    position: { lat: 29.64429730429876, lng: -82.33848395509267 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 121,
    name: "East Pan Parking",
    position: { lat: 29.64412965135493, lng: -82.33657503801138 },
    permit: "Red One",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  
  // Permit type: Green/Staff Commuter (original IDs 113–119 become 122–128)
  {
    id: 122,
    name: "Facilities Services - GR",
    position: { lat: 29.643081774578373, lng: -82.37076342027343 },
    permit: "Green/Staff Commuter",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 123,
    name: "Elmore Hall",
    position: { lat: 29.64285925523231, lng: -82.36629177465434 },
    permit: "Green/Staff Commuter",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 124,
    name: "Memorial - GR",
    position: { lat: 29.639882052478416, lng: -82.3616303159143 },
    permit: "Green/Staff Commuter",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 125,
    name: "Fifield",
    position: { lat: 29.638435621959484, lng: -82.36196579969567 },
    permit: "Green/Staff Commuter",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 126,
    name: "IFAS Communication",
    position: { lat: 29.63866966118388, lng: -82.35799296552582 },
    permit: "Green/Staff Commuter",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 127,
    name: "Forestry - GR",
    position: { lat: 29.637863950047063, lng: -82.3560021341699 },
    permit: "Green/Staff Commuter",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 128,
    name: "Ritchey Road - GR",
    position: { lat: 29.630443760369033, lng: -82.3542156744049 },
    permit: "Green/Staff Commuter",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  
  // Permit type: Visitor (original IDs 120–132 become 129–141)
  {
    id: 129,
    name: "Garage 12",
    position: { lat: 29.64546458480278, lng: -82.34830321676988 },
    permit: "Visitor",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 130,
    name: "Garage 5",
    position: { lat: 29.6432928688378, lng: -82.35117195661357 },
    permit: "Visitor",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 131,
    name: "Bio Medical Circle",
    position: { lat: 29.640993966105032, lng: -82.34589728331245 },
    permit: "Visitor",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 132,
    name: "Garage 3",
    position: { lat: 29.638640788708763, lng: -82.34786570440235 },
    permit: "Visitor",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 133,
    name: "Garage 2",
    position: { lat: 29.638862902189825, lng: -82.34670537196831 },
    permit: "Visitor",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 134,
    name: "Garage 10",
    position: { lat: 29.640627786492242, lng: -82.34176705239075 },
    permit: "Visitor",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 135,
    name: "HVN Garage",
    position: { lat: 29.639289118547516, lng: -82.33966740326507 },
    permit: "Visitor",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 136,
    name: "Vet Med Parking",
    position: { lat: 29.634474569274808, lng: -82.35009658162384 },
    permit: "Visitor",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 137,
    name: "Orthopedics Parking",
    position: { lat: 29.6381929130535, lng: -82.37516470010499 },
    permit: "Visitor",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 138,
    name: "Cultural Plaza",
    position: { lat: 29.637192684299624, lng: -82.36967993282154 },
    permit: "Visitor",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 139,
    name: "Baughman Center",
    position: { lat: 29.641635889768967, lng: -82.36381956921063 },
    permit: "Visitor",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 140,
    name: "Fifield - VS",
    position: { lat: 29.637815728650803, lng: -82.36109060159045 },
    permit: "Visitor",
    hasCharging: false,
    notes: "",
    permitHours: ""
  },
  {
    id: 141,
    name: "Wallace Parking",
    position: { lat: 29.63830769090516, lng: -82.35893073193283 },
    permit: "Visitor",
    hasCharging: false,
    notes: "",
    permitHours: ""
  }
];
  
  export default campusParkingData;