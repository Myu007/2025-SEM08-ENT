const questions = [
  {
    question: "The part of pinna devoid of cartilage is",
    answers: [
      { text: "lncisura terminalis", correct: true },
      { text: "Cymba concha", correct: false },
      { text: "Antitragus", correct: false },
      { text: "Scaphoidfossa", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following structures are in adult size at the time of birth? 1) Mastoid antrum 2) Ossides 3) Tympanic cavity 4) Orbital cavity",
    answers: [
      { text: "Only 1,2,3 is correct", correct: true },
      { text: "All are correct", correct: false },
      { text: "Only 2,3,4 is correct", correct: false },
      { text: "Only 2 is correct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In auditory pathway, Cross over phenomenon takes place at which level?",
    answers: [
      { text: "Superior olivary nucleus", correct: true },
      { text: "Cochlear nucleus", correct: false },
      { text: "Lateralleminiscus", correct: false },
      { text: "Inferior colliculus", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Rose's position is adopted in all of the following except",
    answers: [
      { text: "Direct laryngoscopy", correct: true },
      { text: "Adenoidectomy", correct: false },
      { text: "Tonsi llectomy", correct: false },
      { text: "Tracheostomy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statements is incorrect about the Frontal sinus?  1. It is located in the paired Frontal bone  2. It is an unpaired sinus  3. It presents at birth  4. Pneumatization occurs at birth.",
    answers: [
      { text: "All are incorrect", correct: true },
      { text: "Only 1 & 2", correct: false },
      { text: "Only 1, 2, 3", correct: false },
      { text: "Only4", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient with thickening of air in the right external auditory canal (by pressing the tragus) developed dizziness, nystagmus to the right, the body deviated to the left. How can you explain the result obtained?",
    answers: [
      { text: "Fistula test", correct: true },
      { text: "Tympanometry", correct: false },
      { text: "Bing test", correct: false },
      { text: "Politzer test", correct: false },
      { text: "Gelle's test", correct: false },
    ],
  },
  {
    question: "What is the treatment for Benign Positional vertigo?",
    answers: [
      { text: "Vestibular exercises ", correct: true },
      { text: "Vestibular sedatives ", correct: false },
      { text: "Anthistamines", correct: false },
      { text: "Antibiotics", correct: false },
      { text: "Diuretics", correct: false },
    ],
  },
  {
    question: "Which of the following is not a premalignant lesion or condition ?",
    answers: [
      { text: "Chronic hypertrophic candidiasis", correct: true },
      { text: "Oral submucosal fibrosis", correct: false },
      { text: "Lichen planus", correct: false },
      { text: "Leukoplakia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statements is correct regarding different parts of the pharynx?  1) Oropharynx extent from hard pa late to the hyoid bone  2) Nasopharynx corresponds to C1 vertebrae  3) Oropharynx is lined by stratified squamous epithelium  4) Epiglottis is the part of the Hypopharynx",
    answers: [
      { text: " Only 1,2,3 is correct", correct: true },
      { text: "All are correct", correct: false },
      { text: "Only 1,2 is correct", correct: false },
      { text: "Only2,3.4 is correct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "An elderly male came to your clin ic with a complaint of otalgia. On examination, you found that there is no clear ear pathology for the pain. So, you are thinking about referred otalgia. Which of the following will be the differential diagnosis of this scenario?",
    answers: [
      { text: "All of the above", correct: true },
      { text: "Carcinoma oral cavity", correct: false },
      { text: "Styalgia", correct: false },
      { text: "Carcinoma larynx", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: " 68 years old male with uncontrolled diabetes mellitus came to the hospital with a complaint of otalgia and greenish-black discharge. On otoscopic examination, the patient presents with multiple granulations in the external auditory canal. The culture of the discharge turns out to be Pseudomonas aeruginosa. Which of the following is the Best prognostic test for follow-up of this patient?",
    answers: [
      { text: "Gallium (Ga -67) Scan", correct: true },
      { text: "Technetium 99m Scan", correct: false },
      { text: "MRI temporal bone", correct: false },
      { text: " CECT Temporal bone", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following st.atements is Correct regarding functions of nose?  1. Humidifies inspired air  2. Kills unwanted microorganisms in inspired air  3. Adds resonance to voice  4. Promotes dryness of pharynx by air currents",
    answers: [
      { text: "1, 2, 3 is correct", correct: true },
      { text: "Only 1, 2, 3.4 is correct", correct: false },
      { text: "Only 1 & 2 is correct", correct: false },
      { text: "All are incorrect", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Radiotherapy is indicated in angiofibroma when it spreads to",
    answers: [
      { text: "Middle cranial fossa", correct: true },
      { text: "Pterygopalatine fossa", correct: false },
      { text: "Orbit", correct: false },
      { text: "lnfratemporal Fossa", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient 19 year old has complaints of discomfort, itching in the left ear. The patient woke up, because these sensations appeared at night. Objective: AD - a cockroach-like foreign body in the external auditory canal. What is your actions?",
    answers: [
      { text: "Flushing of a foreign body ", correct: true },
      { text: "Remove with a hook probe", correct: false },
      { text: "Remove with a sliced ​​probe ", correct: false },
      { text: "Washing with an attic probe", correct: false },
      { text: "Removal through a behind the ear incision", correct: false },
    ],
  },
  {
    question: "40 years old male came to the hospital with complaints of pa llor, headache and fever not reaching the normal baseline. On examination, (+) edema over the mastoid surface. Which of the following is the most probable diagnosis?",
    answers: [
      { text: "Lateral sinus thrombosis", correct: true },
      { text: "Brain abscess", correct: false },
      { text: "Cavernous sinus thrombosis", correct: false },
      { text: "Petrositis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In a patient with acute purulent otitis media, otoscopy revealed a narrowing of the bony part of the external auditory canal due to the overhanging of its posterior-superior wall. Which examination does indicate clouding of air cells? ",
    answers: [
      { text: "X-ray of the temporal bones", correct: true },
      { text: "Tuning fork ", correct: false },
      { text: "Tympanogramm", correct: false },
      { text: "Audiogramm", correct: false },
      { text: "Politzer test", correct: false },
    ],
  },
  {
    question: "A 30 years old male is having Attic cholesteatoma of left ear with lateral sinus thrombophlebitis. Which of the following will be the operation of choice?",
    answers: [
      { text: "Mastoidectomy with cavity obliteration", correct: true },
      { text: "Simple mastoidectomy with Tympanoplasty", correct: false },
      { text: "Canal wall down mastoidectomy", correct: false },
      { text: "Intact canal wall mastoidectomy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Schwartz operation is also called as:",
    answers: [
      { text: "Cortical mastoidectomy", correct: true },
      { text: "Modified radical mastoidectomy", correct: false },
      { text: "Radial mastoidectomy", correct: false },
      { text: "Fenestration operation", correct: false },
      { text: "Antromastoidotomy", correct: false },
    ],
  },
  {
    question: "Cortical mastoidectomy in indicated in:",
    answers: [
      { text: "Coalescent mastoiditis", correct: true },
      { text: "Cholesteatoma without complication", correct: false },
      { text: "Chronic Suppurative Otitis Media with brain abscess", correct: false },
      { text: "Perforation in Pars flaccida", correct: false },
      { text: "Tympanosclerosis", correct: false },
    ],
  },
  {
    question: "35 years old male came to the ENT OPD with complaints of scanty, foul smelling blood stained discharge associated with hearing loss and fever does not reaching the normal baseline. which of the following is the most probable diagnosis?",
    answers: [
      { text: "Sigmoid Sinus Thrombosis", correct: true },
      { text: "Meningitis", correct: false },
      { text: "Brain Abscess", correct: false },
      { text: "Extradural Abscess", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Commonest intracranial complication of chronic suppurative otitis media is:",
    answers: [
      { text: " Brain absess", correct: true },
      { text: "Mastoiditis ", correct: false },
      { text: "Sub periosteal abscess", correct: false },
      { text: "Meningitis", correct: false },
      { text: "Petrositis", correct: false },
    ],
  },
  {
    question: "Choose the reliable method to investigate cholesteatoma in the middle ear?",
    answers: [
      { text: "CT of the bones of temporal region", correct: true },
      { text: "MRI of the brain", correct: false },
      { text: "Radiography of mastoid", correct: false },
      { text: "Otoscopy", correct: false },
      { text: "Tuning fork", correct: false },
    ],
  },
  {
    question: "A 5-day-old female infant was born with a laryngeal defect. The greater cornuae and the inferior part of the hyoid bone were absent at birth. Failure of development of which of the following embryonic structures has most likely led to these defects? ",
    answers: [
      { text: " Third pharyngeal arch", correct: true },
      { text: "Second pharyngeal arch", correct: false },
      { text: "First Pharyngeal Arch", correct: false },
      { text: "nan", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A child was treated for H. Influenza meningitis for 6 month. Most important investigation to be done before discharging the patient is:",
    answers: [
      { text: "Brainstem evoked auditory responses ", correct: true },
      { text: "Growth screening test ", correct: false },
      { text: "Psychotherapy", correct: false },
      { text: "MRI ", correct: false },
      { text: "X-ray", correct: false },
    ],
  },
  {
    question: "A patient of CSOM has choleastatoma and presents vertigo with. Treatment of choice would be:",
    answers: [
      { text: " Immediate mastoid exploration", correct: true },
      { text: "Antibiotics and labyrinthine sedative", correct: false },
      { text: "Labyrinthectomy", correct: false },
      { text: "Myringoplasty ", correct: false },
      { text: "Paracentesis of TM", correct: false },
    ],
  },
  {
    question: "The patient undergoes outpatient treatment for 12 days for acute purulent otitis media, her condition gradually improved, discharge from the ear became less, but in the last two days there was pain in the ear region, headache. On examination: the general condition is satisfactory, the body temperature is 37 ° C, there are no meningeal symptoms, the external auditory canal is narrowed in the bone region due to the overhanging of the posterior-superior wall, the discharge is scanty, mucopurulent, the eardrum is infiltrated, there is a slit-like perforation in the anterior-lower quadrant with pulsation of pus, swelling of the mastoid region, pain on palpation and percussion is determined. What is the diagnosis?",
    answers: [
      { text: "Reccurrent otitis media", correct: true },
      { text: "ASOM, Mastoiditis", correct: false },
      { text: "Serous otitis media", correct: false },
      { text: "CSOM", correct: false },
      { text: "Adhesive otitis media", correct: false },
    ],
  },
  {
    question: "70 years old Chinese male came to your clinic with a complaint of cervical lymphadenopathy. On further examination, You revealed that the patient presents with unilateral serous otitis media associated with ipsilateral trigeminal neuralgia and ipsilateral pa latal palsy. Which of the following is the best prognosis of survival in this case? ",
    answers: [
      { text: "WHO type III histology", correct: true },
      { text: "High angiogenesis in the tumor", correct: false },
      { text: "Lung metastases", correct: false },
      { text: "WHO type I histology", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The blacksmith, during his lunch break, lay down to rest on the packing table. His comrade, jokingly, struck the metal lid of the table with a hammer. The patient suddenly felt a sharp decrease in hearing and tinnitus. Alleged diagnosis?",
    answers: [
      { text: "  Acute Neurosensory Hearing Loss", correct: true },
      { text: "Chronic Neurosensory Hearing Loss ", correct: false },
      { text: "Mixed Hearing Loss", correct: false },
      { text: "Otosclerosis", correct: false },
      { text: "Labyrinthitis", correct: false },
    ],
  },
  {
    question: "A 31 year old female patient complaints of bilateral impairment of hearing for the past 5 years. On examination, tympanic membrane is normal and audiogram shows a bilateral conductive deafness. Impedance audiometry show hypomobile tympanogram. All constitute part of treatment, except",
    answers: [
      { text: "Gentamicin", correct: true },
      { text: "Stapedectomy", correct: false },
      { text: "Sodium Fluoride", correct: false },
      { text: "Hearing aid", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 45 years old female with family history of hearing loss from her mother’s side developed hearing problem during pregnancy. Impaired hearing is bilateral, slowly progressive, with bilateral tinnitus. Pure tone audiometry shows apparent bone conduction hearing loss at 2000 Hz. What is the most likely diagnosis?",
    answers: [
      { text: "Otosclerosis", correct: true },
      { text: "Meniere’s Disease", correct: false },
      { text: "Otitis media with effusion", correct: false },
      { text: "Sigmoid sinus thrombosis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the most effective treatment for otosclerosis?",
    answers: [
      { text: "surgical  ", correct: true },
      { text: " radiotherapy", correct: false },
      { text: "dehydration", correct: false },
      { text: "detoxification", correct: false },
      { text: "antibacterial", correct: false },
    ],
  },
  {
    question: "Which of the following is not a typical feature of Meniere’s disease?",
    answers: [
      { text: "Pulsatile tinnitus", correct: true },
      { text: "Vertigo", correct: false },
      { text: "Sensorineural deafness", correct: false },
      { text: "Fluctuating deafness", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In a classical case of Meniere’s disease which one of the following statement is true ",
    answers: [
      { text: "Low frequency sensory neural deafness is often seen in pure tone audiogram", correct: true },
      { text: "Schwartz’s sign is usually present in the tympanic membrane", correct: false },
      { text: "Carhart’s Notch is a characteristic feature in puretone audiogram", correct: false },
      { text: "Decompression fallopian canal is the treatment of choice", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The patient complains of attacks of dizziness, accompanied by hearing loss and falling. Ill for about 2 years. Hearing is restored almost completely after an attack.  External changes of ENT organs were not revealed during examination. Supposed diagnosis of Meniere's disease. What additional research methods are needed?",
    answers: [
      { text: "Audiometry and tympanometry", correct: true },
      { text: "X-ray of the temporal bone", correct: false },
      { text: "CT of the temporal bone", correct: false },
      { text: "Tuning fork test", correct: false },
      { text: "Fistula test", correct: false },
    ],
  },
  {
    question: "The junction of the lower end of the inter nasal suture with the lower cartilaginous part of the nose in midline is known as ",
    answers: [
      { text: "Rhinion", correct: true },
      { text: "Columella", correct: false },
      { text: "Nasion", correct: false },
      { text: "Glabella", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 33-year-old male presents with a depression in the bridge of his nose and difficulty nasal breathing. He had nose injury during a sports activity five years ago, which required surgical treatment. On examination, there is a loss of support in the nasal bridge and a deviation of the nasal septum. What is the treatment?",
    answers: [
      { text: "By augmentation rhinoplasty", correct: true },
      { text: "by reduction rhinoplasty", correct: false },
      { text: "by septorhinoplasty", correct: false },
      { text: "by submucosal resection of nasal seprum", correct: false },
      { text: "By turbinectomy", correct: false },
    ],
  },
  {
    question: "Pick the false statement regarding olfactory pathway ",
    answers: [
      { text: "Mitral cells are tertiary order neurons", correct: true },
      { text: "Axones of olfactory nerves are unmyelinated C fibres", correct: false },
      { text: "Smallest and slowest fibres in nervous system", correct: false },
      { text: "Only neurons in adult human that replace themselves", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 7 year old child while playing fell down. He has developed nasal blockage on both sides and there is swelling around the nose. What is the further treatment of this child?",
    answers: [
      { text: "Aspiration of septal swelling", correct: true },
      { text: "Anterior Nasal packing", correct: false },
      { text: "Start Intravenous steroids", correct: false },
      { text: "Start Topical Corticosteroid nasal spray", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which artery does not contribute to little's area ?",
    answers: [
      { text: "Posterior ethmoidal artery", correct: true },
      { text: "Septal Branch of facial artery", correct: false },
      { text: "Anterior ethmoidal artery", correct: false },
      { text: "Sphenopalatine artery", correct: false },
      { text: "Greater palatine artery", correct: false },
    ],
  },
  {
    question: "You are treating a Epistaxis case in Emergency department. After series of treatment, you found that the bleeding is from Woodruff's plexus. Which of the following describes the location of Woodruffs plexus? ",
    answers: [
      { text: "Posteroinferior part of nose", correct: true },
      { text: "Anteroinferior part of nose", correct: false },
      { text: "Anterior Ethmoidal artery", correct: false },
      { text: "Posterosuperior part of nose", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "12 years old boy came to the ENT department with a complaint of recurrent epistaxis. On further examination the patient is diagnosed as a case of hereditary hemorrhagic telangiectasia. Which of the following is the treatment of choice in recurrent epistaxis in this patient?",
    answers: [
      { text: "Septal dermoplasty", correct: true },
      { text: "Anterior ethmoidal artery ligation", correct: false },
      { text: "External carotid artery ligation", correct: false },
      { text: "Internal carotid artery ligation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Trotter's triad is seen in carcinoma of:",
    answers: [
      { text: "Nasopharynx ", correct: true },
      { text: "larynx ", correct: false },
      { text: "maxilla ", correct: false },
      { text: "Ethmoid sinus ", correct: false },
      { text: "oropharynx", correct: false },
    ],
  },
  {
    question: "cottle test is used in which of the following",
    answers: [
      { text: "atrophic rhinitis", correct: true },
      { text: "rhinosporodiosis", correct: false },
      { text: "deviated nasal septum", correct: false },
      { text: "hypertrohy of inferior turbinate", correct: false },
      { text: "vasomotor rhinitis", correct: false },
    ],
  },
  {
    question: "rhinitis medicamenstosa is due to ",
    answers: [
      { text: "nasal decongestant ", correct: true },
      { text: "steroids ", correct: false },
      { text: "antihistaminics", correct: false },
      { text: "surgery ", correct: false },
      { text: "NSAIDS", correct: false },
    ],
  },
  {
    question: "65 years old male with a previous history of myocardial infarction who is on maintenance medications developed nasal polyp. The patient also gives a history of allergic reactions to gardening. which of the following triad is mentioned here?",
    answers: [
      { text: "Samter's triad", correct: true },
      { text: "Trotter's triad", correct: false },
      { text: "Sinus of Morgagni syndrome", correct: false },
      { text: "Melkerson Rosenthal syndrome", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Correct statement regarding Eddies generation of air flow in nasal cavity  1. Inspiration & around middle meatus  2. Expiration & around middle meatus  3. Inspiration & around middle turbinate  4. Expiration & around middle turbinate",
    answers: [
      { text: " Only 4 is correct", correct: true },
      { text: "Only 2 & 3 is correct", correct: false },
      { text: "Only 1 & 4 is correct", correct: false },
      { text: "Only 2 is correct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Most common head and neck symptom of wegener’s granulomatosis",
    answers: [
      { text: "Recurrent and chronic sinusitis", correct: true },
      { text: "Subglottic stenosis", correct: false },
      { text: "Serous chronic otitis media", correct: false },
      { text: "Ulcerative lesions", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "You are examining a patient in ENT OPD. Patient gives the typical history of office headache and on examination, area of localized tenderness noted over the eyebrow. which of the following is the best view for evaluating for the above condition?  ",
    answers: [
      { text: "Caldwell view", correct: true },
      { text: "Schuller's view", correct: false },
      { text: "Towne's view", correct: false },
      { text: "Water's with open mouth", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A young male presents with clear watery fluid coming from the nose following RTA. Patient is otherwise stable. Management of choice is:",
    answers: [
      { text: "Conservative", correct: true },
      { text: "Immediate surgical repair", correct: false },
      { text: "Nasal packing", correct: false },
      { text: "None of the above", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: ". A carpenter came to the ENT OPD with complaints of swelling in the left cheek and frequent epistaxis. On examination, loss of sensation of the left cheek noted with nasal mass. Which of the following describes the prognosis of the mass in relation to the location?  ",
    answers: [
      { text: "Medial canthus to angle of mandible", correct: true },
      { text: "Lateral canthus to angle of mandible", correct: false },
      { text: "Medial canthus to mastoid process", correct: false },
      { text: "Lateral canthus to mastoid process", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Management of persistent cases of CSF rhinorrhea is:",
    answers: [
      { text: "endoscopic repair ", correct: true },
      { text: "straining activities ", correct: false },
      { text: "Head low position on bed", correct: false },
      { text: "All of the above ", correct: false },
      { text: "cold compression", correct: false },
    ],
  },
  {
    question: "A 24-year-old patient attending an ENT doctor. Complains of fever up to 37.8, severe headaches, severe pain in the ear, behind the ear, swelling over the mastoid, pulsating purulent discharge from the ear. The patient has an anamnesis of chronic suppurative otitis media. Which of the following otogenic complications is the most likely diagnosis?",
    answers: [
      { text: "Mastoiditis", correct: true },
      { text: "Meningaitis", correct: false },
      { text: "Labirintitis", correct: false },
      { text: "Facial paralysis", correct: false },
      { text: "Extradural abscess", correct: false },
    ],
  },
  {
    question: "The pathognomic test for CSF in suspected CSF rhinorrhea is:",
    answers: [
      { text: " Beta-2 transferrin", correct: true },
      { text: "handkerchief test ", correct: false },
      { text: "halo sign ", correct: false },
      { text: "glucose concentration", correct: false },
      { text: "aptt test", correct: false },
    ],
  },
  {
    question: "1 day old child presented with weak cry at birth, aphonia and inspiratory stridor. Incomplete recanalization was considered.Most common site of defect would be at ",
    answers: [
      { text: " Glottic", correct: true },
      { text: "Supraglottic", correct: false },
      { text: "Subglottic", correct: false },
      { text: "Hypopharynx", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "a patient present in emergency with throat pain due to accidental swallowing of fish bone. Surgeon removing the foreign body, but while removing the foreign body, the sergeon injured the internal laryngeal nerve. Where was the foreign body stuck?",
    answers: [
      { text: "pyriform sinus", correct: true },
      { text: "tonsillar area", correct: false },
      { text: "esophagus", correct: false },
      { text: "base of the tongue", correct: false },
      { text: "post cricoid region", correct: false },
    ],
  },
  {
    question: "Not a Risk Factor of tonsilitis:",
    answers: [
      { text: "Exersise", correct: true },
      { text: "Exposure to passive smoke ", correct: false },
      { text: "Allergies ", correct: false },
      { text: "Poor oral Hygine", correct: false },
      { text: "alcohol", correct: false },
    ],
  },
  {
    question: "how is the base of tongue examined?",
    answers: [
      { text: "A&B", correct: true },
      { text: "laryngeal mirror", correct: false },
      { text: "anterior rhinoscopy", correct: false },
      { text: "indirect laryngoscopy", correct: false },
      { text: "none", correct: false },
    ],
  },
  {
    question: "Which of the following causes memb1rane formation over tonsils?  1) Infectious mononucleosis  2) Vincent's Angina  3) Diphtheria  4) Granulocytosis",
    answers: [
      { text: "Only 1,2,3 is correct", correct: true },
      { text: "Only 2,3,4 is correct", correct: false },
      { text: "Only 1,2,4 is correct", correct: false },
      { text: "Only 1,3 is correct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Involvement of the poststytoid compartment of the parapharyngeal space will not give rise to",
    answers: [
      { text: "Trismus", correct: true },
      { text: "Vocal cord palsy", correct: false },
      { text: "Parotid swelling", correct: false },
      { text: "Homer's syndrome", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Child has whitish membrane that bleeds on scrapping. Identify diagnosis?",
    answers: [
      { text: "Diptheria", correct: true },
      { text: "ludwig angina", correct: false },
      { text: "Infectious mononucleosis", correct: false },
      { text: "membrane tonsilitis", correct: false },
      { text: "chronic tonsilitis", correct: false },
    ],
  },
  {
    question: "Superficial tonsillitis is characterized by",
    answers: [
      { text: "hyperaemia of the arches and palatine tonsils        ", correct: true },
      { text: "red and enlarged of palatine tonsils", correct: false },
      { text: "purulent material at the openings of crypts            ", correct: false },
      { text: "Yelowish spots of all palatine tonsils", correct: false },
      { text: "formation of membrain on the surface of tonsil", correct: false },
    ],
  },
  {
    question: "Membranous tonsillitis is characterized by",
    answers: [
      { text: " formation of membrain on the surface of tonsil       ", correct: true },
      { text: "red and enlarged of palatine tonsils", correct: false },
      { text: "purulent material at the openings of crypts            ", correct: false },
      { text: "Yelowish spots of all palatine tonsils", correct: false },
      { text: "hyperaemia of the arches and palatine tonsils", correct: false },
    ],
  },
  {
    question: "Which of the following complications is commonly associated with nasopharyngeal fibroma?",
    answers: [
      { text: "Cerebrospinal fluid leak", correct: true },
      { text: "Vocal cord paralysis", correct: false },
      { text: "Recurrence", correct: false },
      { text: "Optic nerve damage", correct: false },
      { text: "Nasal perforation ", correct: false },
    ],
  },
  {
    question: "A patient post tonsillectomy came to OPD with bleeding after 7 days. What can be the cause of this hemorrhage?",
    answers: [
      { text: "Secondary infection", correct: true },
      { text: "Application of vasoconstrictor", correct: false },
      { text: "Slippage of ligature", correct: false },
      { text: "Removal of clot", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A young child has recurrent tonsillitis & he is advised to review for surgery on a specific date. He is due to have a routine polio booster which is also planned to be taken. What should surgeon do?",
    answers: [
      { text: "Delay surgery for 6 weeks after polio vaccination", correct: true },
      { text: "No delay of surgery", correct: false },
      { text: "Delay surgery for 2 weeks after polio vaccination", correct: false },
      { text: "Delay booster & take it after tonsillectomy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Quinsy is collection of pus in the peritonsillar space b/t capsule of tonsil and",
    answers: [
      { text: "Superior constrictor", correct: true },
      { text: "Middle constrictor", correct: false },
      { text: "Inferior constrictor", correct: false },
      { text: "Stylohyoid", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A Middle-aged diabetic male has undergone tooth extraction for caries tooth, presents with fever and trismus. On examination, tonsils are pushed medially and there is a swelling in the neck at the upper 1/3rd of the sternocleidomastoid muscle. Likely diagnosis is",
    answers: [
      { text: "Parapharyngeal abscess", correct: true },
      { text: "Retropharyngeal abscess", correct: false },
      { text: "Ludwig's angina", correct: false },
      { text: "Peritonsillar abscess", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Dysphonia plica ventricularis is ",
    answers: [
      { text: "Low pitched voice due to use of vestibular folds", correct: true },
      { text: "Hoarseness due to plication of epiglottis", correct: false },
      { text: "High pitched voice in adolescent boys", correct: false },
      { text: "Weak fatigable voice in TB larynx", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The main treatment for hypotonic dysphonia is",
    answers: [
      { text: " Vocal exercises, acupuncture, physiotherapy", correct: true },
      { text: "Speech therapy (silence), laryngeal applications of apricot oil", correct: false },
      { text: "Infusions of glucocorticosteroid solution into the larynx", correct: false },
      { text: "flooding the larynx with a solution of adrenomimetics", correct: false },
      { text: "vocal rest only ", correct: false },
    ],
  },
  {
    question: "False statement regarding functional aphonia is ",
    answers: [
      { text: "More common in emotionally insecure males", correct: true },
      { text: "More common in females", correct: false },
      { text: "Not associated with any other neurological deficit", correct: false },
      { text: "Treatment is reassurance and psychotherapy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Gold standard treatment in a patient intractable aspiration with incompetent larynx due to complete laryngeal paralysis is:",
    answers: [
      { text: "Tracheal division & Permanent Tracheostoma", correct: true },
      { text: "Tracheostomy", correct: false },
      { text: "Feeding jejunostomy", correct: false },
      { text: "Type I Thyroplasty", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 3-year old well immunized male child is brought to the paediatric outpatient department with sore throat. fever and noisy breathing with inability to swallow for the past four hours. Examination showed a toxic, tachypnoeic child with inspiratory stridor. There is suprasternal. supra clavicular and inter costal recession during inspiration. Which of the fo llowing is the most likely diagnosis: ",
    answers: [
      { text: "Acute Epiglottitis", correct: true },
      { text: "Acute Laryngotracheobronchitis", correct: false },
      { text: "Diphtheria", correct: false },
      { text: "Bronchopneumonia", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A three-year-old child suddenly began to cough during sleep, breathing became noisy. All the auxiliary muscles were included in the act of breathing, the lips turned blue, the child clearly lacked air, he was covered with sticky sweat, the body temperature was slightly increased. The voice is sonorous. In the lumen of the larynx below the level of the vocal folds, a roller-like infiltrate is visible. Preliminary diagnosis: False croup. Treatment tactics?",
    answers: [
      { text: " Inhalation of the larynx with the use of drugs, antibiotics, glucocorticosteroids", correct: true },
      { text: "Antihistamines and glucocorticosteroids", correct: false },
      { text: "Sedatives, proticulas, throat spray, anti-diphtheria serum", correct: false },
      { text: "Antibiotic therapy, Inhalation of the larynx with the use of drugs", correct: false },
      { text: "Laryngeal bougienage, surgical", correct: false },
    ],
  },
  {
    question: "A patient underwent lateral skull base surgery few months back and has presented with complaints of recurrent aspirations. There is no change in voice of the patient. Which of the following nerve is most likely injured during surgery?  ",
    answers: [
      { text: "SLN nerve", correct: true },
      { text: "Glossopharyngeal nerve", correct: false },
      { text: "Vagus nerve", correct: false },
      { text: "RLN nerve", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "You are 1st year ENT resident and you received a patient with hoarseness after thyroidectomy procedure.On laryngoscopy, you found that unilateral vocal cord paralysis. You reported to your senior doctor and he asked to do vocal cord vibratory patterns. Which of the following can be used to study vocal cord vibratory patterns?",
    answers: [
      { text: "Stroboscopy", correct: true },
      { text: "Flexible endoscope", correct: false },
      { text: "Laryngeal mirror", correct: false },
      { text: "Direct laryngoscopy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A tracheostomised patient, with portex tracheostomy tube, in the ward, developed sudden complete blockage of the tube. Which of the following is best next step in the management?",
    answers: [
      { text: "Immediate removal of the tracheostomy tube", correct: true },
      { text: "Suction of tube with sodium bicarbonate", correct: false },
      { text: "Suction of tube with saline", correct: false },
      { text: "Jet ventilation", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "65 years old chronic smoker came to the hospital with complaints of hoarseness and foreign bodysensation in the larynx. Biopsy revealed laryngeal carcinoma. You and your senior doctor planned for a total laryngectomy. Which of the following is best for the maintenance of the airway during laryngectomy?",
    answers: [
      { text: "Tracheostomy", correct: true },
      { text: "Laryngeal mask airway", correct: false },
      { text: "Laryngeal tube", correct: false },
      { text: "Combi tube", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Treatment of choice for nasopharyngeal carcinoma is",
    answers: [
      { text: "Radiotherapy", correct: true },
      { text: "Surgery", correct: false },
      { text: "Chemotherapy", correct: false },
      { text: "Surgery and radiotherapy", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is life threatening:  1) U/L abductor paralysis  2) B/L abductor paralysis  3) U/l adductor paralysis  4) BIL adductor paralysis",
    answers: [
      { text: "Only 2 is correct", correct: true },
      { text: "Only 4 is correct", correct: false },
      { text: "2 & 4 is correct", correct: false },
      { text: "All are correct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A child born with 80 % subglottic stenosis should be graded as",
    answers: [
      { text: "Grades III", correct: true },
      { text: "Grades II", correct: false },
      { text: "Grades I", correct: false },
      { text: "Grades IV", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statements regarding epistaxis is untrue",
    answers: [
      { text: "Woodruff’s plexus appear to originate from posterior pharyngeal wall and arterial in origin", correct: true },
      { text: "Anterior epistaxis is more common", correct: false },
      { text: "In young persons venous bleeding is more common", correct: false },
      { text: "Posterior epistaxis usually occur after 40 yrs", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The glomus tumor invasion of jugular bulb is diagnosed by",
    answers: [
      { text: "Jugular venography", correct: true },
      { text: "Vertebral venous venography", correct: false },
      { text: "X ray", correct: false },
      { text: "Carotid angiography", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Post-burn stricture of the esophagus is:",
    answers: [
      { text: "narrowing of the lumen of the esophagus of varying lengths and at different levels due to the growth and maturation of scar tissue in the wall of the esophagus due to the influence of exogenous factors, accompanied by its deformation", correct: true },
      { text: " damage to body tissues caused by high temperature, the action of certain chemicals", correct: false },
      { text: " local damage to the wall of the esophagus due to accidental or intentional ingestion of a cauterizing chemical through the mouth", correct: false },
      { text: " systemic disease, a separate nosological form of burn disease of chemical etiology", correct: false },
      { text: "not-specific inflammation of mucosa", correct: false },
    ],
  },
  {
    question: "I degree, according to the endoscopic classification of Zargar S.A., involves",
    answers: [
      { text: "superficial swelling and erythema of the mucous membrane", correct: true },
      { text: " perforation", correct: false },
      { text: "hemorrhages, erosions, blisters, superficial ulcers", correct: false },
      { text: "deep discrete and circular ulcers", correct: false },
      { text: "no changes in the mucous membrane", correct: false },
    ],
  },
  {
    question: "IIA degree, according to the endoscopic classification of Zargar S.A., suggests",
    answers: [
      { text: " hemorrhages, erosions, blisters, superficial ulcers", correct: true },
      { text: "superficial swelling and erythema of the mucous membrane", correct: false },
      { text: "deep discrete and circular ulcer", correct: false },
      { text: "no changes in the mucous membrane", correct: false },
      { text: " transmural ulcers with focal necrosis", correct: false },
    ],
  },
  {
    question: "Patients with a chemical burn of the esophagus after discharge from the hospital are recommended to undergo clinical observation in a clinic at their place of residence.",
    answers: [
      { text: " from a surgeon", correct: true },
      { text: "from a general practitioner", correct: false },
      { text: " from a traumatologist", correct: false },
      { text: " from a combustiologist", correct: false },
      { text: "General ENT", correct: false },
    ],
  },
  {
    question: "In order to prevent infectious complications in patients with poisoning with cauterizing substances, it is recommended to prescribe",
    answers: [
      { text: "antibiotics", correct: true },
      { text: "antiviral drugs", correct: false },
      { text: " non-steroidal anti-inflammatory drugs", correct: false },
      { text: "glucocorticosteroids.", correct: false },
      { text: "haemostatics", correct: false },
    ],
  },
  {
    question: "All of the following are true about juvenile angiofibroma except",
    answers: [
      { text: "Weber Fergusson’s transmaxillary approach is ideal for angiofibroma limited to nose & nasopharynx", correct: true },
      { text: "Frog face deformity", correct: false },
      { text: "Flutamide can induce tumor shrinkage", correct: false },
      { text: "Superior margin of sphenopalatine foramen is the most common site of origin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which type of the following diseases has an association with HPV?  1) Squamous cell carcinoma -Base of tongue  2) Tonsillar carcinoma  3) Nasopharyngeal carcinoma  4) Laryngeal papillomatosis",
    answers: [
      { text: "Only 1,2.4", correct: true },
      { text: "Only 4 ", correct: false },
      { text: "Only 3.4", correct: false },
      { text: "Only 2,3,4", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Hoarseness of voice is earliest symptom of ",
    answers: [
      { text: "Glottic carcinoma", correct: true },
      { text: "Supraglottic carcinoma", correct: false },
      { text: "Subglottic carcinoma", correct: false },
      { text: "Nasopharyngeal carcinoma", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "In laryngeal cancer, hoarseness of voice results from ",
    answers: [
      { text: "All stated", correct: true },
      { text: "RLN involvement", correct: false },
      { text: "Cricoartenoid fixation", correct: false },
      { text: "Infiltration of thyroarytenoid muscre", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What are the most characteristic areas of damage in tuberculosis of the larynx?",
    answers: [
      { text: "interarytenoid space, arytenoid cartilages and adjacent areas of the vocal cords", correct: true },
      { text: "epiglottic cartilage", correct: false },
      { text: "only true and false vovcal cords", correct: false },
      { text: "Trhyroid and arytenoid cartilages", correct: false },
      { text: "Glottis", correct: false },
    ],
  },
  {
    question: "What happens  at second stage of laryngeal cancer?",
    answers: [
      { text: "the process involves glands located in the subepithelial layer. In this case, death of the epithelium and formation of ulcers are observed.", correct: true },
      { text: "when a secondary infection occurs, the perichondrium and cartilage are involved in the process", correct: false },
      { text: "necrosis of mucosa and submucosa layers", correct: false },
      { text: "necrosis and ulcers of mucosa and submucosa layers", correct: false },
      { text: "There is an accumulation of tuberculous tubercles in the submucosal layer. With pronounced body resistance, connective tissue grows around the infiltrate, which, however, does not become sclerotic.", correct: false },
    ],
  },
  {
    question: "Which of the following is Correct about the Lupus of larynx? 1) Glottis is involved first in Lupus 2) Lupus involves the anterior part of the larynx 3) Lupus larynx is a painful condition 4) Treatment is anti-tubercular drugs",
    answers: [
      { text: "Only 2,4 is correct", correct: true },
      { text: "1,2,3,4 is correct", correct: false },
      { text: "Only 1,3 is correct", correct: false },
      { text: "Only 1,2,3 is correct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Laryngoscopy in the primary period of the laryngeal syphillis, what will you find?",
    answers: [
      { text: "enlarged epiglottis and aryepiglottic fold", correct: true },
      { text: " its mucous membrane acquires a bright red color (syphilitic enanthema - with simultaneous damage to the oral cavity and pharynx)", correct: false },
      { text: "On the mucosa, grayish-white raids occur with even boundaries or papules that rise above the rest of the mucous membrane, located on the epiglottis", correct: false },
      { text: "small erosions occur on the mucosa", correct: false },
      { text: "he infiltrates of the red-cyanotic color are found in the larynx", correct: false },
    ],
  },
  {
    question: "What is dysphonia?",
    answers: [
      { text: "Violation of purity, strength, timbre of voice", correct: true },
      { text: "Impaired mobility of the epiglottis", correct: false },
      { text: "Swallowing problems, choking on liquid food", correct: false },
      { text: "Complete lack of voice", correct: false },
      { text: "Nasal voice, open or closed", correct: false },
    ],
  },
  {
    question: "A 35-year old man, profession is a pilot has vertigo, hearing loss, tinnitus, sense of fullness for 3 days.  Hearing loss is unilateral, pure tone audiometry - there is sensorineural hearing loss. What is the most likely diagnosis?",
    answers: [
      { text: "Meniere's disease", correct: true },
      { text: "Otosclerosis", correct: false },
      { text: "Chronic otitis media", correct: false },
      { text: "Eustachitis", correct: false },
      { text: "Otitis externa", correct: false },
    ],
  },
  {
    question: "A pilot suffered an ear injury during a competition - a blow to the auricle with an open palm. Immediately after the injury, the patient felt severe pain in the ear, noise, short-term dizziness, but did not lose consciousness. On otoscopy: the ear canal is free and the area is hyperemic with areas of hemorrhage. Which methods of examination we use?",
    answers: [
      { text: "Pure-tone audiometry", correct: true },
      { text: "Tympanometry", correct: false },
      { text: "CT-scan", correct: false },
      { text: "MRI", correct: false },
      { text: "X-ray", correct: false },
    ],
  },
  {
    question: "A total burn of the esophagus is a lesion",
    answers: [
      { text: " the entire esophagus", correct: true },
      { text: " the esophagus for up to 5 cm", correct: false },
      { text: " the esophagus for up to 3 cm", correct: false },
      { text: " esophagus for more than 3 cm", correct: false },
      { text: "the esophagus in the places of its physiological constrictions", correct: false },
    ],
  },
  {
    question: "Untrue statement regarding Non-healing midline granuloma(Polymorphic Reticulosis) is",
    answers: [
      { text: "Renal involvement", correct: true },
      { text: "No pulmonary involvment", correct: false },
      { text: "Treatment includes radiotherapy", correct: false },
      { text: "Treatment includes surgery", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A true statement about the external auditory canal is that",
    answers: [
      { text: "Outer 1/3rd is cartilaginous and inner 2/3rd is bony part", correct: true },
      { text: "Outer 2/3rd is cartilaginous and inner 1/3rd is bony part", correct: false },
      { text: "Outer 1/3rd is bony and inner 2/3rd is cartilaginous part", correct: false },
      { text: "Outer 2/3rd is bony and inner 1/3rd is cartilaginous part", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statements is correct about the external auditory canal?  1) Lateral 1/3rd is made of cartilaginous part and Medial 2/3rd is made of bony part  2) Medial 1/3rd is made of cartilaginous part and Lateral 2/3rd is made of bony part  3) Lateral 2/3rd is made of cartilaginous part and Medial 1/3rd is made of bony part  4) Ceruminous glands are modified apocrine sweat glands",
    answers: [
      { text: "Only 1,4 is correct", correct: true },
      { text: "Only 2,4 is correct", correct: false },
      { text: "Only 3,4 is correct", correct: false },
      { text: "Only 4 is correct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Most potential route for transmission of meningitis from CNS to Inner ear is",
    answers: [
      { text: "Aqueduct of Cochlea", correct: true },
      { text: "Aqueduct of Sylvius", correct: false },
      { text: "Vestibular aqueduct", correct: false },
      { text: "Hyrtle fissure", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The cough response caused while cleaning the ear canal is mediated by stimulation of:",
    answers: [
      { text: " The X cranial nerve", correct: true },
      { text: "The V cranial nerve", correct: false },
      { text: "Branches of the VII cranial nerve", correct: false },
      { text: "The occipital nerve", correct: false },
      { text: "Innervation of external ear canal by C1, C2", correct: false },
    ],
  },
  {
    question: "Vestibular function is tested by: ",
    answers: [
      { text: "Galvanic stimulation test", correct: true },
      { text: "Tympanometry", correct: false },
      { text: "Bing test", correct: false },
      { text: "Politzer test", correct: false },
      { text: "Gelle's test", correct: false },
    ],
  },
  {
    question: "Fistula test stimulates:",
    answers: [
      { text: "Lateral semicircular canal", correct: true },
      { text: "Posterior semicircular canal ", correct: false },
      { text: "Anterior semicircular canal ", correct: false },
      { text: "Cochlea", correct: false },
      { text: "Mastoid", correct: false },
    ],
  },
  {
    question: "This test is done when there is perfo ration of tympanic membrane because irrigation with water in such a case with perforation is contraindicated. The test employs Dundas Grant tube, which is a coiled copper tube wrapped in cloth. The air in the tube is cooled by pouring ethyl chloride and then blown into the ear.Which methods is this?",
    answers: [
      { text: "Cold-air caloric test", correct: true },
      { text: "Fistula test", correct: false },
      { text: "Romberg test", correct: false },
      { text: "Modified Kobrak test", correct: false },
      { text: "Fitzgerald–Hallpike test", correct: false },
    ],
  },
  {
    question: "Which of the following statements is correct about the Cone of light?  1) It is present due to handle of the malleus.2) Cone of light goes from umbo to 5 o'clock position in the right ear 3) Cone of light goes from umbo to 7 o'clock position in the left ear  4) The Cone of light lies in the Antero-superior part of the tympanic membrane",
    answers: [
      { text: "Only 1,2,3 is correct", correct: true },
      { text: "Only 2,3.4 is correct", correct: false },
      { text: "Only 1 is correct", correct: false },
      { text: "Only 2,3 is correct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A neonate affected by jaundice was brought to ENT OPD to evaluate for risk of hearing loss. What would be the best test for Evaluation of Hearing?",
    answers: [
      { text: "BERA", correct: true },
      { text: "OAE", correct: false },
      { text: "PTA", correct: false },
      { text: "Lmpedence", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A lady has B/L hearing loss since 4 years which worsened during pregnancy. Type of impedance audiometry graph will be ",
    answers: [
      { text: "As", correct: true },
      { text: "Ad", correct: false },
      { text: "B", correct: false },
      { text: "C ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 60-year-old diabetic presented with severe pain in ear and otorrhoea not responding to antibiotics. On examination, granulation t issue is seen in EAC, facial nerve palsy was present. The likely diagnosis is",
    answers: [
      { text: "Malignant otitis externa", correct: true },
      { text: "Serous otitis media", correct: false },
      { text: "Otomycosis", correct: false },
      { text: "Eczematous otitis externa", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 22 year old man presents to ENT OPD complaining of itching, earache and discharge from the ear. Discharge is watery in consistency and have musty odour. On examination, doctor found black headed filamentous growth which resembled wet blotting paper. Which of the following is likely diagnosis in this case?",
    answers: [
      { text: "Otomycosis by Aspergillus niger", correct: true },
      { text: "Acute Otitis externa", correct: false },
      { text: "Otomycosis by Aspergillus fumigatus", correct: false },
      { text: "Otomycosis by Candida", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 30-year old patient has intense itching, discomfort or pain in the ear, watery discharge with a musty odour and ear blockage.Examined with an otoscope,  appears as black headed filamentous growth in EAC. Treatment?",
    answers: [
      { text: "Ear toilet, clotrimazole", correct: true },
      { text: "Topical antibiotics", correct: false },
      { text: "Analgetics", correct: false },
      { text: "Antihystimines", correct: false },
      { text: "10% Ichthammol-glycerol ointment", correct: false },
    ],
  },
  {
    question: "A patient suffering from furunculosis complains of pain in the auricle and swelling that extends to the entire concha, excluding the lobe. On examination, an uneven, lumpy swelling of the skin of the auricle is determined, and a fluctuating area is palpated in the area of ​​the auricle. Preliminary diagnosis is Perichondritis. What is the treatment? ",
    answers: [
      { text: "Incision, Drainage, Antibiotics", correct: true },
      { text: "Antihystimines", correct: false },
      { text: "10% Ichthammol-glycerol ointment", correct: false },
      { text: "Topical antibiotics", correct: false },
      { text: "Analgetics", correct: false },
    ],
  },
  {
    question: "In a child under 3 years of age, a complication of acute suppurative otitis media can be",
    answers: [
      { text: "Otoanthritis", correct: true },
      { text: "Mastoiditis", correct: false },
      { text: "Eustacheitis", correct: false },
      { text: "Chronic otitis media", correct: false },
      { text: "Adhesive otitis media", correct: false },
    ],
  },
  {
    question: "In a patient with acute purulent otitis media, otoscopy revealed a narrowing of the bony part of the external auditory canal due to the overhanging of its posterior-superior wall. Which examination does indicate clouding of air cells? ",
    answers: [
      { text: "X-ray of the temporal bones", correct: true },
      { text: "Tuning fork ", correct: false },
      { text: "Tympanogramm", correct: false },
      { text: "Audiogramm", correct: false },
      { text: "Politzer test", correct: false },
    ],
  },
  {
    question: "Nasopharyngeal carcinoma is also called",
    answers: [
      { text: "Guangdong tumor", correct: true },
      { text: "Chinese tumor", correct: false },
      { text: "Indian tumor", correct: false },
      { text: "Kandahar tumor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 5-year-old child presents with a history of recurrent URTI, impaired hearing, mouth breathing, failure to thrive, and high arched palate. Management is",
    answers: [
      { text: "Adenoidectomy with grommet insertion", correct: true },
      { text: "Myringoplasty", correct: false },
      { text: "Tonsillectomy", correct: false },
      { text: "Myringotomy with grommet insertion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Nerve damaged in radical mastiodectomy is:",
    answers: [
      { text: "Facial", correct: true },
      { text: "Cochlear", correct: false },
      { text: "Vestibular", correct: false },
      { text: "Vagus", correct: false },
      { text: "Glossopharyngeal", correct: false },
    ],
  },
  {
    question: "The most common complication of chronic suppurative otitis media is:",
    answers: [
      { text: "Meningitis", correct: true },
      { text: "Intracerebral abscess ", correct: false },
      { text: "Cholesteatoma ", correct: false },
      { text: "Conductive deafness ", correct: false },
      { text: "SNHL", correct: false },
    ],
  },
  {
    question: "Which of the following is true regarding myringoplasty ",
    answers: [
      { text: "In underlay graft is placed medial to the annulus ", correct: true },
      { text: "In underlay graft is placed lateral to the malleus ", correct: false },
      { text: "In overlay graft is placed lateral to the malleus ", correct: false },
      { text: "In overlay graft is placed medial to the annulus ", correct: false },
      { text: "In overlay graft is placed medial to the incus ", correct: false },
    ],
  },
  {
    question: "A 5-year-old boy has been diagnosed to have posterior superior retraction pocket. Most appropriate next step in the management would be:",
    answers: [
      { text: "Mastoid exploration, Tympanoplasty", correct: true },
      { text: "Topical antibiotics and decongestants for 4 weeks ", correct: false },
      { text: "IV antibiotics and follow up after a month ", correct: false },
      { text: "Myringoplasty", correct: false },
      { text: "Meatoplasty", correct: false },
    ],
  },
  {
    question: "Which of the following statements is correct about the Tobey ayer test? 1) Also called Queckenstedt's test 2) Done for Sigmoid sinus thrombosis 3) CSF pressure is recorded by manometer when one or both jugular veins are compressed manually 4) Compression of affected (thrombosis) side of vein produces a rapid rise in CSF pressure",
    answers: [
      { text: "Only 1.2,3 is correct", correct: true },
      { text: "Only 4 is correct", correct: false },
      { text: "Only 1.2 is correct", correct: false },
      { text: "Only 2 is correct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient 21 year old with acute suppurative otitis media has rise in temperature 104°F with chills and rigors, headache, neck rigidity, photophobia and mental irritability, nausea and vomiting. Which is most clinical investigations helps to put diagnosis?",
    answers: [
      { text: "MRI of the head", correct: true },
      { text: "Culture test", correct: false },
      { text: "Audiometry", correct: false },
      { text: "Tympanometry", correct: false },
      { text: "Otoscopy", correct: false },
    ],
  },
  {
    question: "Tobey–Ayer test performed to record CSF pressure by manometer and to see the effect of manual compression of one or both jugular veins. In which deaseses we use?",
    answers: [
      { text: "Lateral sinus trombophlebitis", correct: true },
      { text: "Brain abscess", correct: false },
      { text: "Cerebellar abscess", correct: false },
      { text: "Meningitis", correct: false },
      { text: "Extradural abscess", correct: false },
    ],
  },
  {
    question: "Post head injury, the patient had conductive deafness and on examination, tympanic membrane was normal and mobile. Likely diagnosis is:",
    answers: [
      { text: "Distortion of ossicular chain ", correct: true },
      { text: "Hemotympanum", correct: false },
      { text: "EAC sclerosis ", correct: false },
      { text: "Tympanosclerosis", correct: false },
      { text: "Otosclerosis", correct: false },
    ],
  },
  {
    question: "A patient 50 year old has complaints of suppuration from the left ear, pain in the ear and behind the ear, hearing loss. Ill  for 3 weeks. Objective: AS - in the external auditory canal, mucopurulent discharge, odorless. Мt - hyperemic, perforation in the anterior-lower quadrant, “pulsating reflex”, hyperemia and overhanging of the upper-posterior wall of the external auditory canal. On palpation of the mastoid process, significant pain is noted, more in the apex. What is the most needed examination?",
    answers: [
      { text: "CT of the temporal bones", correct: true },
      { text: "Impedance audiometry", correct: false },
      { text: "MRI of the head", correct: false },
      { text: "CT of the occipital bones", correct: false },
      { text: "audiological examination", correct: false },
    ],
  },
  {
    question: "A newborn baby came to your hospital with hearing loss. On series of examinations, you and your senior doctor were planning for cochlear implantation. Which of the following is the absolute contraindication of cochlear implantation? 1) Michel's aplasia 2) Mondini's dysplasia 3) 8th nerve tumor 4) 8th nerve aplasia",
    answers: [
      { text: "Only 1,3,4 is correct", correct: true },
      { text: "Only 1,2,3 is correct", correct: false },
      { text: "Only 1,2 is correct", correct: false },
      { text: "Only 3,4 is correct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What affects the effectiveness of cochlear neuritis treatment?",
    answers: [
      { text: " etiological factor, body reactivity, timing of initiation and rationality of therapy", correct: true },
      { text: "patient's profession", correct: false },
      { text: "diet", correct: false },
      { text: "gender", correct: false },
      { text: "age", correct: false },
    ],
  },
  {
    question: "You are examining a pregnant lady in ENT OPD with complaints of Otalgia. She asked you that, at what time my baby can hear sounds inside the womb. Which of the following is the most specific answer?",
    answers: [
      { text: "20 weeks ", correct: true },
      { text: "14weeks ", correct: false },
      { text: "32 weeks ", correct: false },
      { text: "38 weeks ", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "What is the most effective treatment for otosclerosis?",
    answers: [
      { text: "surgical", correct: true },
      { text: "dehydration", correct: false },
      { text: "detoxification", correct: false },
      { text: "antibacterial", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following is not a typical feature of Meniere’s disease?",
    answers: [
      { text: "Pulsatile tinnitus", correct: true },
      { text: "Vertigo", correct: false },
      { text: "Sensorineural deafness", correct: false },
      { text: "Fluctuating deafness", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 41-year-old patient complains of periodic attacks of systemic vertigo in the midst of complete health against the background of increasing noise and hearing loss in the left ear. Attacks of dizziness are accompanied by nausea, vomiting, balance disorder: the patient cannot move, each attempt to move and change the position of the head in space increases dizziness and autonomic disorders. At the time of the attack, blood pressure is unstable:max 140/90-100, min. - 90/50 mm Hg the attack lasts up to 4-6 hours, passes on its own. Outside the attack, the state of full capacity for work, there are no changes in the auditory function. Most likely diagnosis?",
    answers: [
      { text: "Meniere’s disease", correct: true },
      { text: "Acoustic nerve schwannoma", correct: false },
      { text: "Tympanosclerosis", correct: false },
      { text: "Otosclerosis", correct: false },
      { text: "CSOM", correct: false },
    ],
  },
  {
    question: "Initial mechanism of action of intra-tympanic gentamicin microwick catherter inserted into inner ear in treatment of Meniere’s disease:",
    answers: [
      { text: "Damage outer hair cell", correct: true },
      { text: "Restorate outer hair cell", correct: false },
      { text: "Bind to Mg2+ channel", correct: false },
      { text: "Acts on melanoreceptors of outer hair cell", correct: false },
      { text: "Binds to hair cell Na+-K+ ATPAse channel ", correct: false },
    ],
  },
  {
    question: "crooked nose is due to:",
    answers: [
      { text: "Deviated choana", correct: true },
      { text: "Deviated septum", correct: false },
      { text: "Humping nasal septum", correct: false },
      { text: "Deviated dorsum and septa", correct: false },
      { text: "Deviated ala", correct: false },
    ],
  },
  {
    question: "A 33-year-old male presents with a depression in the bridge of his nose and difficulty nasal breathing. He had nose injury during a sports activity five years ago, which required surgical treatment. On examination, there is a loss of support in the nasal bridge and a deviation of the nasal septum. What is the treatment?",
    answers: [
      { text: "By augmentation rhinoplasty", correct: true },
      { text: "by reduction rhinoplasty", correct: false },
      { text: "by septorhinoplasty", correct: false },
      { text: "by submucosal resection of nasal seprum", correct: false },
      { text: "By turbinectomy", correct: false },
    ],
  },
  {
    question: "Septal perforation is not seen in:",
    answers: [
      { text: "Rhinophyma", correct: true },
      { text: "Leprosy", correct: false },
      { text: "Septal abscess", correct: false },
      { text: "Trauma", correct: false },
      { text: "Syphillis", correct: false },
    ],
  },
  {
    question: " All of the following lead to perforation of Cartilaginous part of nasal septum except",
    answers: [
      { text: "Syphilis", correct: true },
      { text: "Leprosy", correct: false },
      { text: "Lupus", correct: false },
      { text: "Tuberculosis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which artery does not contribute to littles area ?",
    answers: [
      { text: "Posterior ethmoidal artery", correct: true },
      { text: "Anterior ethmoidal artery", correct: false },
      { text: "Septal Branch of facial artery", correct: false },
      { text: "Sphenopalatine artery", correct: false },
      { text: "Greater palatine artery", correct: false },
    ],
  },
  {
    question: "45 years old male came to the emergency department with a complaint of epistaxis. After series of treatments, the bleeding could not be stopped. You and your senior ENT doctor planned for external carotid artery ligation. Even after the procedure, the bleeding persisted. Which of the following artery is responsible for the bleeding in this case?",
    answers: [
      { text: "Maxillary artery", correct: true },
      { text: "Greater palatine artery", correct: false },
      { text: "Superior labial artery", correct: false },
      { text: "Anterosuperior part of nose", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Pharyngeal angiofibroma is treated with:",
    answers: [
      { text: "Surgery", correct: true },
      { text: "Radiotherapy ", correct: false },
      { text: "Chemotherapy ", correct: false },
      { text: "None of the above", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "INVESTIGATION of choice for angiofibroma:",
    answers: [
      { text: "CECT", correct: true },
      { text: "carotid angiography ", correct: false },
      { text: "Biopsy", correct: false },
      { text: "MRI", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "YOUNGS Operation is indicated for",
    answers: [
      { text: "atrophic rhinitis", correct: true },
      { text: "rhinitis sicca", correct: false },
      { text: "rhinitis caseosa", correct: false },
      { text: "vasomotor rhinitis", correct: false },
      { text: "allergic rhinitis", correct: false },
    ],
  },
  {
    question: "allergic rhinitis treatment includes all except:",
    answers: [
      { text: "antibiotics ", correct: true },
      { text: "avoiding allergen", correct: false },
      { text: "corticosteroids ", correct: false },
      { text: "surgery ", correct: false },
      { text: "youngs operation", correct: false },
    ],
  },
  {
    question: "Which of the following statements is correct about Nasopharyngeal bursitis?  1) Persistent postnasal discharge with crusting in the nasopharynx.  2) Firm non-fluctuant swelling  3) Nasal obstruction due to swelling in the nasopharynx.  4) There is no Obstruction to the eustachian tube",
    answers: [
      { text: "Only 1 & 3 are correct", correct: true },
      { text: "1,2,3 is correct", correct: false },
      { text: "All are correct ", correct: false },
      { text: "1,2.4 is correct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "You and your senior ENT doctor performing nasal endoscopy procedure in a patient. While doing this procedure, there found an area that is difficult to pass the nasal endoscopy. At that point, your senior doctor questioned you, which is the narrowest part of the nasal cavity?",
    answers: [
      { text: "Nasal valve", correct: true },
      { text: "Choanae", correct: false },
      { text: "Middle turbinate", correct: false },
      { text: "Vestibule", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Madhuri, a 35-year- old teacher, complains of a nasal quality to her voice, as well as a blocked and runny nose. She now has lost her sense of taste and smell. She also complaint of post nasal drip, she has recently been diagnosed as having asthma and has been started on oral steroids inhalers. Examination confirms the polyp-like swellings within the nose on both side. History of an adverse reaction to which drug should be enquired specifically",
    answers: [
      { text: "Aspirin", correct: true },
      { text: "Cisplatin", correct: false },
      { text: "Minoxidil", correct: false },
      { text: "Neomycin", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A couple came to your clinic with a history of infertility. On further history, the husband found to have recurrent sinusitis. On further investigation, the HRCT of the husband revealed Bronchiectasis. Which of the following will be the most probable diagnosis?",
    answers: [
      { text: "Young's syndrome", correct: true },
      { text: "Kallmann syndrome", correct: false },
      { text: "Kartagener's syndrome", correct: false },
      { text: "Van der Hoeve syndrome", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following have No role of Topical steroids after sinus surgery?  1) Ethmoidal polyps  2) Antrochoanal polyp  3) Allergic fungal sinusitis  4) Chronic rhinosinusitis",
    answers: [
      { text: "Only 2", correct: true },
      { text: "Only 3 & 4", correct: false },
      { text: "All have no role", correct: false },
      { text: "Only 1 & 2", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The pathognomic test for CSF in suspected CSF rhinorrhea is:",
    answers: [
      { text: " Beta-2 transferrin", correct: true },
      { text: "handkerchief test ", correct: false },
      { text: "halo sign ", correct: false },
      { text: "glucose concentration", correct: false },
      { text: "aptt test", correct: false },
    ],
  },
  {
    question: "A patient present with enophthalmos after a trauma to face by blunt object. There is no fever and no extraocular muscle palsy. Diagnosis is:",
    answers: [
      { text: "blow out fracture ", correct: true },
      { text: "fracture maxila ", correct: false },
      { text: "fracture zygoma", correct: false },
      { text: "fracture ethmoid ", correct: false },
      { text: "fracture mandibule", correct: false },
    ],
  },
  {
    question: "A 20 years old female presented to opd with   Complaints like high fever, severe headache, nasal obstruction, Nasal discharge, periorbital edema and pain in the eyes. In addition to that, she said she had large, painful, red, swollen, tender lesion in her right nasal vestibule a week back and she is on Antibiotic. On anterior rhinoscopy, it is found abscess in the nasal vestibule. On asking her history, she said she has squeezed the lesion a week ago. On culture staphylococcus aureus growth is seen. Which of the following complication presented?",
    answers: [
      { text: "  Periorbital cellulitis", correct: true },
      { text: "   Meningitis", correct: false },
      { text: "   Brain abscess ", correct: false },
      { text: "  Abscess of nasal septum", correct: false },
      { text: "Cavernous sinus thrombosis ", correct: false },
    ],
  },
  {
    question: "Which sinus has  most complications or mostly infected to orbital complications?",
    answers: [
      { text: "Ethmoid sinus", correct: true },
      { text: "Frontal sinus", correct: false },
      { text: "Maxillary sinus", correct: false },
      { text: "Sphenoid sinus ", correct: false },
      { text: "All of the above ", correct: false },
    ],
  },
  {
    question: "Interdigitating superior constrictor muscles that form a band at the posterior pharyngeal wall",
    answers: [
      { text: "Passavant’s Ridge", correct: true },
      { text: "Rathke’s Pouch Cyst", correct: false },
      { text: "Sinus of Morgagni", correct: false },
      { text: "Torus tubarius", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statements is CORRECT about derivatives of Pharyngeal Pouches? 1) Eustachian Tube develops from 1st pharyngeal pouch 2) Palatine Tonsils develops from 2nd pharyngeal pouch 3) Inferior Parathyroid glands develop from the 4th pharyngeal pouch 4) Parafollicular c cells of thyroid gland develops from 4th pharyngeal pouch and remnams of 5th pharyngeal pouch",
    answers: [
      { text: "Only 1,2.4 is correct", correct: true },
      { text: "Only 1,2,3 is correct", correct: false },
      { text: "Only 4 is correct", correct: false },
      { text: "All are correct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The most common organism causing acute tonsillitis is",
    answers: [
      { text: "staph aureus", correct: true },
      { text: "anaerobes", correct: false },
      { text: "pneumococcus", correct: false },
      { text: "aerobes", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "torrential bleed during tonsillectomy is due to",
    answers: [
      { text: "tonsillar artery", correct: true },
      { text: "fascial artery", correct: false },
      { text: "paratonsillar vein", correct: false },
      { text: "none", correct: false },
      { text: "lingual artery", correct: false },
    ],
  },
  {
    question: "A 20 yrs old girl presented with sore throat. On examination there is enlarged lymph nodes with tonsillar enlargement & membrane over tonsil. Condit ion persists despite a course of antibiotic therapy. Whatshould be the specific test for this condition?",
    answers: [
      { text: "Paul Bunnell test", correct: true },
      { text: "Tonsillar Biopsy", correct: false },
      { text: "Throat swab & culture", correct: false },
      { text: "Blood smear", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Hot potato voice is seen in all except",
    answers: [
      { text: "glottic cancer", correct: true },
      { text: "tonsillar malignancy", correct: false },
      { text: "posterior tongue malignancy", correct: false },
      { text: "peritonsillar abscess", correct: false },
      { text: "tonsillar abscess", correct: false },
    ],
  },
  {
    question: "Child has whitish membrane that bleeds on scrapping. Identify diagnosis?",
    answers: [
      { text: "Diptheria", correct: true },
      { text: "ludwig angina", correct: false },
      { text: "Infectious mononucleosis", correct: false },
      { text: "membrane tonsilitis", correct: false },
      { text: "chronic tonsilitis", correct: false },
    ],
  },
  {
    question: "Follicular angina is characterized by",
    answers: [
      { text: "purulent material at the openings of crypts            ", correct: true },
      { text: "hyperaemia of the arches and palatine tonsils        ", correct: false },
      { text: "red and enlarged of palatine tonsils", correct: false },
      { text: "Yelowish spots of all palatine tonsils", correct: false },
      { text: "formation of membrain on the surface of tonsil", correct: false },
    ],
  },
  {
    question: "Acute parenchymatous tonsillitis is characterized by",
    answers: [
      { text: "red and enlarged of palatine tonsils", correct: true },
      { text: "hyperaemia of the arches and palatine tonsils        ", correct: false },
      { text: "purulent material at the openings of crypts            ", correct: false },
      { text: "Yelowish spots of all palatine tonsils", correct: false },
      { text: "formation of membrain on the surface of tonsil", correct: false },
    ],
  },
  {
    question: "50-year-old male presents with a history of recurrent episodes of epistaxis, nasal obstruction, and otalgia. Examination reveals a mass in the nasopharynx, and imaging studies confirm its presence with evidence of skull base erosion. Biopsy of the mass shows undifferentiated carcinoma. Which virus is closely associated with this type of nasopharyngeal carcinoma? ",
    answers: [
      { text: "Epstein-Barr virus ", correct: true },
      { text: "Human papillomavirus", correct: false },
      { text: "Herpes simplex virus", correct: false },
      { text: "Cytomegalovirus", correct: false },
      { text: "HIV ", correct: false },
    ],
  },
  {
    question: "A 5-year-old child presents with a history of recurrent URTI, impaired hearing, mouth breathing, failure to thrive, and high arched palate. Management is",
    answers: [
      { text: "Adenoidectomy with grommet insertion", correct: true },
      { text: "Myringoplasty", correct: false },
      { text: "Tonsillectomy", correct: false },
      { text: "Myringotomy with grommet insertion", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Which of the following statements is correct about the signs of chronic tonsillitis?  1) Enlarged cervical lymph nodes  2) Inequality of the size of the tonsils  3) Pus in the tonsillar crypts  4) Edema of the uvula",
    answers: [
      { text: "Only 1,2,3 is correct", correct: true },
      { text: "Only 2,3,4 is correct", correct: false },
      { text: "All are correct", correct: false },
      { text: "nan", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Space of the neck most often involved with head and neck infections is",
    answers: [
      { text: "Parapharyngeal space", correct: true },
      { text: "Submental space", correct: false },
      { text: "Submaxillary space", correct: false },
      { text: "Retropharyngeal space", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A Middle-aged diabetic male has undergone tooth extraction for caries tooth, presents with fever and trismus. On examination, tonsils are pushed medially and there is a swelling in the neck at the upper 1/3rd of the sternocleidomastoid muscle. Likely diagnosis is",
    answers: [
      { text: "Parapharyngeal abscess", correct: true },
      { text: "Retropharyngeal abscess", correct: false },
      { text: "Ludwig's angina", correct: false },
      { text: "Peritonsillar abscess", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Gutzmann's pressure test is done for ",
    answers: [
      { text: "Puberphonia", correct: true },
      { text: "Habitual dysphonia", correct: false },
      { text: "Spasmodic dysphonia", correct: false },
      { text: "Oysphonia plica ventricularis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 40-year-old patient, a pop artist, recently drew attention to the hoarseness that appeared after heavy vocal loads. Upon examination, two pointed protrusions of pale pink color with a size of 1-2 mm are determined, located symmetrically on the border of the anterior and middle third of both vocal folds. What is the diagnosis?",
    answers: [
      { text: "Vocal nodules of the larynx", correct: true },
      { text: "Acute laryngitis", correct: false },
      { text: "Subclavian laryngitis", correct: false },
      { text: "Background", correct: false },
      { text: "Acute edematous infiltrative laryngitis", correct: false },
    ],
  },
  {
    question: "Smoker, complains to the doctor of persistent voice disturbance for several years. During colds, the voice can completely disappear, a painful cough appears in the morning, and there is no breathing disorder. When examining the larynx, attention is drawn to persistent hyperemia of all parts of the larynx, infiltration and thickening of the vocal folds, accumulation of viscous sputum between the folds. The mobility of the vocal folds is preserved. Which diagnosis?",
    answers: [
      { text: "Chronic catarrhal laryngitis ", correct: true },
      { text: "abscess of the epiglottis", correct: false },
      { text: "hypertrophic laryngitis", correct: false },
      { text: "acute catarrhal laryngitis ", correct: false },
      { text: "edematous-infiltrative laryngitis", correct: false },
    ],
  },
  {
    question: "A 30 years old female patient underwent total thyroidectomy. After surgery patient complained of inability to raise her voice pitch. Most likely cause is injury to:",
    answers: [
      { text: "External branch of superior laryngeal nerve", correct: true },
      { text: "Internal branch of superior laryngeal nerve", correct: false },
      { text: "Recurrent laryngeal nerve", correct: false },
      { text: "Ansa cervicalis", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 2 ~year old fully immunised child developed sore throat, dysphagia, fever and stridor in quick succession. Within 2 hours of onset of symptoms the child was very sick, pale and looked terrified. An hour later, the child became quiet and floppy. And within next one hour the child expired. The most likely diagnosis was",
    answers: [
      { text: "Acute epiglottitis", correct: true },
      { text: "Acute laryngotracheal bronchitis", correct: false },
      { text: "Laryngeal diphtheria", correct: false },
      { text: "Foreign body aspiration", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 5-year-old girl has a hoarse voice, breathing is not difficult. What should be excluded in the first place?",
    answers: [
      { text: "Antihistamines, a diet that excludes coarse and solid foods, anticoughs, antibiotics or antiviral agents", correct: true },
      { text: "Antibiotics", correct: false },
      { text: "Surgical, tracheostomy", correct: false },
      { text: "agents, gargle with a solution, drink plenty of warm water, antiallergic drugs. ", correct: false },
      { text: " Inhalation with the use of drugs", correct: false },
    ],
  },
  {
    question: "Myer-Cotton's grading is used for ",
    answers: [
      { text: "Subglottic stenosis", correct: true },
      { text: "Laryngeal carcinoma", correct: false },
      { text: "Vocal cord palsy", correct: false },
      { text: "Laryngeal web", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "All of the following statements are true about spasmodic dysphonia except",
    answers: [
      { text: "Abductor type produces breathy voice and adductor type produces strangulated voice", correct: true },
      { text: "May be associated with other clystonias", correct: false },
      { text: "Only a local laryngeal disorder", correct: false },
      { text: "Botulinum toxin is used in treatment", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Patient 4 y.o., was admitted to the clinic. In the evening, suddenly, while playing with buttons, there was an attack of convulsive coughing, shortness of breath and acrocyanosis. After 2 minutes, these phenomena disappeared. However, the mother brought the child to the ENT department. Attacks of convulsive coughing recurred periodically. Which diagnosis?",
    answers: [
      { text: "foreign body of the larynx in the lining space", correct: true },
      { text: "tracheal foreign body", correct: false },
      { text: "foreign body of the nose", correct: false },
      { text: "foreign body of the left bronchus", correct: false },
      { text: "foreign body tracheal bifurcation", correct: false },
    ],
  },
  {
    question: "Haemorrhage occurring 5 hours after tonsillectomy is",
    answers: [
      { text: "Reactionary haemorrhage", correct: true },
      { text: "Secondary haemorrhage", correct: false },
      { text: "Primary haemorrhage", correct: false },
      { text: "None of the above", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A patient diagnosed with laryngeal cancer is shown persistent tracheostomy of the larynx.One of the complications of tracheostomy is the inability to insert back the tracheostomy tube due to the closure of the wound channel. To avoid this complication, carry out?",
    answers: [
      { text: "of a hole between the cricoid and thyroid cartilage", correct: true },
      { text: "bandage on the area of the postoperative wound", correct: false },
      { text: "suturing between the trachea and the skin", correct: false },
      { text: "stitching of the thyroid gland with a winding suture", correct: false },
      { text: "stitching of the thyroid gland with a \"U\"-shaped suture", correct: false },
    ],
  },
  {
    question: "Endoscopic management (CO2 or KTP laser excision with dilation) for congenital subglottic stenosis is considered for",
    answers: [
      { text: "Grades I and II", correct: true },
      { text: "Grades I,II and III", correct: false },
      { text: "Only Grades I", correct: false },
      { text: "Grades IV", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Vocal ligament is formed by",
    answers: [
      { text: "Intermediate and deep lamina propria", correct: true },
      { text: "Squamous epithelium and superficial layer of the lamina propria", correct: false },
      { text: "Superficial and intermediate lamina propria", correct: false },
      { text: "Superficial and deep lamina propria", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Common source in anterior epistaxis is:",
    answers: [
      { text: "Kiesselbach's plexus", correct: true },
      { text: "Atherosclerosis", correct: false },
      { text: "Woodruff's plexus", correct: false },
      { text: "sphenopalatine artery", correct: false },
      { text: "nasopharynx", correct: false },
    ],
  },
  {
    question: "The glomus tumor invasion of jugular bulb is diagnosed by",
    answers: [
      { text: "Jugular venography", correct: true },
      { text: "Vertebral venous venography", correct: false },
      { text: "X ray", correct: false },
      { text: "Carotid angiography", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A chemical burn of the esophagus is",
    answers: [
      { text: " local damage to the wall of the esophagus due to accidental or intentional ingestion of a cauterizing chemical", correct: true },
      { text: " narrowing of the lumen of the esophagus of varying lengths and at different levels due to the growth and maturation of scar tissue in the wall of the esophagus due to the influence of exogenous factors, accompanied by its deformation", correct: false },
      { text: "non-specific inflammation of mucosa", correct: false },
      { text: "3) systemic disease, a separate nosological form of burn disease of chemical etiology;", correct: false },
      { text: "4damage to body tissues caused by high temperatures and the action of certain chemicals", correct: false },
    ],
  },
  {
    question: "Following chemical burn of the esophagus, a bougienage or Savary dilators may be used to dilate the esophagus. What are Savary dilators?",
    answers: [
      { text: "rigid dilators", correct: true },
      { text: "flexible dilators", correct: false },
      { text: "soft dilators", correct: false },
      { text: "plastic dilators", correct: false },
      { text: "rubber dilators", correct: false },
    ],
  },
  {
    question: "Grade 0, according to the endoscopic classification of Zargar S.A., suggests",
    answers: [
      { text: "no changes in the mucous membrane", correct: true },
      { text: "transmural ulcers with focal necrosis", correct: false },
      { text: " hemorrhages, erosions, blisters, superficial ulcer", correct: false },
      { text: " perforation", correct: false },
      { text: " superficial swelling and erythema of the mucous membrane", correct: false },
    ],
  },
  {
    question: "What is used to stop the epistaxis?",
    answers: [
      { text: "embolization of branches of the maxillary artery", correct: true },
      { text: "metabolic drugs", correct: false },
      { text: "lower sparing conchotomy", correct: false },
      { text: "boric acid", correct: false },
      { text: "acetylsalicylic acid", correct: false },
    ],
  },
  {
    question: "An incorrect statement on the topic of epistaxis is",
    answers: [
      { text: "metabolic drugs are used to stop epistaxis", correct: true },
      { text: "Posterior tnasal packing is performed if anterior nasal packing is ineffective;", correct: false },
      { text: "anterior nasal packing is performed when the simplest methods of stopping epistaxis are ineffective;", correct: false },
      { text: "for recurrent epistaxis, obliteration of the capillary bed is used;", correct: false },
      { text: "for recurrent epistaxis, cauterization of the mucous membrane is used", correct: false },
    ],
  },
  {
    question: "A 37 yrs old female Patientt presents in ent opd with complaints of a lump in throt with no difficulty in swallowing is",
    answers: [
      { text: "Globus pharyngeus", correct: true },
      { text: "Carcinoma Oropharynx", correct: false },
      { text: "Carcinoma esophagus", correct: false },
      { text: "Pharyngeal pouch", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "A 65 year old male presents with cervical lymphadenopathy with recurrent epistaxis. Most likely cause is",
    answers: [
      { text: "Ca Nasopharynx", correct: true },
      { text: "Angiofibroma", correct: false },
      { text: "Rhabdomyosarcoma", correct: false },
      { text: "nan", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "False statement about carcinoma larynx is ",
    answers: [
      { text: "More common in females", correct: true },
      { text: "Glottis is the most common srte", correct: false },
      { text: "Squamous cell is the most common histological type", correct: false },
      { text: "Tobacco is an important causative factor", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "10 years old boy came to your clinic with severe throat pain. On examination, you diagnosed it as Tonsillitis. You planned for a Tonsillectomy procedure and during that procedure, the patient developed bleeding intraoperatively. Which of the following is the source of bleeding in this scenario?",
    answers: [
      { text: " Paratonsillar vein", correct: true },
      { text: "Maxillary artery", correct: false },
      { text: "Lingual artery", correct: false },
      { text: "Middle meningeal artery", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "Indicate the main symptom that begins to bother the patient, for which he will come to the doctor",
    answers: [
      { text: "severe pain when swallowing not only solid food, but also water", correct: true },
      { text: "vomiting", correct: false },
      { text: "hoarseness", correct: false },
      { text: "unpleasant, putrid odor from the mouth", correct: false },
      { text: "nasal obstruction", correct: false },
    ],
  },
  {
    question: "A 52-year old female patient is receiving medical treatment for a possible tuberculosis infection. The patient is a U.S. resident but grew-up in a foreign country. She reports that as a child she received the BCG vaccine (bacille Calmette-Guerin vaccine). Which physician’s order below would require the nurse to ask the doctor for an order clarification?",
    answers: [
      { text: "PPD (Mantoux test)", correct: true },
      { text: " Chest x-ray", correct: false },
      { text: " QuantiFERON-TB Gold (QFT)", correct: false },
      { text: "Sputum culture", correct: false },
      { text: "CT", correct: false },
    ],
  },
  {
    question: "Which of the following is Correct about the Lupus of larynx? 1) Glottis is involved first in Lupus 2) Lupus involves the anterior part of the larynx 3) Lupus larynx is a painful condition 4) Treatment is anti-tubercular drugs",
    answers: [
      { text: "Only 2,4 is correct", correct: true },
      { text: "1,2,3,4 is correct", correct: false },
      { text: "Only 1,3 is correct", correct: false },
      { text: "Only 1,2,3 is correct", correct: false },
      { text: "nan", correct: false },
    ],
  },
  {
    question: "The patient complains of discomfort in the throat when swallowing and bad breath. Objectively: on the surface of the left tonsil there is an ulcer with roller-shaped rounded edges, the smooth bottom is covered with a gray film. The right tonsil is unchanged. diagnosis-primary syphillis, chancroid of tonsil. What test will you do to prove this diagnose?",
    answers: [
      { text: "microscopy of pathological material to identify Treponema pallidum", correct: true },
      { text: "biopsy", correct: false },
      { text: "laryngoscopy", correct: false },
      { text: "PCR for treponema pallidum", correct: false },
      { text: "CT of ENT organs", correct: false },
    ],
  },
  {
    question: "What is simulation?",
    answers: [
      { text: "Overstatement of existing disease ", correct: true },
      { text: "An attempt to hide an existing disease", correct: false },
      { text: "Image of a non-existent disease", correct: false },
      { text: "An attempt to hide a symptom of the disease", correct: false },
      { text: "An attempt to hide several symptoms of the disease", correct: false },
    ],
  },
  {
    question: "A 40-year old man, profession is a pilot has vertigo, hearing loss, tinnitus, sense of fullness for 3 days.  Hearing loss is unilateral, pure tone audiometry - there is sensorineural hearing loss. What is the most likely diagnosis?",
    answers: [
      { text: "Meniere's disease", correct: true },
      { text: "Chronic otitis media", correct: false },
      { text: "Otosclerosis", correct: false },
      { text: "Otitis externa", correct: false },
      { text: "Eustachitis", correct: false },
    ],
  },
  {
    question: "A pilot 29 years old suffered an ear injury during a competition - a blow to the auricle with an open palm. Immediately after the injury, the patient felt severe pain in the ear, noise, short-term dizziness, but did not lose consciousness. On otoscopy: the ear canal is free and the area is hyperemic with areas of hemorrhage. Which treatment to the ear we use?",
    answers: [
      { text: "Ofloxacin topically", correct: true },
      { text: "Local heat", correct: false },
      { text: "Clotrimazol ointment", correct: false },
      { text: "Ear toilet", correct: false },
      { text: "Erythromycin", correct: false },
    ],
  },
  {
    question: "The glottis in the presence of vocal nodules in the larynx during phonation has the shape of:",
    answers: [
      { text: "hourglass", correct: true },
      { text: "triangle", correct: false },
      { text: "rectangle", correct: false },
      { text: "oval", correct: false },
      { text: "round", correct: false },
    ],
  },
  {
    question: "The patient 41 year old was transported by ambulance from the scene of a car accident with complaints of pain in the nose, altered shape of the nose, nausea, and headache.On examination, there is a sharp retraction of the nasal bridge and minor hematomas in the paraorbital area on both sides. The patient is a little inhibited, answers questions slowly, and communication is difficult. What managment?",
    answers: [
      { text: "General radiography of the skull bones", correct: true },
      { text: "X-ray of the paranasal sinuses", correct: false },
      { text: "Anterior nasal packing", correct: false },
      { text: "Posterior nasal packing", correct: false },
      { text: "Observation", correct: false },
    ],
  },
]


const questionElement = document.getElementById('question'); 
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const backButton = document.getElementById('back-btn');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  backButton.innerHTML = 'Back';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;

  const shuffledAnswers = [...currentQuestion.answers];
  for (let i = shuffledAnswers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
  }

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  backButton.style.display = 'none';

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';
  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });

  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = 'Solve Again';
  nextButton.style.display = 'inline';
  backButton.style.display = 'inline';
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

function handleBackButton() {
  currentQuestionIndex--;
  if (currentQuestionIndex >= 0) {
    showQuestion();
  }
}

backButton.addEventListener('click', () => {
  if (currentQuestionIndex > 0) {
    handleBackButton();
  }
});

searchButton.addEventListener('click', () => {
  const questionNumber = parseInt(searchInput.value, 10);
  if (questionNumber > 0 && questionNumber <= questions.length) {
    currentQuestionIndex = questionNumber - 1;
    showQuestion();
  } else {
    alert('Please enter a valid question number between 1 and ' + questions.length);
  }
});

startQuiz();
