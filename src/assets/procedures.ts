export const PROCEDURES = {
"Lateral canthotomy": `Procedure: Lateral canthotomy
Date/Time: {insert datetime}
Operator: Me
Indication: Suspected orbital compartment syndrome
Consent: [Written consent obtained: Discussed risks/benefits including infection, bleeding, globe injury, and cosmetic deformity; Emergent consent][ from patient; from proxy; implied]
Side selected: [Right; Left; Bilateral]
Location: Lateral Canthus
Preparation: Patient placed in supine position. Affected eye prepped and draped in a sterile fashion.
Anesthesia: Local anesthetic ([other]ml Lidocaine) administered to the lateral canthus.
Devascularization: Lateral canthal tissue clamped with hemostat for 60 seconds to provide hemostasis.
Canthotomy: Full-thickness incision made at the lateral canthus using iris scissors.
Cantholysis: Inferior lateral canthal crus identified and transected with scissors to adequately mobilize the lid.
Results: Immediate decrease in proptosis and measured reduction in intraocular pressure.
Hemostasis: Achieved via clamping and/or direct pressure.
Number of Attempts: [1;2;3;other]
Complications: [None; Hematoma; Globe injury; Persistent elevated IOP; other]
Post-Procedure Assessment: Immediate relief of orbital tension. IOP reassessed and improved. Patient tolerated the procedure well.`,
"Laceration repair": `Procedure: Laceration Repair
Date/Time: {insert datetime}
Operator: Me
Indication: Traumatic skin laceration requiring primary closure for healing and hemostasis.
Consent: [Verbal consent obtained: Discussed risks, benefits including infection, scarring, wound dehiscence, vascular, and nerve injury; Emergent consent] [ from patient; from proxy; implied]
Side selected: [Right; Left; Midline]
Location: [scalp;forehead;arm;hand;finger;chest;abdomen;back;leg;feet;toe]
Preparation: Wound length measured at [2;4;6;other] cm. Area prepped and draped in a [clean;sterile] fashion.
Anesthesia: [Local infiltration with lidocaine administered for adequate pain control;Nerve block;Topical] using [5;10;other]ml of [1% lidocaine;1% lidocaine with epi;other]
Exploration: Wound bed explored in a bloodless field; no foreign bodies or deep structure involvement (tendon, bone, or major vessel) identified.
Irrigation: Wound cleansed and irrigated with [Normal Saline; Tap water; other].
Closure: Wound edges approximated using [other] [3-0;4-0;5-0;6-0;other] [Ethilon;Prolene;Fast gut;other] in a [simple; complex] fashion.
[{} Deep sutures were placed using {} Vicryl; ;other]
Hemostasis: Achieved with [Direct pressure; Suturing; Cautery].
Neurovascular Status: Distal neurovascular status intact post-procedure.
Dressing: [Antibiotic ointment and non-adherent dressing; Skin adhesive; other] applied.
Number of Attempts: [1;other]
Complications: [None; Hematoma; Persistent bleeding; other]
Post-Procedure Assessment: Wound edges well-approximated without tension. Dressing clean, dry, and intact.
Patient tolerated the procedure well.
Discharge Instructions: Wound care provided; return precautions for signs of infection (redness, warmth, pus, fever) and suture removal timing verbalized by patient.`,
"Lumbar Puncture": `Procedure: Lumbar Puncture
Procedure Date/Time performed: {insert datetime}
Indication: [diagnostic; therapeutic].
Consent: [Signed consent obtained after discussing benefits and risks including infection, bleeding, paralysis, and post-dural puncture headache;Emergent consent] [ from patient; from proxy; implied]
Patient positioned in the {upright;lateral decubitus} position. 
The L3-L4 interspace was identified and the skin was prepped and draped in a sterile fashion. Local anesthesia was achieved with [5;other]ml 1% lidocaine}. 
A [20; 22;other] gauge spinal needle was inserted into the L3-L4 interspace. 
[Clear; Blood-tinged; Xanthochromic] CSF was obtained. 
Opening pressure was measured at [other] cm H2O. 
CSF was collected in [4; 3;other] sterile tubes and sent to the lab. 
The needle was removed with stylet in place and a sterile dressing was applied. Patient tolerated the procedure well with no immediate complications observed.`,
"CPR":
`Procedure: CPR
Procedure Date/Time performed: {insert datetime} 
Chest compressions performed per ACLS protocol. Airway secured and ventilations provided via [BVM; LMA; ET tube]. 
Initial cardiac rhythm identified as [VF; VT; PEA; Asystole]. 
Reversible causes systematically evaluated, including hypoxia, hypovolemia, hydrogen ion (acidosis), hypo/hyperkalemia, hypothermia, tension pneumothorax, tamponade, toxins, and thrombosis. 
Vascular access obtained via [Peripheral IV; IO; Central Line]. 
Epinephrine administered as indicated. Total duration of resuscitation was [other] minutes. 
[ROSC achieved; Efforts ceased and time of death called at {}]. Please review code sheet for specific medication dosages and chronologic flow.`,
"Intubation":
`Procedure Date/Time performed: {insert datetime} 
Patient required airway protection due to [respiratory failure; loss of airway patency;anticipated clinical decline;other]. 
Consent: Implied emergent
Pre-oxygenated with 100% O2 via [non-rebreather; BVM; High-flow nasal cannula]. 
Sedation and paralytics administered per rapid sequence intubation protocol with [ketamine and rocuronium; etomidate and succinylcholine; propofol and rocuronium]. 
Endotracheal tube size [6.0;6.5;7.0; 7.5; 8.0] placed under [video; direct] laryngoscopy with visualization of vocal cords. 
Tube placement confirmed by end-tidal CO2, auscultation of bilateral breath sounds, and chest rise. 
Tube secured at [20;21;22;other] cm at the [teeth; lips]. 
No complications encountered.`,
"Procedural sedation":
`Procedure: Procederal Sedation
Date/Time performed: {insert datetime}. 
Indication: [reduction;splinting;laceration repair;other]. 
Consent: [Informed written consent was obtained after discussing risk and benefits including aspiration, respiratory failure, hospitalization, death; Emergent consent]  [ from patient; from proxy; implied]
Airway and time of last meal were assessed; appropriate resuscitation equipment was present at the bedside. Cardiac monitoring, pulse oximetry, and continuous end-tidal CO2 were used throughout. 
A universal 'Time Out' was performed. Sedation was administered using [ketamine; propofol; etomidate; midazolam and fentanyl] titrated to effect. 
Complications: [none;vomiting;hypoxia or apnea requiring repositioning;bvm;rescue airway;intubation]
Disposition: [discharged home in stable condition once the patient was able to maintain alertness and orientation, tolerate oral intake, ambulate with steady gait, and was in the care of adult supervision/driver;other]`,
"Splint": 
`Procedure: Splinting
Procedure Date/Time: {insert datetime}
Operator: Me
Indication: Immobilization of [injury;fracture;reduction;other] for pain control and stabilization.
Consent: [Verbal consent obtained: Discussed risks/benefits including skin breakdown, pressure sores, and compartment syndrome; Emergent consent] [ from patient; from proxy; implied]
Side selected: [Right; Left; Bilateral]
Location: [shoulder;elbow;forearm;wrist;finger;long leg;short leg;ankle;foot]
Technique: [ulnar gutter;thumb spica;volar;sugar-tong;long leg;posterior+stirrup short leg;posterior short leg]
Pre-Procedure Assessment: Distal neurovascular status (pulse, sensation, motor function) evaluated and found to be intact.
Alignment: Limb positioned in proper anatomical/neutral alignment for splinting.
Application: [preformed;orthoglass;other] applied with appropriate padding to bony prominences.
Security: Splint secured with elastic bandage ensuring appropriate tension.
Post-application assessment confirms distal neurovascular status remains intact.
Splint is secure, allowing for expected swelling without evidence of neurovascular compromise.
Complications: [None; Skin irritation; other]
Limb successfully immobilized in proper alignment.Patient tolerated procedure well.
Discharge Instructions: Splint care and elevation instructions provided.
Return Precautions: Patient educated on signs of compartment syndrome (increased pain, numbness, tingling, or cool/pale skin) and advised to return immediately if they occur.`,
"Reduction":
`Procedure: Reduction
Procedure Date/Time: {insert datetime}
Operator: Me
Consent: [Informed consent was obtained after discussing risk of pain, further injury;Emergent consent] [ from patient; from proxy; implied]
Neurovascular status assessed and documented as [intact;not intact] pre-reduction.
[Shoulder; Elbow; wrist; Finger; Knee; Patella; Ankle; Toe;other] reduction performed.
Techniqued used: [traction-countertraction; Kocher technique; Stimson technique; Milch technique; Cunningham technique; procedural sedation and manipulation]. 
Successful reduction was confirmed by clinical exam and post-reduction imaging. 
Neurovascular status was reassessed and remained intact post-procedure. Patient tolerated the procedure well. 
Immobilization was applied via [splint; sling; knee immobilizer] and post-reduction care instructions were provided.`,
"Paracentesis":
`Procedure: Paracentesis
Procedure performed on {insert datetime}. 
Consent: [Written informed consent was obtained after discussing the risks of infection, bleeding, and bowel injury.;Emergent] [ from patient; from proxy; implied]
Patient was positioned supine with the head of the bed elevated. The abdomen was prepped and draped in a sterile fashion. 
Local anesthesia was administered at the insertion site using [5;other]ml 1% lidocaine. 
Ultrasound guidance was used to identify an appropriate fluid pocket in the [Left Lower Quadrant; Right Lower Quadrant]. 
A needle/catheter was inserted into the peritoneal cavity and [other] mL of [serous; straw-colored; bloody; turbid] ascitic fluid was aspirated. 
Fluid was sent for analysis. The needle was removed and a sterile dressing was applied. No immediate complications were noted and the patient tolerated the procedure well.`,
"Arthrocentesis":
`Procedure: Arthrocentesis
Procedure performed on {insert datetime}. 
Consent: [Written informed consent was obtained after discussing the risks of vascular injury, bleeding, and joint infection.;Emergent] [ from patient; from proxy; implied]
The [Knee; Shoulder; Elbow; Ankle; Wrist;other] joint area was prepped and draped in a sterile fashion. 
Local anesthesia was administered at the insertion site using [other]ml 1% lidocaine}. 
Using aseptic technique, a needle was inserted into the joint space. [other] mL of [clear; yellow/straw-colored; turbid/cloudy; bloody] synovial fluid was aspirated successfully.
A sterile dressing was applied. No immediate complications were observed and the patient tolerated the procedure well.`,
"Delivery":
`Procedure: Delivery
Procedure performed on {insert datetime}. 
Patient was found to be in active labor with imminent delivery.
Patient was deemed unstable for transfer to L&D based on [crowning/bulging of perineum;significant maternal hemorrhage;eclampsia]. 
Cervix was found to be fully dilated.
No immediate absolute contraindication to vaginal delivery noted (i.e. placenta previa, genital herpes,umbilical cord prolapse)
[Gentle digital stretching with lubricated finger to help assist with delivery;other]
Neonate was found to be in [cephalic position;footling breech;frank breech;complete breech].
Finger was used to sweep for nuchal cord and found to [be;not be] present. 
[No turtle sign noted and delivery continued to progress normally;turtle sign present and shoulder dystocia was identified]
Gentle pressure was used to deliver the anterior then posterior shoulder then rest of the body.
Spontaneous vaginal delivery was achieved at [other] without complications. 
The perineal area was inspected and [no; a 1st degree; a 2nd degree] laceration was identified and [repaired; not requiring repair]. 
Neonate was delivered with Apgar scores of [other] at 1min, [other] at 5min, and [other] at 10min. 
Neonatal care included [drying and stimulation; bulb suctioning; blow-by oxygen]. 
Neonate noted to have [good;poor] tone and cry and [placed on mother for delayed cord clamping;cord was cut and clamped immediate for neonatal resusitation].
Placenta was delivered [spontaneously; with manual assistance] and was found to be [intact; missing fragments]. 
Estimated blood loss was [other] mL. 
Mother and infant remained stable post-delivery.`,
"Neonatal Resuscitation":
`Procedure: Neonatal Resuscitation
Date/Time: {insert datetime}
Operator: Me
Indication: [Neonatal depression at birth; Respiratory distress; Apnea; Bradycardia]
Consent: Implied/Emergent consent for life-saving intervention
Patient Presentation: [Term; Preterm]; [Meconium present; Clear fluid without meconium]
Initial Actions: Infant placed under radiant warmer, dried, and stimulated. 
Airway positioned and suctioned as needed.
Respiratory Support: [CPAP applied for labored breathing/persistent cyanosis;PPV initiated via T-piece/Bag-mask at {}mmH2O]
Endotracheal intubation performed with size [2.5; 3.0; 3.5] ET tube
Circulatory Support: [Chest compressions initiated for HR < 60 bpm, Coordinated with PPV at 3:1 ratio, 
Medications/Fluids:[Epinephrine administered: IV/IO/ET][Volume expansion: Normal Saline bolus administered]Results
Response to Intervention: [Immediate cry; Improved tone; Increase in HR > 100 bpm]
Respiratory Effort: [Spontaneous; Assisted]APGAR Scores: 1 min: {0-10}; 5 min: {0-10}; [10 min: {0-10}]
Complications: [None; Pneumothorax; Epistaxis; other]
Post-Procedure Assessment:Patient stabilized and transferred to [NICU; Mother's bedside; Nursery].`,
"Thoracentesis":
`Procedure: Thoracentesis
Procedure performed on {insert datetime}. 
Indication: [diagnostic; therapeutic]. 
Consent: [Written informed consent was obtained after discussing risks of pneumothorax, bleeding, and infection.;Emergent] [ from patient; from proxy; implied]
Patient was positioned [sitting upright leaning forward; in the lateral decubitus position]. 
The site was identified at the [4th;5th] intercostal space in the [posterior axillary; mid-scapular] line. 
The area was prepped and draped in a sterile fashion. 
Local anesthesia was administered using [5;other]ml 1% lidocaine. 
Ultrasound guidance was used to identify the pleural fluid pocket. A needle/catheter was inserted and [other] mL of [serous; bloody; turbid; straw-colored] fluid was aspirated. 
The needle was removed and a sterile dressing was applied. 
Breath sounds were [symmetrical; decreased on the procedure side] post-procedure. 
No immediate complications were observed.`,
"Chest tube":
`Procedure: Chest tube
Procedure performed on {insert datetime}. 
Indication: [Pneumothorax; Hemothorax; Pleural effusion; Presumed empyema]
Consent: [Written informed consent was obtained after discussing risks of lung injury, vascular injury, intra-abdominal injury, infection, and bleeding.;Emergent consent] [ from patient; from proxy; implied]
Patient was positioned supine with the ipsilateral arm abducted. Skin was prepped and draped using sterile technique. 
Local anesthesia was administered using [5;other]ml 1% lidocaine}.
A small incision was made at the [4th; 5th] intercostal space in the [mid-axillary; anterior axillary] line. Blunt dissection was performed to enter the pleural space. 
A [14Fr pigtail; 28Fr chest tube; 32Fr chest tube; 36Fr chest tube] was inserted and secured with [silk sutures; nylon sutures].
The tube was connected to [Pleur-evac to suction; Pleur-evac to water seal; Heimlich valve]. 
Correct placement was confirmed by rush of air, drainage of fluid, condensation in the tube and post-procedure imaging. 
No immediate complications were noted and the patient tolerated the procedure well.`,
"Pericardiocentesis":
`Procedure: Pericardiocentesis
Procedure performed on {insert datetime}. 
Indication: [Cardiac tamponade; Pericardial effusion with suspected tamponade]. 
Consent: [Written informed consent was obtained after discussing risk of cardiac injury, vessel injury, lung injury, infection, bleeding; Emergent consent][ from patient; from proxy; implied]
Patient was positioned supine with the head of the bed elevated to [30; 45] degrees. 
The subxiphoid and precordial areas were prepped and draped in a sterile fashion. 
Local anesthesia was administered using [5;other]ml 1% lidocaine. 
Under continuous ultrasound guidance, a needle was inserted via the [subxiphoid; parasternal] approach into the pericardial space. 
[other] mL of [serosanguinous; bloody; clear/straw-colored] fluid was aspirated. 
A drain was [placed and secured; not placed].
Immediate hemodynamic improvement was observed. 
No immediate complications were noted and the patient tolerated the procedure well.`,
"Central line":
`Procedure: Central line"
Procedure performed on {insert datetime}. 
Indication: [vasopressor administration; difficult access; caustic infusions]. 
Consent: Written informed consent was obtained after discussing risks including pneumothorax (if relevant), vascular injury, bleeding, and infection.;Emergent] [ from patient; from proxy; implied]]
Patient was positioned [Trendelenburg; Reverse trendelenburg supine] to distend veins and reduce air emboli risk. 
The [Right; Left] [Internal Jugular; Subclavian; Femoral] vein site was prepped and draped using full sterile barrier technique. 
Local anesthesia was administered using [3,other]ml of 1% lidocaine. 
Under ultrasound guidance, the target vein was identified and accessed. 
Using the Seldinger technique, a guidewire was placed, followed by a [7.0 French Triple Lumen; 8.5 French Mac; 4.0 French Double Lumen] catheter. The catheter was advanced to a depth of [ ] cm and secured with [sutures; StatLock]. 
Proper placement was confirmed by [blood return in all ports; ultrasound visualization of wire in the vessel]. 
No immediate complications were observed. Post-procedure chest X-ray was ordered for placement confirmation and to rule out pneumothorax.`,
"Transvenous Pacing":
`Procedure: Transvenous Pacing
Procedure performed on {insert datetime}. 
Indication: [Symptomatic bradycardia; High-grade AV block; Unstable drug-resistant bradyarrhythmia]. 
Consent: [Written informed consent was obtained after discussing risks including vascular, lung, cardiac injury, bleeding, infection; Emergent consent] [ from patient; from proxy]. 
The [Right; Left] [Internal Jugular; Subclavian] vein was prepped and draped using full sterile barrier technique. 
Local anesthesia was administered using [3;other]ml 1% lidocaine. 
Under ultrasound guidance, a [6.0 fr;8.5 fr;other] introducer sheath was placed in the target vein using the Seldinger technique. 
A bipolar pacing catheter was advanced through the sheath. Electrical capture was achieved at [1;2;3;other]mA with the rate set to [60;70;other] bpm and sensitivity set to [2;other]mV. Mechanical capture was confirmed by [palpable pulse matching pacer rate; bedside ultrasound showing ventricular contraction; arterial line waveform]. 
The catheter was secured at a depth of [35;40;other]cm. 
No immediate complications observed. 
Post-procedure chest X-ray was ordered to confirm lead placement and rule out pneumothorax}.`,
"Transcutaneous Pacing":
`Procedure: Transcutaneous Pacing
Procedure performed on {insert datetime}. 
Indication: [Symptomatic bradycardia; High-grade AV block; Unstable drug-resistant bradyarrhythmia]. 
Consent: [Verbal consent obtained: Discussed risks/benefits including skin burns, discomfort, and failure to capture; Emergent consent] [ from patient; from proxy; implied]. 
Location: [Anterior-Posterior;Anterior-Lateral] pad placement
Analgesia: [IV sedation/analgesia administered for comfort; Not feasible due to clinical instability].
Settings: Pacer leads connected to defibrillator/monitor. Mode set to [Demand; Asynchronous].
Rate: Initial rate set at [60;70;other] bpm.
Current (Output): Current increased incrementally until electrical capture (wide QRS and tall T-wave following pacer spike) was achieved at [60;65;70;other] mA.
Results: Mechanical Capture confirmed by [Palpable pulse correlating with pacer rate; Pulse oximetry plethysmograph; Arterial line waveform].
Hemodynamic Response: [Improved BP; Improved mental status; Skin warmth/color improved].
Current Output for Maintenance: [60;65;70;other] mA.
Complications: [None; Failure to capture; Patient intolerance; Skin irritation; other]
Post-Procedure Assessment:
Continuous pacing maintained with stable mechanical capture.
Patient tolerated procedure.`,
"Arterial Line":
`Procedure: Arterial Line
Procedure Date/Time: {insert datetime}
Operator: Me
Indication: [Continuous hemodynamic monitoring; Frequent arterial blood gas sampling; Failure of non-invasive BP monitoring]
Consent: [Verbal consent obtained: Discussed risks, benefits including bleeding, hematoma, infection, arterial thrombosis, and limb ischemia; Emergent consent][ from patient; from proxy; implied]
Side selected: [Right; Left]
Location: [Radial; Femoral; Brachial; Dorsalis Pedis]
Pre-Procedure Assessment: [Allen test performed and positive; Distal pulses confirmed].
Preparation: Patient positioned appropriately. Area prepped and draped in a sterile fashion.
Anesthesia: [Local anesthesia with 1% lidocaine;None] 
Insertion: Under [Ultrasound guidance; Palpation], a catheter was successfully inserted into the artery using sterile [Seldinger;catheter-over-needle] technique.
Confirmation: Successful cannulation confirmed by pulsatile blood return and visualization of arterial waveform via pressure transducer.
Securing: Catheter secured with [Sutures; Adhesive device] and sterile dressing applied.
Waveform: Sharp arterial waveform visualized on monitor.
Distal Perfusion: Distal extremity remains warm with appropriate capillary refill.
Number of Attempts: [1; 2; 3; other]
Complications: [None; Hematoma; Arterial spasm; other]
Post-Procedure Assessment: Arterial line flushing well without resistance. Waveform confirmed and transducer. Dressing clean, dry, and intact.
Patient tolerated procedure well.`,
"US Peripheral IV": `Procedure: US Guided Peripheral IV
Date/Time: {insert datetime}
Operator: Me
Indication: Difficult peripheral vascular access after multiple failed nursing attempts.
Consent: [Verbal consent obtained: Discussed risks, benefits including infection, bleeding, infiltration, arterial puncture, nerve injury;Emergent consent] [ from patient; from proxy; implied]
Side selected: [Right;Left]
Location: [Forearm;Upper arm;Antecubital;other]
Ultrasound used to identify suitable vein. Skin cleaned with antiseptic and allowed to dry.
Sterile/clean technique used. Probe covered with sterile sheath and gel.
Dynamic ultrasound guidance used with vein visualized in short axis. 
Vein was identified by thin walled appearance, nonpulsitility, and easy compressibility. 
Needle inserted under direct visualization.
Successful venous cannulation confirmed by: Flash of blood and visualization of needle in vessel.
Catheter advanced and needle withdrawn. IV flushed with saline without resistance. Line secured with dressing.
Number of Attempts: [1;2;3;other]
Complications: [None; Hematoma; Arterial puncture; Infiltration/extravasation;other]
Post-Procedure Assessment: Good blood return; flushes easily without swelling or pain; dressing clean, dry, intact; patient tolerated procedure well`,
};
