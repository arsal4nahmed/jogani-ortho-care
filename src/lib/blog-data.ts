export type ArticleSection = { heading: string; body: string };
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  intro: string;
  sections: ArticleSection[];
  takeaway: string;
};
export type Region = {
  id: string;
  name: string;
  description: string;
  articles: Article[];
};

export const regions: Region[] = [
  {
    id: "neck",
    name: "Neck",
    description: "Cervical spine conditions, posture-related pain, and when to seek a specialist.",
    articles: [
      {
        slug: "understanding-cervical-spondylosis",
        title: "Understanding Cervical Spondylosis",
        excerpt: "Age-related wear of the neck joints — what symptoms to watch for and how it's managed.",
        readTime: "6 min read",
        intro:
          "Cervical spondylosis is the medical term for age-related wear and tear of the bones, discs, and joints of the neck. By age 60, it shows up on the X-rays of nearly nine out of ten people — yet only a fraction ever develop troublesome symptoms.",
        sections: [
          {
            heading: "What's actually happening",
            body: "The cushioning discs between your neck vertebrae lose water content and shrink over time. As they flatten, the surrounding bones may form small spurs and the small facet joints become arthritic. The result is a stiffer, less shock-absorbing neck.",
          },
          {
            heading: "Symptoms to watch for",
            body: "Most people notice neck stiffness, especially in the morning, and a dull ache that worsens by the end of the day. Some develop headaches at the base of the skull. Warning signs that need urgent attention include numbness, weakness, or clumsiness in the hands, and changes in balance or bladder function.",
          },
          {
            heading: "How it's managed",
            body: "The majority of patients respond beautifully to a combination of targeted physiotherapy, posture correction, anti-inflammatory medication during flare-ups, and ergonomic changes at work. Imaging (MRI) is reserved for those with neurological symptoms or pain not responding to conservative care. Surgery is considered in fewer than five percent of cases.",
          },
        ],
        takeaway:
          "Cervical spondylosis is common, manageable, and rarely an emergency — but new weakness, numbness, or balance issues are red flags worth a same-week orthopedic consult.",
      },
      {
        slug: "when-neck-pain-needs-a-specialist",
        title: "When Neck Pain Needs a Specialist",
        excerpt: "Red-flag signs that mean your neck pain is more than muscle strain.",
        readTime: "4 min read",
        intro:
          "Most neck pain is muscular and settles within a week or two. But certain patterns signal that something more serious is at play and deserve a specialist's eye.",
        sections: [
          {
            heading: "Pain that radiates down the arm",
            body: "Sharp, electric pain travelling into the shoulder, arm, or fingers often points to a pinched nerve in the cervical spine. If it's accompanied by numbness or weakness, evaluation should not be delayed.",
          },
          {
            heading: "Pain after trauma",
            body: "Neck pain following a fall, road accident, or sports injury — particularly with severe stiffness — should be assessed before you continue normal activity. An X-ray or MRI may be needed to rule out fracture or ligament injury.",
          },
          {
            heading: "Pain with systemic signs",
            body: "Neck pain combined with fever, unexplained weight loss, night sweats, or a known history of cancer warrants prompt investigation. These are uncommon but serious causes that benefit from early diagnosis.",
          },
        ],
        takeaway:
          "Simple neck strain improves within two weeks. Anything radiating down the arm, following an injury, or accompanied by fever or weight loss deserves a specialist consultation.",
      },
      {
        slug: "posture-and-tech-neck",
        title: "Posture & Tech Neck in the Screen Era",
        excerpt: "Simple daily corrections to undo hours of phone- and laptop-induced strain.",
        readTime: "5 min read",
        intro:
          "Every inch your head tilts forward adds roughly four to five kilograms of effective load on your neck muscles. Multiply that across an 8-hour workday hunched over a laptop and you have a recipe for chronic strain.",
        sections: [
          {
            heading: "The cost of forward head posture",
            body: "Over months and years, sustained forward-head posture overloads the cervical extensor muscles, fatigues the upper back, and shortens the chest muscles. Pain typically appears between the shoulder blades first, then climbs into the neck and base of the skull.",
          },
          {
            heading: "Workstation fixes that actually help",
            body: "Raise your monitor so the top of the screen sits at eye level. Pull the chair in so your elbows rest at 90 degrees. Use a separate keyboard if you work on a laptop. These three changes alone resolve a surprising share of office-related neck pain within a few weeks.",
          },
          {
            heading: "Micro-breaks beat marathon stretching",
            body: "A 30-second postural reset every 30 minutes is more effective than a 10-minute stretch once a day. Roll your shoulders back, tuck your chin gently, and look toward the horizon. Set a recurring reminder until it becomes habit.",
          },
        ],
        takeaway:
          "Tech neck is reversible. Fix your screen height, take a 30-second reset every half hour, and most strain-related neck pain melts away in 4–6 weeks.",
      },
    ],
  },
  {
    id: "shoulder",
    name: "Shoulder",
    description: "From rotator cuff injuries to frozen shoulder and instability.",
    articles: [
      {
        slug: "rotator-cuff-tears-explained",
        title: "Rotator Cuff Tears Explained",
        excerpt: "Causes, symptoms, and the modern arthroscopic options for repair.",
        readTime: "7 min read",
        intro:
          "The rotator cuff is a group of four small but mighty muscles that wrap around the shoulder, keeping the ball centred in the socket. Tears here are one of the most common causes of shoulder pain after age 40.",
        sections: [
          {
            heading: "Why tears happen",
            body: "Tears fall into two groups. Acute tears follow a fall or a sudden lifting injury. Degenerative tears develop slowly as the tendon wears with age, often without any clear injury. Smoking, diabetes, and repetitive overhead work all accelerate the wear.",
          },
          {
            heading: "Symptoms that point to the cuff",
            body: "Pain on the outer shoulder, difficulty sleeping on that side, and weakness lifting the arm overhead are classic signs. Many patients describe a dull ache that flares whenever they reach behind the back or into a high cupboard.",
          },
          {
            heading: "Modern treatment options",
            body: "Small partial tears often respond to physiotherapy, activity modification, and occasionally a steroid injection. Larger or complete tears in active patients are now repaired arthroscopically — through three to four keyhole incisions — with same-day discharge possible in most cases. Recovery to full activity takes four to six months.",
          },
        ],
        takeaway:
          "Persistent shoulder pain with overhead weakness deserves an ultrasound or MRI. Arthroscopic repair is highly successful when chosen at the right time.",
      },
      {
        slug: "frozen-shoulder-recovery",
        title: "Frozen Shoulder: A Recovery Roadmap",
        excerpt: "What to expect during the freezing, frozen, and thawing phases.",
        readTime: "6 min read",
        intro:
          "Frozen shoulder, or adhesive capsulitis, is a self-limiting but often frustrating condition where the shoulder capsule becomes inflamed and tight. Recovery follows a predictable three-stage pattern.",
        sections: [
          {
            heading: "Stage 1 — Freezing (6 weeks to 9 months)",
            body: "Pain dominates this phase, often disturbing sleep. Range of motion gradually decreases. Aggressive stretching here makes things worse — gentle pendulum exercises, heat, and pain control are the priority.",
          },
          {
            heading: "Stage 2 — Frozen (4 to 12 months)",
            body: "Pain begins to ease but stiffness becomes the main problem. This is the phase where structured physiotherapy, mobilization, and sometimes a hydrodilatation procedure under ultrasound guidance can meaningfully accelerate recovery.",
          },
          {
            heading: "Stage 3 — Thawing (6 months to 2 years)",
            body: "Motion gradually returns. Most patients regain near-full function. Diabetics tend to take longer and may benefit from earlier intervention. Manipulation under anaesthesia or arthroscopic capsular release is reserved for the small group whose stiffness plateaus.",
          },
        ],
        takeaway:
          "Frozen shoulder almost always resolves. Knowing which stage you're in determines the right treatment — and avoids the common mistake of over-stretching during the painful phase.",
      },
      {
        slug: "shoulder-dislocation-first-aid",
        title: "Shoulder Dislocation: First Aid & Next Steps",
        excerpt: "What to do in the first hour and why proper follow-up prevents recurrence.",
        readTime: "5 min read",
        intro:
          "A dislocated shoulder is one of the most painful musculoskeletal injuries. Quick, calm action in the first hour makes a real difference to long-term outcomes.",
        sections: [
          {
            heading: "What to do immediately",
            body: "Do not try to push the shoulder back yourself or let an untrained bystander attempt it — improper reduction can damage nerves and blood vessels. Support the arm against the body with a sling or rolled-up cloth and head to an emergency room. Ice helps with pain en route.",
          },
          {
            heading: "What happens at the hospital",
            body: "An X-ray confirms the dislocation and rules out fracture. The shoulder is then gently reduced under sedation. A post-reduction X-ray confirms the ball is back in the socket, and the arm is immobilized in a sling for one to three weeks.",
          },
          {
            heading: "Preventing the next one",
            body: "The first dislocation often tears the labrum — a cartilage rim around the socket. Without proper rehabilitation or, in young athletes, surgical repair, recurrence rates exceed 70 percent. A consultation in the weeks after the injury is essential to plan the right course.",
          },
        ],
        takeaway:
          "Never reduce a dislocated shoulder yourself. After reduction, follow up within two weeks — surgical stabilization may be the difference between one event and a lifetime of recurrences.",
      },
    ],
  },
  {
    id: "elbow",
    name: "Elbow",
    description: "Overuse injuries, nerve entrapments, and traumatic fractures.",
    articles: [
      {
        slug: "tennis-elbow-vs-golfers-elbow",
        title: "Tennis Elbow vs Golfer's Elbow",
        excerpt: "Two similar names, two different conditions — and how to treat each.",
        readTime: "5 min read",
        intro:
          "Both conditions are tendon overuse injuries around the elbow, but they affect opposite sides — and the people who get them are rarely tennis players or golfers.",
        sections: [
          {
            heading: "Tennis elbow (lateral epicondylitis)",
            body: "Pain on the outer side of the elbow, worsened by gripping, lifting a coffee cup, or turning a doorknob. The wrist extensor tendons are the culprit. Common in homemakers, IT professionals, and anyone who does repetitive gripping.",
          },
          {
            heading: "Golfer's elbow (medial epicondylitis)",
            body: "Pain on the inner side of the elbow, worsened by squeezing, throwing, or lifting with the palm up. The wrist flexor tendons are involved. Less common than tennis elbow but treated along similar principles.",
          },
          {
            heading: "Treatment that works",
            body: "Both conditions respond to activity modification, a counterforce brace, eccentric loading exercises with a physiotherapist, and sometimes platelet-rich plasma (PRP) injections. Steroid injections give quick relief but show worse long-term outcomes — they are used sparingly. Surgery is rarely needed.",
          },
        ],
        takeaway:
          "Lateral pain is tennis elbow, medial pain is golfer's elbow. Both heal with structured loading exercises — patience and a good physiotherapist matter more than any injection.",
      },
      {
        slug: "cubital-tunnel-syndrome",
        title: "Cubital Tunnel Syndrome",
        excerpt: "When pins and needles in the ring and little finger point to a pinched nerve.",
        readTime: "6 min read",
        intro:
          "The ulnar nerve runs through a narrow channel on the inner side of the elbow — the same spot where you hit your 'funny bone.' Sustained pressure or repeated stretching here can cause numbness and weakness in the hand.",
        sections: [
          {
            heading: "Typical symptoms",
            body: "Tingling in the ring and little fingers, worse at night or when the elbow is bent for long periods (sleeping with a bent arm, holding a phone). In advanced cases, the hand becomes weaker and the small muscles between the fingers begin to waste.",
          },
          {
            heading: "Conservative care first",
            body: "Avoid resting the elbow on hard surfaces. A night splint that keeps the elbow gently extended often resolves mild cases in a few weeks. Nerve gliding exercises taught by a hand therapist can help.",
          },
          {
            heading: "When surgery is recommended",
            body: "If symptoms persist beyond three months, if there's measurable weakness, or if nerve conduction studies show significant compression, decompression surgery has excellent outcomes. The procedure is short, day-care, and most patients see improvement within weeks.",
          },
        ],
        takeaway:
          "Numbness in the ring and little fingers, especially at night, is rarely just a 'sleeping position' issue. Early evaluation prevents permanent muscle weakness.",
      },
      {
        slug: "elbow-fracture-recovery",
        title: "Elbow Fracture Recovery",
        excerpt: "Timelines, physiotherapy milestones, and regaining full range of motion.",
        readTime: "6 min read",
        intro:
          "The elbow is notoriously unforgiving after injury — it stiffens faster than almost any other joint. The right rehabilitation in the first six weeks determines how much motion you ultimately get back.",
        sections: [
          {
            heading: "Fracture types and treatment",
            body: "Simple, undisplaced fractures may be treated in a splint or sling. Displaced fractures of the radial head, olecranon, or distal humerus usually need surgical fixation with plates or screws so that early motion can begin.",
          },
          {
            heading: "Why early motion matters",
            body: "Unlike the wrist or ankle, the elbow does not tolerate prolonged immobilization. Gentle, supervised motion is started within days of surgery in most cases. Waiting six weeks for the bone to 'fully heal' before moving the joint is a recipe for permanent stiffness.",
          },
          {
            heading: "Realistic timeline",
            body: "Most patients regain functional motion by 3 months and near-full motion by 6 months. Strength continues to improve for up to a year. A small loss of terminal extension is common and rarely affects daily function.",
          },
        ],
        takeaway:
          "After an elbow fracture, the enemy is stiffness. Stick to your physiotherapy schedule from day one — it's more important than any imaging follow-up.",
      },
    ],
  },
  {
    id: "wrist",
    name: "Wrist",
    description: "Carpal tunnel, sprains, fractures, and tendon disorders of the hand.",
    articles: [
      {
        slug: "carpal-tunnel-syndrome",
        title: "Carpal Tunnel Syndrome",
        excerpt: "Why your hand goes numb at night and the conservative-to-surgical care ladder.",
        readTime: "6 min read",
        intro:
          "Carpal tunnel syndrome is the compression of the median nerve as it passes through a narrow tunnel at the base of the palm. It's one of the most common nerve disorders and, when treated early, is almost always reversible.",
        sections: [
          {
            heading: "Classic symptoms",
            body: "Tingling and numbness in the thumb, index, middle, and half of the ring finger — most often waking you up at night. Many patients shake the hand to 'wake it up.' Advanced cases lose grip strength and drop objects.",
          },
          {
            heading: "First-line treatment",
            body: "A neutral-position wrist splint worn at night relieves symptoms for the majority of mild cases. Ergonomic changes, weight management, and treating underlying conditions (diabetes, thyroid disorder) all help. A single guided steroid injection can buy six to twelve months of relief.",
          },
          {
            heading: "When to consider surgery",
            body: "Persistent numbness, weakness, or muscle wasting at the base of the thumb means the nerve is at risk. Carpal tunnel release — done either open or endoscopically — takes 15 minutes, is performed under local anaesthesia, and results in immediate symptom relief in most patients.",
          },
        ],
        takeaway:
          "Night numbness in the thumb side of the hand should not be ignored. A splint resolves mild cases; surgery is quick and highly successful when nerves show damage.",
      },
      {
        slug: "wrist-sprain-vs-fracture",
        title: "Wrist Sprain vs Fracture",
        excerpt: "How to tell the difference after a fall — and when an X-ray is essential.",
        readTime: "4 min read",
        intro:
          "Falling onto an outstretched hand is one of the most common ways to injure the wrist. Telling a sprain from a fracture at home is tricky — and missing a fracture can have long-term consequences.",
        sections: [
          {
            heading: "Signs that suggest a fracture",
            body: "Visible deformity, immediate severe swelling, inability to bear any weight through the wrist, pain right over the bone (especially the 'anatomical snuffbox' on the thumb side), or pain that's no better after 48 hours of rest and ice.",
          },
          {
            heading: "The scaphoid trap",
            body: "Scaphoid fractures — a small wrist bone — often don't show on the first X-ray. If pain at the base of the thumb persists despite a 'normal' X-ray, a repeat film at two weeks or an MRI is essential. Missed scaphoid fractures lead to long-term arthritis.",
          },
          {
            heading: "When in doubt, get imaged",
            body: "An X-ray is quick, inexpensive, and the cost of missing a fracture is far higher than the cost of a 'just in case' film. Splint the wrist, ice it, and get it evaluated within 24–48 hours.",
          },
        ],
        takeaway:
          "Any wrist injury that doesn't dramatically improve within 48 hours deserves an X-ray — and scaphoid fractures need a second look if the first film is clear.",
      },
      {
        slug: "de-quervains-tenosynovitis",
        title: "De Quervain's Tenosynovitis",
        excerpt: "A common 'mother's wrist' condition — diagnosis and treatment options.",
        readTime: "5 min read",
        intro:
          "De Quervain's tenosynovitis is inflammation of two tendons that run along the thumb side of the wrist. It's especially common in new mothers (from repeatedly lifting an infant) and in heavy phone users.",
        sections: [
          {
            heading: "The Finkelstein test",
            body: "Tuck your thumb into your palm, make a fist around it, and bend your wrist toward your little finger. Sharp pain along the thumb side of the wrist is a strong sign of De Quervain's. It's the test your doctor will do at the consultation.",
          },
          {
            heading: "Conservative care",
            body: "A thumb spica splint that immobilizes the thumb and wrist, combined with activity modification and anti-inflammatory medication, resolves the majority of cases within 4–6 weeks. Avoiding the trigger — usually a lifting or texting motion — is essential.",
          },
          {
            heading: "When more is needed",
            body: "A single corticosteroid injection into the tendon sheath has a very high success rate for stubborn cases. Surgery (a 10-minute release of the tendon sheath) is reserved for the small group who don't respond to two injections.",
          },
        ],
        takeaway:
          "Pain on the thumb side of the wrist with a positive Finkelstein test is classic De Quervain's. Splinting plus one injection cures most cases.",
      },
    ],
  },
  {
    id: "hip",
    name: "Hip",
    description: "Joint replacement, avascular necrosis, and soft-tissue hip pain.",
    articles: [
      {
        slug: "hip-replacement-what-to-expect",
        title: "Hip Replacement: What to Expect",
        excerpt: "A step-by-step walkthrough from surgery day to walking pain-free.",
        readTime: "8 min read",
        intro:
          "Total hip replacement is one of the most successful operations in all of medicine — over 95% of patients report excellent pain relief and restored function. Understanding the journey makes the experience far less daunting.",
        sections: [
          {
            heading: "Before surgery",
            body: "Pre-operative blood tests, an ECG, and a cardiac assessment are routine. You'll meet the anaesthetist, learn breathing exercises, and visit a physiotherapist who will teach you the post-op exercises in advance. Stopping smoking and optimizing diabetes control significantly reduces complications.",
          },
          {
            heading: "Surgery day",
            body: "The operation takes 60–90 minutes under spinal or general anaesthesia. The damaged ball and socket are replaced with a metal stem, ceramic or metal ball, and a polyethylene-lined socket. Modern implants are designed to last 20–30 years.",
          },
          {
            heading: "Recovery timeline",
            body: "Most patients stand and take a few steps the same day. You'll typically go home in 2–4 days, walking with a walker. By 2 weeks you'll switch to a cane. By 6 weeks most are walking unaided. Driving resumes around 6 weeks, swimming at 8, and most low-impact sports by 3 months.",
          },
        ],
        takeaway:
          "Hip replacement is highly predictable and highly rewarding. Good preparation, an experienced team, and committed physiotherapy together deliver the excellent outcomes the procedure is known for.",
      },
      {
        slug: "avascular-necrosis-of-the-hip",
        title: "Avascular Necrosis of the Hip",
        excerpt: "Early diagnosis can preserve your natural joint — here's what to look for.",
        readTime: "7 min read",
        intro:
          "Avascular necrosis (AVN) is the death of bone tissue due to interrupted blood supply. In the hip, it most often affects the femoral head — and caught early, the joint can sometimes be saved.",
        sections: [
          {
            heading: "Common causes",
            body: "Long-term steroid use, heavy alcohol consumption, prior hip trauma, sickle cell disease, and certain autoimmune conditions are the leading culprits. In a meaningful share of cases, no clear cause is found.",
          },
          {
            heading: "Symptoms by stage",
            body: "Early AVN often causes deep groin pain on exertion that gradually becomes constant. As the bone surface collapses, a sudden worsening of pain and a limp develop. X-rays are normal in early stages — MRI is the test of choice for early diagnosis.",
          },
          {
            heading: "Treatment depends on the stage",
            body: "Early-stage AVN (no collapse) can sometimes be treated with core decompression, a procedure that drills small channels to relieve pressure and stimulate healing. Once collapse occurs, hip replacement becomes the most reliable option. Younger patients may be candidates for resurfacing.",
          },
        ],
        takeaway:
          "Unexplained groin pain in someone on steroids or with risk factors deserves an MRI — early-stage AVN has joint-preserving options that disappear once the bone collapses.",
      },
      {
        slug: "managing-hip-bursitis",
        title: "Managing Hip Bursitis",
        excerpt: "Lateral hip pain that won't quit — causes, exercises, and injections.",
        readTime: "5 min read",
        intro:
          "Trochanteric bursitis is inflammation of a fluid-filled sac on the outer side of the hip. It produces a sharp, often debilitating pain that's worst when lying on the affected side or climbing stairs.",
        sections: [
          {
            heading: "Why it happens",
            body: "Most cases are not true bursitis but a tendinopathy of the gluteus medius muscle — the gym world calls this 'greater trochanteric pain syndrome.' Weak hip abductors, leg-length differences, and altered gait all contribute.",
          },
          {
            heading: "Targeted exercise",
            body: "Strengthening the gluteus medius with clamshells, side-lying leg raises, and single-leg bridges is the single most effective long-term treatment. A physiotherapist can identify any gait issues that need addressing.",
          },
          {
            heading: "Role of injection",
            body: "An ultrasound-guided corticosteroid injection provides excellent short-term relief and lets patients participate fully in their exercise programme. Used alongside rehabilitation rather than alone, the success rate is high.",
          },
        ],
        takeaway:
          "Outer hip pain is rarely arthritis — it's usually gluteal tendinopathy. Targeted strengthening, not rest, is the cure.",
      },
    ],
  },
  {
    id: "knee",
    name: "Knee",
    description: "Ligament injuries, meniscus tears, arthritis, and joint replacement.",
    articles: [
      {
        slug: "acl-tear-recovery-timeline",
        title: "ACL Tear: Recovery Timeline",
        excerpt: "From the moment of injury to returning to sport — month by month.",
        readTime: "8 min read",
        intro:
          "The anterior cruciate ligament (ACL) is one of the four major ligaments stabilizing the knee. A complete tear in an active or sporting individual is usually a surgical decision, and the recovery is a 9-month commitment.",
        sections: [
          {
            heading: "Months 0–1: Pre-habilitation",
            body: "Surgery is typically delayed 2–3 weeks while the initial swelling settles and motion returns. Operating on a swollen, stiff knee leads to worse outcomes. Use this period for 'prehab' — quad strengthening and motion exercises.",
          },
          {
            heading: "Months 1–3: Foundation",
            body: "After arthroscopic reconstruction (usually with a hamstring or quadriceps tendon graft), the focus is restoring full motion, eliminating swelling, and rebuilding quadriceps strength. Most patients walk without crutches by 4 weeks.",
          },
          {
            heading: "Months 3–9: Sport-specific return",
            body: "Running starts around 3–4 months. Cutting, pivoting, and contact training are progressively introduced from 6 months. Return to competitive sport is typically 9 months — rushing this milestone is the leading cause of re-tear.",
          },
        ],
        takeaway:
          "ACL reconstruction works — but the surgery is only 20% of the outcome. The other 80% is disciplined rehabilitation over 9 months. Don't return to sport early.",
      },
      {
        slug: "knee-replacement-demystified",
        title: "Knee Replacement Demystified",
        excerpt: "Modern implants, minimally invasive approaches, and rehab expectations.",
        readTime: "8 min read",
        intro:
          "Total knee replacement transforms life for patients with advanced arthritis. Modern implants, precision instruments, and enhanced recovery pathways have made the procedure safer and more predictable than ever.",
        sections: [
          {
            heading: "When it's time",
            body: "Daily pain that disturbs sleep, inability to walk more than a short distance, and X-rays showing bone-on-bone arthritis together justify consideration. The decision is also driven by quality of life — not just imaging.",
          },
          {
            heading: "Modern technique",
            body: "The worn surfaces of the femur, tibia, and (sometimes) patella are replaced with metal and polyethylene components designed to mimic natural motion. Computer-assisted and robotic alignment improve precision. Most patients spend 3–5 days in hospital.",
          },
          {
            heading: "Rehabilitation reality",
            body: "Walking begins the day of surgery. Most patients use a walker for 2 weeks, then a cane for another 2–4 weeks. Bending past 90° is the first goal; reaching 120° is the long-term goal. By 3 months most are back to comfortable walking, gardening, and travel. Implants now routinely last 20+ years.",
          },
        ],
        takeaway:
          "Knee replacement is a quality-of-life operation. When pain controls your daily decisions, it's worth a consultation — modern outcomes are excellent and durable.",
      },
      {
        slug: "meniscus-tears-repair-or-trim",
        title: "Meniscus Tears: Repair or Trim?",
        excerpt: "How surgeons decide which tears need fixing and which can be left alone.",
        readTime: "6 min read",
        intro:
          "The menisci are two C-shaped cartilage cushions in the knee. Tears are extremely common — and not every tear needs surgery. The location, pattern, and patient's age guide the decision.",
        sections: [
          {
            heading: "When to leave it alone",
            body: "Small, stable tears in older patients with co-existing arthritis often respond well to physiotherapy and activity modification. Surgery for these has not been shown to outperform good non-operative care.",
          },
          {
            heading: "When to repair",
            body: "Tears in the outer 'red zone' (which has good blood supply), bucket-handle tears causing the knee to lock, and tears in young athletes are typically repaired with sutures. Repair preserves the meniscus and protects against future arthritis.",
          },
          {
            heading: "When to trim",
            body: "Tears in the inner avascular zone, especially complex flap or degenerative tears causing mechanical symptoms, are best treated by removing only the torn portion (partial meniscectomy). Preserving as much meniscus as possible is the modern principle.",
          },
        ],
        takeaway:
          "Not every meniscus tear needs surgery, and when surgery is needed, repair beats removal whenever the tear allows. Ask your surgeon which option applies to you.",
      },
    ],
  },
  {
    id: "spine",
    name: "Spine",
    description: "Lumbar and cervical disc disease, sciatica, and stenosis.",
    articles: [
      {
        slug: "lumbar-disc-herniation",
        title: "Lumbar Disc Herniation",
        excerpt: "Why most slipped discs heal without surgery — and when they don't.",
        readTime: "7 min read",
        intro:
          "A 'slipped disc' is one of the most feared diagnoses in orthopedics — yet roughly 80–90% of disc herniations resolve with conservative care within 6–12 weeks.",
        sections: [
          {
            heading: "What actually happens",
            body: "The soft inner core of a spinal disc bulges or extrudes through a tear in the outer layer, irritating or pressing on a nearby nerve root. The result is often the classic 'sciatica' — pain radiating from the lower back down the leg.",
          },
          {
            heading: "Conservative care",
            body: "Short rest (1–2 days), early gentle movement, anti-inflammatory medication, and targeted physiotherapy form the foundation. Epidural steroid injections are useful when leg pain dominates and isn't improving after 4–6 weeks.",
          },
          {
            heading: "When surgery becomes necessary",
            body: "Surgical discectomy is recommended for cauda equina syndrome (saddle numbness, bladder/bowel changes — an emergency), progressive weakness, or pain that fails to improve after 6–12 weeks of well-conducted conservative care. Modern microdiscectomy is a small, day-care procedure with excellent results.",
          },
        ],
        takeaway:
          "Most disc herniations heal themselves. Surgery is reserved for neurological emergencies, progressive weakness, or pain that refuses to budge — and even then, it's a small, high-success operation.",
      },
      {
        slug: "sciatica-causes-and-treatment",
        title: "Sciatica: Causes & Treatment",
        excerpt: "That shooting pain down your leg — understanding the root cause.",
        readTime: "6 min read",
        intro:
          "Sciatica is a symptom, not a diagnosis. It describes pain that travels from the lower back, through the buttock, and down the leg along the path of the sciatic nerve.",
        sections: [
          {
            heading: "Common causes",
            body: "A herniated disc is the most common cause in younger adults. Spinal stenosis (narrowing of the spinal canal) is the more common cause in patients over 60. Less common causes include piriformis syndrome and spondylolisthesis.",
          },
          {
            heading: "What helps",
            body: "Staying gently active — not bed rest — leads to faster recovery. Physiotherapy focusing on neural gliding, core strengthening, and posture correction is highly effective. Heat, anti-inflammatories, and short courses of nerve-pain medication ease the worst of it.",
          },
          {
            heading: "When to investigate further",
            body: "Pain that persists beyond 6 weeks, progressive weakness, or any changes in bladder or bowel function warrant an MRI and a specialist opinion. Targeted epidural injections can provide significant relief while the underlying cause is addressed.",
          },
        ],
        takeaway:
          "Sciatica is usually a self-limiting symptom of an underlying cause. Stay active, see a physiotherapist early, and escalate to a specialist if symptoms don't improve in 6 weeks.",
      },
      {
        slug: "spinal-stenosis-explained",
        title: "Spinal Stenosis Explained",
        excerpt: "A narrowing spinal canal and the modern decompression options available.",
        readTime: "7 min read",
        intro:
          "Spinal stenosis is the narrowing of the spaces within the spine, putting pressure on the nerves. It's most common in people over 60 and is one of the leading reasons for spine surgery in older adults.",
        sections: [
          {
            heading: "The classic symptom",
            body: "'Neurogenic claudication' — leg pain, heaviness, or numbness that develops after walking a certain distance and is relieved by sitting or leaning forward (over a shopping trolley, for example). Patients often shorten their walks progressively over months.",
          },
          {
            heading: "Conservative options",
            body: "Physiotherapy emphasizing flexion-based exercises, weight loss, activity modification, and epidural steroid injections all play a role. Many patients manage well for years with this combination.",
          },
          {
            heading: "Surgical decompression",
            body: "When walking distance becomes severely limited or quality of life is significantly impacted, a decompression (laminectomy) — sometimes combined with fusion if instability is present — provides reliable relief. Modern minimally invasive techniques mean shorter stays and faster recovery.",
          },
        ],
        takeaway:
          "Stenosis-related leg pain that improves when you sit down is often very treatable. Conservative care first; decompression surgery is reliable when quality of life suffers.",
      },
    ],
  },
  {
    id: "foot-ankle",
    name: "Foot & Ankle",
    description: "Heel pain, sprains, tendon injuries, and gait-related problems.",
    articles: [
      {
        slug: "plantar-fasciitis",
        title: "Plantar Fasciitis",
        excerpt: "Heel pain that's worst in the morning — stretches, orthotics, and beyond.",
        readTime: "5 min read",
        intro:
          "Plantar fasciitis is inflammation of the thick band of tissue running along the bottom of the foot. The hallmark symptom — sharp heel pain with the first steps of the day — is unmistakable.",
        sections: [
          {
            heading: "Why it happens",
            body: "Repetitive stress, tight calf muscles, sudden increase in activity, prolonged standing, and inappropriate footwear all contribute. Weight gain is a strong risk factor.",
          },
          {
            heading: "What works",
            body: "Daily calf and plantar fascia stretching, supportive footwear, silicone heel cups, and night splints together resolve the majority of cases within 3–6 months. A guided extracorporeal shockwave therapy course is highly effective for resistant cases.",
          },
          {
            heading: "What to avoid",
            body: "Repeated corticosteroid injections can weaken the plantar fascia and lead to rupture — they should be used sparingly and only by experienced clinicians. Surgery is rarely needed and only after at least 9–12 months of well-conducted conservative care.",
          },
        ],
        takeaway:
          "Plantar fasciitis is stubborn but almost always self-limiting. Stretching, supportive shoes, and patience win — avoid repeated steroid injections.",
      },
      {
        slug: "ankle-sprain-grading",
        title: "Ankle Sprain Grading",
        excerpt: "Grade I, II, or III? How the severity changes your recovery plan.",
        readTime: "5 min read",
        intro:
          "Ankle sprains range from minor inconveniences to season-ending injuries. Understanding which grade you have helps set realistic expectations and avoid the chronic instability that often follows poorly rehabilitated sprains.",
        sections: [
          {
            heading: "Grade I — Mild",
            body: "Stretching of the ligament without tearing. Mild swelling, minimal pain, full ability to bear weight. Recovery: 1–2 weeks with RICE (rest, ice, compression, elevation) and early range-of-motion work.",
          },
          {
            heading: "Grade II — Moderate",
            body: "Partial ligament tear. Moderate swelling, bruising, painful to walk on. Recovery: 3–6 weeks. A short period in a brace or boot, followed by structured physiotherapy with proprioceptive (balance) training, is essential.",
          },
          {
            heading: "Grade III — Severe",
            body: "Complete ligament tear. Significant swelling, often unable to bear weight. Imaging may be needed to rule out fracture. Most are treated non-operatively with a boot or brace for 4–6 weeks followed by extended rehabilitation. Surgical repair is considered in athletes or those with recurrent instability.",
          },
        ],
        takeaway:
          "The single biggest mistake after an ankle sprain is skipping rehabilitation. Without balance retraining, up to 40% of sprains lead to chronic instability — and another sprain.",
      },
      {
        slug: "achilles-tendon-injuries",
        title: "Achilles Tendon Injuries",
        excerpt: "From tendinitis to rupture — recognizing the spectrum of injuries.",
        readTime: "6 min read",
        intro:
          "The Achilles is the largest tendon in the body and also one of the most commonly injured — especially in 'weekend warriors' who suddenly increase activity after a sedentary week.",
        sections: [
          {
            heading: "Tendinopathy",
            body: "Chronic overuse pain and thickening of the tendon, typically 2–6 cm above the heel. Eccentric heel-drop exercises performed daily for 12 weeks are the gold-standard treatment. Steroid injections directly into the tendon are avoided — they risk rupture.",
          },
          {
            heading: "Acute rupture",
            body: "A sudden 'pop' at the back of the ankle, often felt as if someone kicked you. Walking on tiptoes becomes impossible. The Thompson test — squeezing the calf with the patient prone — confirms the diagnosis. Both surgical repair and functional bracing produce excellent outcomes; the right choice depends on age, activity level, and timing.",
          },
          {
            heading: "Return to activity",
            body: "Whether treated operatively or not, the recovery involves graduated weight-bearing in a boot, followed by months of strengthening. Return to running is typically around 4–6 months; return to high-level sport closer to 9–12 months.",
          },
        ],
        takeaway:
          "Sudden calf 'pop' followed by inability to push off requires urgent evaluation. Achilles ruptures heal well — but only with timely diagnosis and a structured rehabilitation plan.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  for (const region of regions) {
    const article = region.articles.find((a) => a.slug === slug);
    if (article) return { article, region };
  }
  return null;
}
