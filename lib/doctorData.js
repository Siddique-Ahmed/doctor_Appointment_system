export const doctorSpecialties = [
  "Cardiologist",
  "Dermatologist",
  "Endocrinologist",
  "Gastroenterologist",
  "Hematologist",
  "Nephrologist",
  "Neurologist",
  "Oncologist",
  "Ophthalmologist",
  "Orthopedic Surgeon",
  "Otolaryngologist (ENT Specialist)",
  "Pediatrician",
  "Psychiatrist",
  "Pulmonologist",
  "Radiologist",
  "Rheumatologist",
  "Urologist",
  "Allergist/Immunologist",
  "Anesthesiologist",
  "Emergency Medicine Specialist",
  "Family Medicine Physician",
  "General Surgeon",
  "Geriatrician",
  "Infectious Disease Specialist",
  "Internal Medicine Physician",
  "Obstetrician/Gynecologist (OB/GYN)",
  "Pathologist",
  "Podiatrist",
  "Plastic Surgeon",
  "Sports Medicine Specialist",
];

export const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Khan",
    appointmentTime: "10:00 AM - 2:00 PM",
    fees: 1500,
    category: "Cardiologist",
    hospital: "City Heart Clinic",
    gender: "Female",
  },
  {
    id: 2,
    name: "Dr. Ahmed Raza",
    appointmentTime: "9:00 AM - 12:00 PM",
    fees: 1200,
    category: "Dermatologist",
    hospital: "Skin Care Hospital",
    gender: "Male",
  },
  {
    id: 3,
    name: "Dr. Farah Ali",
    appointmentTime: "11:00 AM - 4:00 PM",
    fees: 1800,
    category: "Endocrinologist",
    hospital: "Endo Wellness Center",
    gender: "Female",
  },
  {
    id: 4,
    name: "Dr. Imran Qureshi",
    appointmentTime: "8:00 AM - 1:00 PM",
    fees: 1400,
    category: "Gastroenterologist",
    hospital: "Digestive Health Clinic",
    gender: "Male",
  },
  {
    id: 5,
    name: "Dr. Sana Malik",
    appointmentTime: "10:00 AM - 3:00 PM",
    fees: 1600,
    category: "Neurologist",
    hospital: "Neuro Care Hospital",
    gender: "Female",
  },
  {
    id: 6,
    name: "Dr. Adil Nawaz",
    appointmentTime: "9:00 AM - 12:30 PM",
    fees: 1300,
    category: "Orthopedic Surgeon",
    hospital: "Ortho Specialist Clinic",
    gender: "Male",
  },
  {
    id: 7,
    name: "Dr. Maria Yousaf",
    appointmentTime: "12:00 PM - 5:00 PM",
    fees: 1700,
    category: "Pediatrician",
    hospital: "Children's Health Hospital",
    gender: "Female",
  },
  {
    id: 8,
    name: "Dr. Faisal Hussain",
    appointmentTime: "1:00 PM - 6:00 PM",
    fees: 2000,
    category: "Psychiatrist",
    hospital: "Mental Wellness Clinic",
    gender: "Male",
  },
  {
    id: 9,
    name: "Dr. Anam Shah",
    appointmentTime: "8:00 AM - 12:00 PM",
    fees: 1600,
    category: "Pulmonologist",
    hospital: "Lung Care Center",
    gender: "Female",
  },
  {
    id: 10,
    name: "Dr. Ali Kamal",
    appointmentTime: "3:00 PM - 7:00 PM",
    fees: 2200,
    category: "Oncologist",
    hospital: "Cancer Treatment Hospital",
    gender: "Male",
  },
];

export const currentUser = {
  name: "Siddique Ahmed",
  role: "doctor",
};


export const appointments = [
  {
    user: {
      name: "Ayesha Ahmed",
      email: "ayesha.ahmed@example.com"
    },
    appointmentTime: "10:30 AM",
    status: "Confirmed",
    appointmentDate: "2024-11-15",
    doctor: {
      name: "Dr. Sarah Khan",
      email: "sarah.khan@cityheartclinic.com"
    }
  },
  {
    user: {
      name: "Ali Raza",
      email: "ali.raza@example.com"
    },
    appointmentTime: "11:00 AM",
    status: "Pending",
    appointmentDate: "2024-11-16",
    doctor: {
      name: "Dr. Ahmed Raza",
      email: "ahmed.raza@skincarehospital.com"
    }
  },
  {
    user: {
      name: "Sana Malik",
      email: "sana.malik@example.com"
    },
    appointmentTime: "2:00 PM",
    status: "Cancelled",
    appointmentDate: "2024-11-17",
    doctor: {
      name: "Dr. Farah Ali",
      email: "farah.ali@endowellnesscenter.com"
    }
  },
  {
    user: {
      name: "Bilal Hussain",
      email: "bilal.hussain@example.com"
    },
    appointmentTime: "9:30 AM",
    status: "Confirmed",
    appointmentDate: "2024-11-18",
    doctor: {
      name: "Dr. Imran Qureshi",
      email: "imran.qureshi@digestivehealthclinic.com"
    }
  },
  {
    user: {
      name: "Maria Tariq",
      email: "maria.tariq@example.com"
    },
    appointmentTime: "1:30 PM",
    status: "Confirmed",
    appointmentDate: "2024-11-19",
    doctor: {
      name: "Dr. Sana Malik",
      email: "sana.malik@neurocarehospital.com"
    }
  },
  {
    user: {
      name: "Zainab Khan",
      email: "zainab.khan@example.com"
    },
    appointmentTime: "10:00 AM",
    status: "Pending",
    appointmentDate: "2024-11-20",
    doctor: {
      name: "Dr. Adil Nawaz",
      email: "adil.nawaz@orthospecialistclinic.com"
    }
  },
  {
    user: {
      name: "Hamza Ali",
      email: "hamza.ali@example.com"
    },
    appointmentTime: "4:00 PM",
    status: "Confirmed",
    appointmentDate: "2024-11-21",
    doctor: {
      name: "Dr. Maria Yousaf",
      email: "maria.yousaf@childrenshealthhospital.com"
    }
  },
  {
    user: {
      name: "Noor Fatima",
      email: "noor.fatima@example.com"
    },
    appointmentTime: "3:00 PM",
    status: "Cancelled",
    appointmentDate: "2024-11-22",
    doctor: {
      name: "Dr. Faisal Hussain",
      email: "faisal.hussain@mentalwellnessclinic.com"
    }
  },
  {
    user: {
      name: "Usman Sheikh",
      email: "usman.sheikh@example.com"
    },
    appointmentTime: "8:30 AM",
    status: "Confirmed",
    appointmentDate: "2024-11-23",
    doctor: {
      name: "Dr. Anam Shah",
      email: "anam.shah@lungcarecenter.com"
    }
  },
  {
    user: {
      name: "Amina Baig",
      email: "amina.baig@example.com"
    },
    appointmentTime: "5:00 PM",
    status: "Pending",
    appointmentDate: "2024-11-24",
    doctor: {
      name: "Dr. Ali Kamal",
      email: "ali.kamal@cancertreatmenthospital.com"
    }
  }
];
