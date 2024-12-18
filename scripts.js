// Seleciona todas as caixas e todos os containers
const boxes = document.querySelectorAll('.box');
const containers = document.querySelectorAll('.container');

// Adiciona um evento de clique para cada caixa
boxes.forEach(box => {
box.addEventListener('click', () => {
    // Remove a classe 'active' e o atributo 'data-active' de todas as caixas
    boxes.forEach(b => {
        b.classList.remove('active');
        b.removeAttribute('data-active');
    });

    // Adiciona a classe 'active' e define 'data-active="true"' na caixa clicada
    box.classList.add('active');
    box.setAttribute('data-active', 'true');
});
});

document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    const closeModal = document.querySelector(".close");

    // Novo modal para exibir o conteúdo adicional (downside)
    const newModal = document.getElementById("new-modal");
    const newModalText = document.getElementById("new-modal-text");
    const closeNewModal = document.querySelector(".close-new-modal");

    // Conteúdo com HTML estruturado
    const modalContent = {
        neoadjuvantTherapy: `
            <div class="container" data-item="neoadjuvant-therapy">
            <div class="header-wrapper">
                <div class="header">Neoadjuvant therapy</div>
            </div>
            <div class="tabs">
                <div class="tab" data-subtopic="goals-of-treatment">Goals of treatment</div>
                <div class="tab" data-subtopic="radiotherapy">Radiotherapy</div>
                <div class="tab" data-subtopic="chemotherapy">Chemotherapy</div>
            </div>

            <div class="content" data-subtopic="first-topic">
                <h3>Neoadjuvant therapy:</h3>
                <p>In almost all patients with rectal cancer, the first treatments will be a combination of radiotherapy and chemotherapy.</p>
                <p>The exact sequence and duration to be determined based on your MRI. Radiotherapy usually given first and given over 5 days OR 5 weeks then chemotherapy for 4 months (every 2 weeks).</p>
                <p>However, this may be different based on your specific tumor.</p>
            </div>

            <div class="content" data-subtopic="goals-of-treatment" style="display:none;">
                <h3>Goals of treatment:</h3>
                <p>The main goal of neoadjuvant therapy is to reduce
                    the risk of local recurrence (tumour coming back).
                    Studies have shown that this risk can be reduced by
                    50% in most patients. Other goals of this first
                    treatment are:</p>
                <ul>
                    <li>Reduce tumour size</li>
                    <li>Reduce the risk of spread to other organs</li>
                    <li>Improve long term survival</li>
                </ul>
                <p>Importantly, this first treatment can result in complete clinical response in 40-50% of patients. In this case, surgery may be avoided.</p>
                <p>However, if the tumour doesn’t respond completely, then surgery is still required.</p>
            </div>

            <div class="content" data-subtopic="radiotherapy" style="display:none;">
                <h3>Radiotherapy: Downsides</h3>
                <p>Radiotherapy can worsen your bowel habits both
                    during and right after treatment, as well as for the
                    rest of your life</p>
                <p>There is also a possible risk of worse sexual and
                    urinary function.</p>
                <p>If surgery is needed AFTER radiotherapy:</p>
                <p>There will be a higher risk of anastomotic leak (i.e., healing of your bowel connection). Because of this, your surgery will include a temporary stoma.</p>
                <p>The combination of surgery and radiotherapy will result in worse long-term bowel function.</p>
            </div>

            <div class="content" data-subtopic="chemotherapy" style="display:none;">
                <h3>Chemotherapy: Downsides</h3>
                <p>Chemotherapy carries the risk of nerve damage
                    (burning, numbness, tingling in hands and feet
                    especially). This can be very bothersome and
                    really affects ability to work and do your normal
                    physical activities in a lot of patients.</p>
                <p>This happens in more than 2/3 of all patients who
                    get chemotherapy.</p>
                <p>This damage and its symptoms is permanent
                    damage in 1/3 of patients who get chemotherapy.</p>
            </div>

            <div class="downsides-wrapper">
                <span>Downsides:</span>
                <div class="downsides-wrapper__btns">
                    <button class="button" data-modal="bowelDysfunction">Bowel Dysfunction</button>
                    <button class="button" data-modal="anastomoticLeak">Anastomotic Leak</button>
                </div>
            </div>
        </div>
        `,
        completeResponse: `
            <div class="container" data-item="complete-response" data-modal="completeResponse">
            <div class="header-wrapper">
                <div class="header">Complete Response</div>
            </div>
            <div class="tabs">
                <div class="tab" data-subtopic="follow-up">Follow-up</div>
                <div class="tab" data-subtopic="cancer-outcomes">Cancer outcomes</div>
                <div class="tab" data-subtopic="functional-outcomes">Functional outcomes</div>
            </div>

            <div class="content" data-subtopic="first-topic">
                <h3>Complete Clinical Response:</h3>
                <p>There is a possibility that your tumour will response
                    fully (i.e., fully gone) after radiotherapy and
                    chemotherapy. This happens about 40-50% of the
                    time in patients who get a combination of
                    radiotherapy and chemotherapy as first treatment.</p>
                <p>If this happens, surgery can be avoided for the time
                    being. Close follow-ups are needed, especially in
                    the first 2 years.</p>
                <p>In 1/3 of patients who have a clinical complete
                    response, the tumor will regrow, which will then
                    need major surgery to remove your rectum.</p>
            </div>

            <div class="content" data-subtopic="follow-up" style="display:none;">
                <h3>Follow-up:</h3>
                <p>Close follow-up is needed, especially in the first 2 years. This is to ensure
                    that we catch any regrowth early so that it can be treated.</p>
                <p>We need to look at the complete clinical response scar inside your rectum with a
                    camera (sigmoidoscopy – can be done at the clinic or in the endoscopy suite) 4
                    times every year for the first 2 years</p>
                <p>We also need to repeat your MRI two time per year for the first 2 years, then
                    every year up to 5 years at least</p>
                    <p>You will also need a CT scan every year, and blood tests every 3-6 months up to
                        at least 5 years.</p>
            </div>

            <div class="content" data-subtopic="cancer-outcomes" style="display:none;">
                <h3>Cancer outcomes:</h3>
                <p>More than 2/3 of patients who have a clinical complete response after radiotherapy and chemotherapy do not have a regrowth of their tumour in the first 5 years and never need surgery or other treatments for their rectal cancer.</p>
                <p>In the first 5 years, about 25% of patients get a local recurrence (i.e., the tumor comes back in the rectum). If the tumor does return, surgery can usually still be performed.</p>
                <p>In a small proportion of patients, metastases (i.e., spread to other organs such as  your liver and lungs) can develop. This occurs in about 10% of patients. If this happens, the treatment will depend on the location and number of metastases. In most cases the first treatment in this scenario will be more chemotherapy.</p>
            </div>

            <div class="content" data-subtopic="functional-outcomes" style="display:none;">
                <h3>Functional outcomes:</h3>
                <p>The side effects of this treatment strategy are almost all related
                    to the radiotherapy and chemotherapy that you have already received.</p>
                    <ul>Radiotherapy:
                        <li>Radiotherapy can worsen your bowel habits both during and right after treatment, as well as for the rest of your life</li>
                        <li>There is also a possible risk of worse sexual and urinary function</li>
                    </ul>
                    <ul>Chemotherapy:
                        <li>Chemotherapy carries the risk of nerve damage (burning, numbness, tingling in hands and feet especially). This can be very bothersome and really affects ability to work and do your normal physical activities in a lot of patients.</li>
                        <li>This happens in more than 2/3 of all patients who get chemotherapy.</li>
                        <li>This damage and its symptoms is permanent damage in 1/3 of patients who get chemotherapy.
                    </ul>
            </div>

        </div>
        `,
        persistentCompleteClinicalResponse: `
            <div class="container" data-item="persistent-complete-clinical-response" data-modal="persistentCompleteClinicalResponse">
            <div class="header-wrapper">
                <div class="header">No Surgery Needed</div>
            </div>
            
            <div class="content" data-subtopic="first-topic">
                <h3>No Surgery Needed:</h3>
                <p>We will continue to follow you closely for at least 5
                    years. In more than 2/3 of patients will not have a
                    tumor regrowth and will not need any more
                    treatment for their rectal cancer other than regular
                    follow-ups.</p>
                <p>We need to look at the complete clinical response
                    scar inside your rectum with a camera
                    (sigmoidoscopy – can be done at the clinic or in the
                    endoscopy suite) 4 times every year for the first 2
                    years</p>
                <p>We also need to repeat your MRI two time per year
                    for the first 2 years, then every year up to 5 years
                    at least</p>
                    <p>You will also need a CT scan every year, and blood
                        tests every 3-6 months up to at least 5 years.</p>
            </div>
        </div>
        `,
        tumorRegrowth: `
            <div class="container" data-item="tumor-regrowth" data-modal="tumorRegrowth">
            <div class="header-wrapper">
                <div class="header">Tumour regrowth</div>
            </div>
            
            <div class="content" data-subtopic="first-topic">
                <h3>Tumour regrowth:</h3>
                <p>In the first 5 years, about 25% of patients get a local recurrence (i.e., the tumor comes back in the rectum). If the tumor does return, surgery can usually still be performed</p>
                <p>In a small proportion of patients, metastases (i.e., spread to other organs such as
                    your liver and lungs) can develop. This occurs in about 10% of patients. If this
                    happens, the treatment will depend on the location and number of metastases. In
                    most cases the first treatment in this scenario will be more chemotherapy.</p>
                <p>You may also develop a local recurrence AND distant metastases. This happens
                    in about 5% of patients. If this occurs, the type of treatment will depend on the location and number of metastases and the characteristics of your localrecurrence.</p>
            </div>
        </div>
        `,
        metastaticSpread: `
            <div class="container" data-item="metastatic-spread" data-modal="metastaticSpread">
            <div class="header-wrapper">
                <div class="header">Metastatic Spread</div>
            </div>
            
            <div class="content" data-subtopic="first-topic">
                <h3>Metastatic spread:</h3>
                <p>In a small proportion of patients, metastases (i.e., spread to other organs such as
                    your liver and lungs) can develop. This occurs in about 10% of patients. If this happens, the treatment will depend on the location and number of metastases. In
                    most cases the first treatment in this scenario will be more chemotherapy.
                    </p>
                <p>You may also develop a local recurrence AND distant metastases. This happens
                    in about 5% of patients. If this occurs, the type of treatment will depend on the location and number of metastases and the characteristics of your local
                    recurrence.</p>
            </div>
        </div>
        `,
        incompleteResponse: `
            <div class="container" data-item="incomplete-response" data-modal="incompleteResponse">
            <div class="header-wrapper">
                <div class="header">Partial Response</div>
            </div>
            
            <div class="content" data-subtopic="first-topic">
                <h3>Partial Response:</h3>
                <p>More than 50% of patients who receive radiotherapy and chemotherapy as first
                    treatment will NOT have a complete response and the tumour will still be present.
                    In these cases, surgery will still be needed</p>
            </div>
        </div>
        `,
        surgery: `
            <div class="container" data-item="surgery" data-modal="surgery">
            <div class="header-wrapper">
                <div class="header">Surgery Needed</div>
            </div>
            
            <div class="content" data-subtopic="first-topic">
                <h3>Surgery Needed:</h3>
                <p>In cases where the tumour does not respond fully to radiotherapy and chemotherapy, OR there is local tumor regrowth after initial complete clinical response, surgery to remove your rectum is needed.</p>
                <p>The exact type of surgery will mostly depend on the location of your tumor. Other factors that we take into consideration is your age, physical health, how your bowel habits are at the present time, as well as your own preferences.</p>
                <ol>There are two main options:
                    <li>If your tumor invades the sphincter muscles in your anus, then we will need to remove your rectum and anus, and give you a permanent colostomy (i.e., stoma bag made from your colon).</li>
                    <li>If your tumour does NOT invade your sphincter muscles, then we will still
                        remove your rectum, but a reconnection is usually possible.
                        
                        In this case, you will still need a temporary stoma called a diverting loop
                        ileostomy (i.e., a stoma made from your small intestine).</li>
                </ol>
            </div>
        </div>
        `,
        surgeryLar: `
            <div class="container" data-item="surgery-lar" data-modal="surgeryLar">
            <div class="header-wrapper">
                <div class="header">Surgery - LAR</div>
            </div>
            <div class="tabs">
                <div class="tab" data-subtopic="hospital-stay">Hospital stay</div>
                <div class="tab" data-subtopic="surgical-risks">Surgical risks</div>
                <div class="tab" data-subtopic="cancer-outcomes">Cancer outcomes</div>
            </div>

            <div class="content"  data-subtopic="first-topic">
                <h3>Surgery - LAR:</h3>
                <p>A low anterior resection with diverting loop ileostomy is a surgery where we will remove your rectum, reconnect the intestines, and make a temporary stoma bag.</p>
                <p>This surgery can usually be done with the camera and small incisions (either laparoscopy or robot).</p>
                <p>We will make a temporary stoma bag as part of this surgery. This is to protect the anastomosis (i.e., bowel connection) that we will make during the surgery. You will need another surgery to eventually close the stoma,usually at least 3 months after surgery but can be longer depending on your healing, recovery, and if you need more treatments.</p>
                <p>It is important to know that your bowel movements once your stoma is closed will not be normal. You will likely have many bowel movements with urgency and maybe even accidents. This can have a major negative impact on your activities, work, and quality of life.</p>
            </div>

            <div class="content"  data-subtopic="hospital-stay" style="display:none;">
                <h3>Hospital stay:</h3>
                <p>Patients usually stay in hospital for 2-3 days after this surgery.</p>
                <p>Recovery usually takes several weeks before you start regaining your energy.</p>
                <p>Usually patients feel almost fully recovered by 6-8 weeks after surgery.</p>
            </div>

            <div class="content"  data-subtopic="surgical-risks" style="display:none;">
                <h3>Surgical risks:</h3>
                <p>The main risk from this surgery is an anastomotic leak. This iswhen your connection does not heal fully, and a hole can develop. This usually happens in the first 1-2 weeks after surgery. The treatment for this will depend on the size of the hole that develops. Usually the negative impact of a leak is lower because of your temporary stoma bag that diverts your stool away from the connection and hole.</p>
                <p>About 30% of patients will have issues with their sexual and urinary function. This is because all of those nerves are exactly where we need to operate. These nerves are often too small to be seen and can be damaged during surgery.</p>
                <p>Once your stoma bag is closed eventually and you are passing stool from your anus again, it is important to know that your bowel movements will NOT be normal. The severity of these symptoms depends on how close the connection is to your anus (in other words, how much rectum we have to remove).</p>
            </div>

            <div class="content"  data-subtopic="cancer-outcomes" style="display:none;">
                <h3>Cancer outcomes:</h3>
                <p>The long-term cancer outcomes will depend on the exact stage of your cancer, its response to the chemotherapy and radiotherapy that you have already received, and the quality of surgery. Your cancer can either come back locally (i.e., in your pelvis) or as metastases (spread to other organs). The highest risk is in the first 2 years. Our team will continue to follow you closely to make sure that if your cancer comes back, we  catch it early. Your cancer follow-ups will include blood tests, scans, and endoscopy.</p>
                <p>Local recurrence: The risk of your cancer coming back in the same area is about 5-10% over the next 5 years. The highest risk is in the first 2 years. If your cancer does come back in the same place, the treatment will depend on whether it has also spread elsewhere, how big the recurrence is, and whether it touches any surrounding organs.</p>
                <p>Distant metastasis: Your cancer can also spread to other organs away from your intestines. For rectal cancer, the most likely organs of spread are your liver, lungs, and the lining of your abdomen. The risk of distant spread will depend on certain tumour characteristics, the response to therapy and final pathology.

                    <ul>
                        <li>In general, the risk of spreading to other organs is about 10-25% for stage I-II, and 25-40% for stage III.</li>
                        <li>Usually, the treatment for metastases is chemotherapy.</li>
                    </ul>
                </p>
            </div>

            <div class="downsides-wrapper">
                <span>Downsides:</span>
                <div class="downsides-wrapper__btns">
                    <button class="button" data-modal="anastomoticLeak">Anastomotic Leak</button>
                    <button class="button" data-modal="temporaryStoma">Temporary Stoma</button>
                    <button class="button" data-modal="bowelDysfunction">Bowel Dysfunction</button>
                    <button class="button" data-modal="genitounaryDysfunction">Genitounary Dysfunction</button>
                </div>
            </div>
        </div>
        `,
        surgeryApr: `
            <div class="container" data-item="surgery-apr" data-modal="surgeryApr">
            <div class="header-wrapper">
                <div class="header">Surgery - APR</div>
            </div>
            <div class="tabs">
                <div class="tab" data-subtopic="hospital-stay">Hospital stay</div>
                <div class="tab" data-subtopic="surgical-risks">Surgical risks</div>
                <div class="tab" data-subtopic="cancer-outcomes">Cancer outcomes</div>
            </div>

            <div class="content" data-subtopic="first-topic">
                <h3>Surgery - APR:</h3>
                <p>An abdominoperineal resection is a type of surgery that will remove your rectum and
                    create of a permanent stoma from your colon (called a colostomy). This is necessary if
                    your tumour is invading your anal sphincters (the muscles at your anus). We can also
                    give you a permanent colostomy if you already have incontinence to stool (i.e., you
                    have trouble controlling your bowel movements and you have accidents) or if it is your
                    choice. Some patients choose to have a permanent colostomy because of the potential
                    negative effects on their bowel function if a re-connection is performed.</p>
                <p>This is usually done by laparoscopy or by robot. Both involve small incisions.</p>
                <p>We will remove your anus as part of this surgery and close the wound. When it is
                    all healed, then you will no longer have an anus.</p>
                <p>You will meet the stoma nurse and receive some teaching about your stoma (how
                    it works, how to change it, how to care for it, etc.) before your surgery. After your
                    surgery, you will also have regular follow-ups with the stoma nurse.</p>
                <p>It is important to remember that you do not have to restrict your activities
                    because of your stoma. We encourage you to continue all of the activities,
                    hobbies, and work that you did before your surgery even after we create your
                    stoma.</p>
                <p>There are some costs associated with a stoma. The provincial and federal
                    governments do reimburse a large part of the total costs, as well if you have
                    private insurance. Some patients may still need to spend up to $1000 to $1500
                    out of pocket to pay for stoma appliances.</p>
            </div>

            <div class="content"  data-subtopic="hospital-stay" style="display:none;">
                <h3>Hospital stay:</h3>
                <p>Patients usually stay in hospital for 2-3 days after this surgery.</p>
                <p>Recovery usually takes several weeks before you start regaining your energy.</p>
                <p>Usually patients feel almost fully recovered by 6-8 weeks after surgery.</p>
            </div>

            <div class="content"  data-subtopic="surgical-risks" style="display:none;">
                <h3>Surgical risks:</h3>
                <p>The main risk from this surgery is a wound infection of the perineal wound (i.e., the wound where your anus used to be). In about 30-50% of patients this wound may get infected or open up in the several weeks after your surgery. If this is the case, it may take weeks to months for the wound to fully heal. You are more at risk if you are a smoker, have diabetes, are immunocompromised, or if you have received radiation.</p>
                <p>About 30% of patients will have issues with their sexual and urinary function. This is because all of those nerves are exactly where we need to operate. These nerves are often too small to be seen and can be damaged during surgery.</p>
            </div>

            <div class="content"  data-subtopic="cancer-outcomes" style="display:none;">
                <h3>Cancer outcomes:</h3>
                <p>The long-term cancer outcomes will depend on the exact stage of your cancer, its
                    response to the chemotherapy and radiotherapy that you have already received, and
                    the quality of surgery. Your cancer can either come back locally (i.e., in your pelvis) or
                    as metastases (spread to other organs). The highest risk is in the first 2 years. Our team
                    will continue to follow you closely to make sure that if your cancer comes back, we
                    catch it early. Your cancer follow-ups will include blood tests, scans, and endoscopy.</p>
                    <p>Local recurrence: The risk of your cancer coming back in the same area is about
                        5-10% over the next 5 years. The highest risk is in the first 2 years. If your cancer
                        does come back in the same place, the treatment will depend on whether it has
                        also spread elsewhere, how big the recurrence is, and whether it touches any
                        surrounding organs.</p>
                        <p>Distant metastasis: Your cancer can also spread to other organs away from your
                            intestines. For rectal cancer, the most likely organs of spread are your liver,
                            lungs, and the lining of your abdomen. The risk of distant spread will depend on
                            certain tumour characteristics, the response to therapy and final pathology.
                            <ul>
                                <li>In general, the risk of spreading to other organs is about 10-25% for stage
                                    I-II, and 25-40% for stage III.</li>
                                <li>Usually, the treatment for metastases is chemotherapy.</li>
                            </ul>
                        </p>
            </div>
        </div>
        `,
        bowelDysfunction: `
            <div class="modal-text">
            <h2>Bowel Dysfunction</h2>
            <p>Your bowel movements after treatment can be very abnormal. Many patients suffer from:</p>
            <ul>
                <li>Going often</li>
                <li>Going urgently</li>
                <li>Needing to go many times over a short period to fully evacuate</li>
                <li>Possible stool accidents</li>
                <li>Possible gas accidents</li>
            </ul>
            <p>This group of symptoms is called Low Anterior Resection Syndrome (LARS). The severity of these symptoms increases depending on how low your anastomosis (i.e., bowel connection) is. The closer we have to make the anastomosis to your anus, the worse your symptoms will be. These symptoms can have a major negative impact on your activities and quality of life. It is important to discuss with your surgeon about any concerns you may have.</p>
            <p>It is usually very severe in the first 3 months after treatment, and it continues to improve up to 12-18 months.</p>
            <p>We know from experience that how your bowel movements were before you started treatment is usually the best that you can expect.</p>
            <p>There are some medications that may help regulate your bowel movements, but your bowel habits are unlikely to ever return to ‘normal’.</p>
            <p>However, if the hole is larger, then we may need to bring you back to surgery. We may re-do the connection if possible, or if the hole is too big or you are too sick, we may have to undo the connection fully and give you a permanent stoma.</p>
            </div>
        `,
        anastomoticLeak: `
            <div class="modal-text">
            <h2>Anastomotic Leak</h2>
            <p>Whenever we remove a piece of your intestine and make an anastomosis (i.e., connection), we will use staples and sutures to make the connection. Your body has to then heal around this connection.</p>
            <p>In about 10-15% of patients, the healing will be incomplete and an anastomotic leak (i.e., hole in the connection) will develop. This usually happens around 1-2 weeks after surgery.</p>
            <p>Symptoms may include:</p>
            <ul>
                <li>Fever</li>
                <li>Abdominal pain</li>
                <li>Nausea and vomiting</li>
                <li>Pus draining from your anus</li>
            </ul>
            <p>If you experience any of these symptoms, you will need to come back to the emergency room ASAP to be evaluated by our team. We will do blood tests and a CT scan to check the connection.</p>
            <p>If the hole in your connection is small, then antibiotics is usually the only treatment that is needed. This is because of your temporary stoma diverting all stool away from the connection (i.e., no stool reaches the connection).</p>
            </div>
        `,
        temporaryStoma: `
            <div class="modal-text">
            <h2>Temporary Stoma</h2>
            <p>We will be making a temporary stoma bag as part of your surgery. We do this to protect your anastomosis (i.e., bowel connection) because it is at higher risk of non-healing (i.e., anastomotic leak) due to the radiation. You will keep this temporary stoma bag for at least 3 months to let your connection heal and for you to recover from your operation. You may need to keep the stoma bag longer if your connection does not heal fully, or if you need more treatments for your cancer after your surgery.</p>
            <p>You will meet the stoma nurse and receive some teaching about your stoma (how it works, how to change it, how to care for it, etc.) before your surgery. After your surgery, you will also have regular follow-ups with the stoma nurse.</p>
            <p>The government of Quebec will reimburse part of your stoma bag costs (about 800$ per year). Depending on how long you keep your stoma, patients may have to pay up to $1000 more per year out of their own pockets to cover the remaining costs. If you have private insurance, it is likely they will also reimburse part of these costs.</p>
            <p>You will need to have another surgery to close the stoma bag when it is appropriate. It is important to know that once your stoma bag is closed and you start having bowel movements again, you are likely to have major issues with your bowel habits</p>
            </div>
        `,
        genitounaryDysfunction: `
            <div class="modal-text">
            <h2>Genitounary Dysfunction</h2>
            <p>About 30% of patients will have issues with their sexual and urinary function after surgery. This is because all of these nerves are exactly where we need to operate. These nerves are often too small to be seen and can be damaged during surgery. These symptoms can be permanent and may have a major negative impact on your activities and quality of life.</p>
            <p>Urinary function: You can be either difficulty urinating or urinating too much without control.</p>
            <p>Sexual function</p>
            <ul>
                <li>Men: Erectile dysfunction (difficulty having erections) or retrograde ejaculations (cannot ejaculate). If this occurs, the problem is usually caused by nerve damage, and medications such as Viagra or Cialis are not very effective.</li>
                <li>Think about sperm banking if you are still planning on having children in the future</li>
            </ul>
            <ul>
                <li>Women: dyspareunia (pain with sexual intercourse), vaginal dryness, vaginal stricture (abnormal tightening)</li>
                <li>Think about egg banking if you are still planning on having children in the future</li>
            </ul>
            </div>
        `,
        regularFollowups: `
            <div class="container" data-item="surgery" data-modal="surgery">
            <div class="header-wrapper">
                <div class="header">Regular Follow-Ups</div>
            </div>
            
            <div class="content" data-subtopic="first-topic">
                <h3>Regular Follow-ups:</h3>
                <p>Close follow-up is needed, especially in the first 2 years. This is to ensure that we catch any regrowth early so that it can be treated.</p>

                <p>We need to look at the complete clinical response scar inside your rectum with a camera (sigmoidoscopy – can be done at the clinic or in the endoscopy suite) 4 times every year for the first 2 years</p>

                <p>We also need to repeat your MRI two time per year for the first 2 years, then every year up to 5 years at least</p>

                <p>You will also need a CT scan every year, and blood tests every 3-6 months up to at least 5 years.</p>
                </div>
            </div>
        `,
        noSurgeryNeededInitially: `
            <div class="container" data-item="persistent-complete-clinical-response" data-modal="persistentCompleteClinicalResponse">
            <div class="header-wrapper">
                <div class="header">No Surgery Needed Initially</div>
            </div>
            
            <div class="content" data-subtopic="first-topic">
                <h3>No Surgery Needed Initially:</h3>
                <p>We will continue to follow you closely for at least 5
                    years. In more than 2/3 of patients will not have a
                    tumor regrowth and will not need any more
                    treatment for their rectal cancer other than regular
                    follow-ups.</p>
                <p>We need to look at the complete clinical response
                    scar inside your rectum with a camera
                    (sigmoidoscopy – can be done at the clinic or in the
                    endoscopy suite) 4 times every year for the first 2
                    years</p>
                <p>We also need to repeat your MRI two time per year
                    for the first 2 years, then every year up to 5 years
                    at least</p>
                    <p>You will also need a CT scan every year, and blood
                        tests every 3-6 months up to at least 5 years.</p>
            </div>
        </div>
        `
    };

    boxes.forEach(box =>{
        box.addEventListener("click", function(){
            const key = this.getAttribute("data-modal");
            console.log(this);
            modalText.innerHTML = '';  // Limpa o conteúdo anterior
            modalText.innerHTML = modalContent[key];
            modal.style.display = "flex";

            // Após preencher o modal, configurar o comportamento das tabs
            setupTabs();
        });
    });

    // Exibir modal ao clicar no botão
    // Exibir novo modal ao clicar nos botões dinâmicos
    modalText.addEventListener("click", function (event) {
        if (event.target.classList.contains("button")) {
            const key = event.target.getAttribute("data-modal");
            if (modalContent[key]) {
                newModalText.innerHTML = modalContent[key];
                newModal.style.display = "flex";
            }
        }
    });

    // Função para configurar o comportamento das tabs
    function setupTabs() {
        // Selecionando as tabs e os conteúdos das tabs
        const tabs = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.content');

        tabs.forEach(tab => {
            tab.addEventListener("click", function() {
                const subtopic = this.getAttribute("data-subtopic");

                // Esconder todos os conteúdos
                contents.forEach(content => {
                    content.style.display = 'none';
                });

                // Mostrar o conteúdo correspondente à tab clicada
                const contentToShow = document.querySelector(`.content[data-subtopic="${subtopic}"]`);
                if (contentToShow) {
                    contentToShow.style.display = 'block';
                }

                // Alterar o estilo das tabs (opcional, para destacar a tab ativa)
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }


    // Fechar modal ao clicar no 'x' ou fora do conteúdo
     // Fechar modal principal
     closeModal.onclick = function() {
        modal.style.display = "none";
    };

    // Fechar novo modal
    closeNewModal.onclick = function() {
        newModal.style.display = "none";
    };

    // Fechar modal ao clicar fora dele
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        } else if (event.target === newModal) {
            newModal.style.display = "none";
        }
    };
});

document.addEventListener("DOMContentLoaded", function () {
// Show the text bubble
const tooltip = document.getElementById("tooltip");
tooltip.style.display = "flex";
tooltip.style.opacity = "1";

// Hide the bubble after 3 seconds
setTimeout(function () {
    tooltip.style.opacity = "0";
    setTimeout(function () {
        tooltip.style.display = "none";
    }, 500); // Wait half a second to hide after the animation
}, 3000); // Time the bubble will be visible
});

