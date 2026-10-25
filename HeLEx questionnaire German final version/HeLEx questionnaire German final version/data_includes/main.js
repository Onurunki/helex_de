//DebugOff()
PennController.ResetPrefix(null)
var progressBarText = "Fortschritt"
//newTrial(
//    newButton("Hello World")
//        .print()
//        .wait()
//)
//InitiateRecorder("https://zoricapuskar.com/files/audio_recording_collection/resultsupload.php").label("init");

newTrial("pagezero-consent",
defaultText
    .cssContainer({"margin-bottom":"1em"})
    .center()
    .print()
,
newText("line1","In unserem Projekt untersuchen wir Spachverbrauch und Sprachentwicklung in verschiedenen Sprachen und Situationen. Wir bedanken uns bei Ihnen, dass Sie an unserer Studie teilnehmen möchten.")
,
newText("line2", "Hiermit versichern wir Ihnen, dass alle Ihre Daten anonymisiert, und nur im Rahmen des Projekts benutzt werden. Persönliche Daten werden so anonymisiert, dass sie dem Datenschutzgesetz entsprechen und zu Ihrer Identifizirung nicht führen können. Personenbezogene Daten werden nicht an Dritte weitergegeben.")
,
newText("line3", "Wenn Sie mit dem folgenden zustimmen, drücken Sie bitte den Knopf <em>Ich stimme zu</em> um mit dem Experiment anzufangen.")
,
newText("line4", "Ich habe die oben erwähnte Informationen gelesen. Ich fühle mich genug informiert und ich habe verstanden, was mit meinen Daten passiert. Ich verstehe, dass ich meine Zusage in jedem Moment bis zum Ende der Studie, ohne Begründung, wiederrufen kann.")
,
newButton("consent", "Ich stimme zu. ")
    .center()
    .print()
    .wait()
)
//Instructions
newTrial("pageone-instructions",
defaultText
    .cssContainer({"margin-bottom":"1em"})
    .center()
    .print()
,
newText("instructions-1", "Herzlich wilkommen!")
,
newText("instructions-2", "In dieser Umfrage werden Sie Fragen zu <b>Ihren Erfahrungen und Gedanken</b> als mehrsprachige Person beantworten.")
,
newText("instructions-3", "Bitte antworten Sie auf alle Fragen sorgfältig. Auch wenn Sie denken, dass die Frage Sie nicht betrifft, oder Sie sind nicht sicher, <b>klicken</b> Sie auf den Knopf <b>“auswählen”</b> und wählen Sie die Option aus, die Ihnen am passendsten erscheint. Fragen, die auf “auswählen” bleiben, werden als unbeantwortet betrachtet.")
,
newText("instructions-4", "Die Umfrage dauert ungefähr <b>30 Minuten</b>.")
,
newText("instructions-5", "Bitte gehen Sie nicht zur nächsten Seite bevor Sie alle Fragen beantwortet haben, weil <b>die Rückkehr zur vorherigen Seite nicht möglich sein wird.")
,
newText("instructions-6", "Bitte tragen Sie Ihre Identifikationsnummer ein und klicken Sie auf <b>Weiter</b> um fotzufahren.")
,
newTextInput("input_ID",)
    .log()
    .cssContainer({"margin-bottom":"1em"})
    .center()
    .print()
,
newButton("next", "Weiter")
    .center()
    .print()
    .wait()
,
newVar("ID")
    .global()
    .set(getTextInput("input_ID"))
)
    
newTrial("pagetwo",
//newText("imeiprezime", "Koje je Vaše puno ime i prezime?")
//,
//newTextInput("imeiprezime",)
//    .log()
//    .size(300,30)
//,
//newCanvas("namecanvas", 1000, 40)
//        .settings.add(0,0, getText("imeiprezime"))
//        .settings.add(300,0, getTextInput("imeiprezime"))
//        .print()
//,
newText("education", "Was ist Ihr höchster Bildungsabschluss?")
,
newDropDown("education","auswählen")
    .add("kein Abschluss", "Hauptschulabschluss", "Realschulabschluss", "Abitur", "Berufsabschluss", "Fachhochschulreife", "Bachelor-Abschluss", "Master-Abschluss", "Promotion")
    .log()
,
newCanvas("educationncanvas", 700, 40)
        .settings.add(0,0, getText("education"))
        .settings.add(300,0, getDropDown("education"))
        .center()
        .print()
,
newText("age","Wie alt sind Sie?")
,
newDropDown("age", "auswählen")
        .settings.add("1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100")
        .settings.log()
,
newCanvas("dateofbirthcanvas", 700, 40)
        .settings.add(0,0, getText("age"))
 //       .settings.add(300,20, getText("monthofbirth"))
        .settings.add(300,0, getDropDown("age"))
        .center()
        .print()
,
newText("gender", "Was ist Ihr Geschlecht?")
,
newDropDown("gender", "auswählen")
        .settings.add("weiblich", "männlich","divers", "nicht-binär", "lieber nicht sagen")
        .settings.log()
,
newCanvas("gendercanvas", 700, 40)
        .settings.add(0,0, getText("gender"))
        .settings.add(300,0, getDropDown("gender"))
        .center()
        .print()
,
newText("parentnativelanguages","Was sind die Muttersprachen<br> Ihrer Eltern oder Erziehungsberechtigten?</b>")
,
newText("parentonenativelanguages","Elternteil/<br>Erziehungsberechtigte 1</br>")
,
newText("parenttwonativelanguages","Elternteil/ <br>Erziehungsberechtigte 2</br>")
,
newDropDown("parentonenativelanguages", "auswählen")
        .settings.add("BKMS", "Deutsch", "andere")
        .settings.log()
,
newDropDown("parenttwonativelanguages", "auswählen")
        .settings.add("BKMS", "Deutsch", "andere")
        .settings.log()
,
newCanvas("parentlanguagescanvas", 700, 100)
        .settings.add(0,30, getText("parentnativelanguages"))
        .settings.add(300,0, getText("parentonenativelanguages"))
        .settings.add(480,0, getText("parenttwonativelanguages"))
        .settings.add(300,50, getDropDown("parentonenativelanguages"))
        .settings.add(480,50, getDropDown("parenttwonativelanguages"))
        .center()
        .print()
,
newText("region", "In welchem Bundesland wohnen Sie?")
,
newDropDown("region", "auswählen")
        .settings.add("Baden-Württemberg", "Bayern", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen", "Nordrhein-Westfallen", "Rheinland-Pfalz", "Saarland", "Sachsen", "Sanchsen-Anhalt", "Schleswig-Holstein", "Thüringen")
        .settings.log()
,
newCanvas("regioncanvas", 700, 50)
        .settings.add(0,30, getText("region"))
        .settings.add(300,30, getDropDown("region"))
        .center()
        .print()
,
newText("speechproblems","Hatten Sie als Kind Probleme mit <br> Sprachverstehen oder Sprechen?</br>  (Beispiel: Sie haben spät angefangen <br>zu reden, Sie haben gestottert,<br>  oder einen Logopäden besucht.)</br>")
,
newDropDown("speechproblems","auswählen")
        .settings.add("ja", "nein", "ich weiß es nicht")
        .settings.log()
,
newCanvas("speechproblemscanvas", 700, 100)
        .settings.add(0,30, getText("speechproblems"))
        .settings.add(300,30, getDropDown("speechproblems"))
        .center()
        .print()
,
newText("borningermany","Sind Sie in Deutschland geboren?")
,
newDropDown("borningermany","auswählen")
       .settings.add("ja","nein")
        .settings.log()
,
newCanvas("borningermanycanvas", 700, 100)
        .settings.add(0,40, getText("borningermany"))
        .settings.add(300,40, getDropDown("borningermany"))
        .center()
        .print()
,
newButton("next", "Weiter")
    .center()
    .print()
    .wait()
)

newTrial("pagethree",

newText("skip","Wenn Sie in Deutschland geboren sind, dürfen Sie diese Seite überspringen in dem Sie auf <em>Weiter</em> klicken.")
    .center()
    .print()
,    
newText("countryofbirth","In welchem Land sind Sie geboren?")
,
newTextInput("countryofbirth",)
    .log()
    .size(300,30)
,
newCanvas("countryofbirthcanvas", 700, 100)
        .settings.add(0,50, getText("countryofbirth"))
        .settings.add(300,50, getTextInput("countryofbirth"))
        .center()
        .print()
,
newText("movedtogermany", "Wann sind Sie nach Deutschland gezogen?")
,
newText("monthmovedtogermany", "Monat")
,
newText("yearmovedtogermany", "Jahr")
,
newTextInput("monthmovedtogermany",)
    .log()
    .size(60,30) 
,
newTextInput("yearmovedtogermany",)
    .log()
    .size(60,30) 
,
newCanvas("movdtogermanycanvas", 700, 400)
        .settings.add(0,40, getText("movedtogermany"))
        .settings.add(300,20, getText("monthmovedtogermany"))
        .settings.add(400,20, getText("yearmovedtogermany"))
        .settings.add(300,40, getTextInput("monthmovedtogermany"))
        .settings.add(400,40, getTextInput("yearmovedtogermany"))
        .center()
        .print()
,
newButton("next", "Weiter")
    .center()
    .print()
    .wait()
)

newTrial("pagefour",
newText("speakunderstandreadwrite", "Bitte bewerten Sie, wie gut Sie jede Sprache sprechen, verstehen, lesen und schreiben können. Falls Sie andere Sprachen außer BKMS und Deutsch sprechen, schreiben Sie bitte diese Sprachen in die Felder.")
    .center()
    .print()
,
newText("speakunderstandreadwritebcms","BKMS")
,
newText("speakunderstandreadwritegerman","Deutsch")
,
newTextInput("speakunderstandreadwriteotherlanguage1", )
    .log()
    .size(90,30) 
,
newTextInput("speakunderstandreadwriteotherlanguage2", )
    .log()
    .size(90,30) 
,
newTextInput("speakunderstandreadwriteotherlanguage3", )
    .log()
    .size(90,30) 
,
newText("speakunderstandreadwrite-read", "Wie gut lesen Sie in diesen Sprachen? Wählen Sie die<br> 'nicht relevant' Option aus, wenn die Sprache keine schriftliche Form hat.</br>")
,
 
newDropDown("speakunderstandreadwrite-read-bcms","auswählen")
        .settings.add("kaum", "nicht so gut", "gut", "ziemlich gut", "sehr gut", "nicht relevant")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-read-german","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut", "nicht relevant")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-read-otherlanguage1","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut", "nicht relevant")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-read-otherlanguage2","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut", "nicht relevant")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-read-otherlanguage3","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut", "nicht relevant")
        .settings.log()
,
newText("speakunderstandreadwrite-write", "Wie gut schreiben Sie auf diesen Sprachen? Wählen Sie die Option <br> 'nicht relevant' aus wenn die Sprache keine schriftliche Form hat.</br>")
,
newDropDown("speakunderstandreadwrite-write-bcms","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut", "nicht relevant")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-write-german","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut", "nicht relevant")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-write-otherlanguage1","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut", "nicht relevant")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-write-otherlanguage2","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut", "nicht relevant")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-write-otherlanguage3","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut", "nicht relevant")
        .settings.log()
,
newText("speakunderstandreadwrite-speak", "Wie gut sprechen Sie diese Sprachen?")
,
newDropDown("speakunderstandreadwrite-speak-bcms","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-speak-german","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-speak-otherlanguage1","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-speak-otherlanguage2","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-speak-otherlanguage3","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut")
        .settings.log()
,
newText("speakunderstandreadwrite-understand", "Wie gut verstehen Sie diese Sprachen?")
,
newDropDown("speakunderstandreadwrite-understand-bcms","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-understand-german","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-understand-otherlanguage1","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-understand-otherlanguage2","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut")
        .settings.log()
,
newDropDown("speakunderstandreadwrite-understand-otherlanguage3","auswählen")
        .settings.add("kaum", "nicht so gut","gut", "ziemlich gut", "sehr gut")
        .settings.log()
,
newCanvas("speakunderstandwritecanvas", 1300, 450)
        .settings.add(500,40, getText("speakunderstandreadwritebcms"))
        .settings.add(650,40, getText("speakunderstandreadwritegerman"))
        .settings.add(800,40, getTextInput("speakunderstandreadwriteotherlanguage1"))
        .settings.add(950,40, getTextInput("speakunderstandreadwriteotherlanguage2"))
        .settings.add(1100,40, getTextInput("speakunderstandreadwriteotherlanguage3"))
        .settings.add(0,80, getText("speakunderstandreadwrite-read"))
        .settings.add(500,80, getDropDown("speakunderstandreadwrite-read-bcms"))
        .settings.add(650,80, getDropDown("speakunderstandreadwrite-read-german"))
        .settings.add(800,80, getDropDown("speakunderstandreadwrite-read-otherlanguage1"))
        .settings.add(950,80, getDropDown("speakunderstandreadwrite-read-otherlanguage2"))
        .settings.add(1100,80, getDropDown("speakunderstandreadwrite-read-otherlanguage3"))
        .settings.add(0,160, getText("speakunderstandreadwrite-write"))
        .settings.add(500, 160, getDropDown("speakunderstandreadwrite-write-bcms"))
        .settings.add(650,160, getDropDown("speakunderstandreadwrite-write-german"))
        .settings.add(800,160, getDropDown("speakunderstandreadwrite-write-otherlanguage1"))
        .settings.add(950,160, getDropDown("speakunderstandreadwrite-write-otherlanguage2"))
        .settings.add(1100,160, getDropDown("speakunderstandreadwrite-write-otherlanguage3"))
        .settings.add(0,240, getText("speakunderstandreadwrite-speak"))
        .settings.add(500, 240, getDropDown("speakunderstandreadwrite-speak-bcms"))
        .settings.add(650,240, getDropDown("speakunderstandreadwrite-speak-german"))
        .settings.add(800,240, getDropDown("speakunderstandreadwrite-speak-otherlanguage1"))
        .settings.add(950,240, getDropDown("speakunderstandreadwrite-speak-otherlanguage2"))
        .settings.add(1100,240, getDropDown("speakunderstandreadwrite-speak-otherlanguage3"))
        .settings.add(0,320, getText("speakunderstandreadwrite-understand"))
        .settings.add(500, 320, getDropDown("speakunderstandreadwrite-understand-bcms"))
        .settings.add(650,320, getDropDown("speakunderstandreadwrite-understand-german"))
        .settings.add(800,320, getDropDown("speakunderstandreadwrite-understand-otherlanguage1"))
        .settings.add(950,320, getDropDown("speakunderstandreadwrite-understand-otherlanguage2"))
        .settings.add(1100,320, getDropDown("speakunderstandreadwrite-understand-otherlanguage3"))
        .center()
        .print()
,        
newButton("next", "Weiter")
   .center()
    .print()
    .wait()
)

newTrial("pagefive",
newText("frequency","Schätzen Sie ein für alle Ihre Sprachen ein, wie oft Sie sie verwenden.  Falls Sie andere Sprachen außer BKMS und Deutsch sprechen, tragen Sie diese auch ein.")
    .center()
    .print()
,
newText("frequencyBCMS","BKMS")
,
newText("frequencygerman","Deutsch")
,
newTextInput("frequencyotherlanguage1", )
    .log()
    .size(90,30) 
,
newTextInput("frequencyotherlanguage2", )
    .log()
    .size(90,30) 
,
newTextInput("frequencyotherlanguage3", )
    .log()
    .size(90,30) 
,
newText("frequency-hear","Wie oft <b>hören</b> Sie es?")
,
newDropDown("frequency-hear-bcms","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-hear-german","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-hear-otherlanguage1","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-hear-otherlanguage2","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-hear-otherlanguage3","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newText("frequency-speak","Wie oft <b>sprechen</b> Sie es?")
,
newDropDown("frequency-speak-bcms","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-speak-german","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-speak-otherlanguage1","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-speak-otherlanguage2","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-speak-otherlanguage3","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newText("frequency-read","Wie oft <b>lesen</b> Sie es?")
,
newDropDown("frequency-read-bcms","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-read-german","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-read-otherlanguage1","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-read-otherlanguage2","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-read-otherlanguage3","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newText("frequency-write","Wie oft <b>scheriben</b> Sie es?")
,
newDropDown("frequency-write-bcms","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-write-german","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-write-otherlanguage1","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-write-otherlanguage2","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newDropDown("frequency-write-otherlanguage3","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "(fast) täglich") 
        .settings.log()
,
newText("frequency-media","Wie oft benutzen oder hören Sie diese<br> Sprachen bei der Verwendung vom Computer<br> und Technik? Z.B. TV, Radio, Musik,<br> Filme, Webseiten, Spiele, Apps.</br>")
,
newDropDown("frequency-media-bcms","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "fast täglich") 
        .settings.log()
,
newDropDown("frequency-media-german","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "fast täglich") 
        .settings.log()
,
newDropDown("frequency-media-otherlanguage1","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "fast täglich") 
        .settings.log()
,
newDropDown("frequency-media-otherlanguage2","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "fast täglich") 
        .settings.log()
,
newDropDown("frequency-media-otherlanguage3","auswählen")
        .settings.add("(fast) nie", "mehrmals im Jahr", "einmal im Monat", "einmal in der Woche", "mehrmals in der Woche", "einmal am Tag", "mehrmals täglich", "fast täglich") 
        .settings.log()
,
newCanvas("frequencycanvas", 1300, 500)
        .settings.add(300,40, getText("frequencyBCMS"))
        .settings.add(500,40, getText("frequencygerman"))
        .settings.add(700,40, getTextInput("frequencyotherlanguage1"))
        .settings.add(900,40, getTextInput("frequencyotherlanguage2"))
        .settings.add(1100,40, getTextInput("frequencyotherlanguage3"))
        .settings.add(0,80, getText("frequency-hear"))
        .settings.add(300,80, getDropDown("frequency-hear-bcms"))
        .settings.add(500,80, getDropDown("frequency-hear-german"))
        .settings.add(700,80, getDropDown("frequency-hear-otherlanguage1"))
        .settings.add(900,80, getDropDown("frequency-hear-otherlanguage2"))
        .settings.add(1100,80, getDropDown("frequency-hear-otherlanguage3"))
        .settings.add(0,120, getText("frequency-speak"))
        .settings.add(300,120, getDropDown("frequency-speak-bcms"))
        .settings.add(500,120, getDropDown("frequency-speak-german"))
        .settings.add(700,120, getDropDown("frequency-speak-otherlanguage1"))
        .settings.add(900,120, getDropDown("frequency-speak-otherlanguage2"))
        .settings.add(1100,120, getDropDown("frequency-speak-otherlanguage3"))    
        .settings.add(0,160, getText("frequency-read"))
        .settings.add(300,160, getDropDown("frequency-read-bcms"))
        .settings.add(500,160, getDropDown("frequency-read-german"))
        .settings.add(700,160, getDropDown("frequency-read-otherlanguage1"))
        .settings.add(900,160, getDropDown("frequency-read-otherlanguage2"))
        .settings.add(1100,160, getDropDown("frequency-read-otherlanguage3"))    
        .settings.add(0,200, getText("frequency-write"))
        .settings.add(300,200, getDropDown("frequency-write-bcms"))
        .settings.add(500,200, getDropDown("frequency-write-german"))
        .settings.add(700,200, getDropDown("frequency-write-otherlanguage1"))
        .settings.add(900,200, getDropDown("frequency-write-otherlanguage2"))
        .settings.add(1100,200, getDropDown("frequency-write-otherlanguage3"))    
        .settings.add(0,240, getText("frequency-media"))
        .settings.add(300,240, getDropDown("frequency-media-bcms"))
        .settings.add(500,240, getDropDown("frequency-media-german"))
        .settings.add(700,240, getDropDown("frequency-media-otherlanguage1"))
        .settings.add(900,240, getDropDown("frequency-media-otherlanguage2"))
        .settings.add(1100,240, getDropDown("frequency-media-otherlanguage3"))    
        .center()
        .print()
,
newButton("next", "Weiter")
   .center()
    .print()
    .wait()
)

newTrial("pagesix",
newText("traveltobcms","Wie oft im Jahr reisen Sie nach<br> Bosnien und Herzegowina/Kroatien/Montenegro/Serbien?</br>")
,
newDropDown("traveltobcms","auswählen")
        .settings.add("nie", "nicht jedes Jahr", "1", "2", "3", "4", "5", "6", "7")
        .settings.log()
,
newText("lengthofstayinbcms","Wenn Sie nach Bosnien und Herzegowina/Kroatien/Montenegro/Serbien <br> reisen, wie lange bleiben Sie dort pro Besuch?</br>")
,
newDropDown("lengthofstayinbcms","auswählen")
        .settings.add("ich besuche es nicht", "2-3 Tage", "eine Woche", "2 Wochen", "3 Wochen", "einen Monat", "anderthalb Monate", "2 Monate", "3 Monate", "4 Monate", "mehr als 4 Monate")
        .settings.log()
,
newCanvas("stayinbcmscanvas", 1300, 480)
        .settings.add(300,50, getText("traveltobcms"))
        .settings.add(800,50, getDropDown("traveltobcms"))
        .settings.add(300,150, getText("lengthofstayinbcms"))
        .settings.add(800,150, getDropDown("lengthofstayinbcms"))
        .center()
        .print()
,
newButton("next", "Weiter")
   .center()
    .print()
    .wait()
)

newTrial("pageseven",
newText("interactioninbcms","Denken Sie an alle Personen, mit denen Sie in einer typischen Woche auf BKMS in verschiedenen Kontexten, inklusive direkte und online Kommunikation, interagieren.")
    .center()
    .print()
,
newText("interactioninbcms-familyinhousehold","Familie im Haushalt")
,
newText("interactioninbcms-familyoutsidehousehold","Familie außerhalb<br> des Haushalts</br>")
,
newText("interactioninbcms-workschool","Arbeit oder Schule")
,
newText("interactioninbcms-localcommunity","lokale Gemeinde (Geschäfte,<br> Organisationen, etc.)</br>")
,
newText("interactioninbcms-freetime","Freizeit (Treffen mit <br>Freunden, Mitbewohnern, Hobbys)</br>")
,
newText("interactioninbcms-numberofpeople","Mit wie vielen Personen verwenden Sie BKMS?")
,
newDropDown("interactioninbcms-numberofpeople-familyinhousehold","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6", "7", "8", "9-11", "12-14", "15-17", "18-20", "mehr als 20", "ich weiß es nicht")
    .settings.log()
,    
newDropDown("interactioninbcms-numberofpeople-familyoutsidehousehold","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6", "7", "8", "9-11", "12-14", "15-17", "18-20", "mehr als 20", "ich weiß es nicht")
    .settings.log()
,    
newDropDown("interactioninbcms-numberofpeople-workschool","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6", "7", "8", "9-11", "12-14", "15-17", "18-20", "mehr als 20", "ich weiß es nicht")
    .settings.log()
,    
newDropDown("interactioninbcms-numberofpeople-localcommunity","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6", "7", "8", "9-11", "12-14", "15-17", "18-20", "mehr als 20", "ich weiß es nicht")
    .settings.log()
,    
newDropDown("interactioninbcms-numberofpeople-freetime","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6", "7", "8", "9-11", "12-14", "15-17", "18-20", "mehr als 20", "ich weiß es nicht")
    .settings.log()
,    
newText("interactioninbcms-daysinaweek","Wie viele Tage pro Woche sind Sie mit diesen <br> Personen zusammen <br> (wenigstens einigen von diesen)?</br>")
,
newDropDown("interactioninbcms-daysinaweek-familyinhousehold","auswählen")
    .settings.add("0", "nicht jede Woche", "1", "2", "3", "4", "5", "6", "7")
    .settings.log()
,    
newDropDown("interactioninbcms-daysinaweek-familyoutsidehousehold","auswählen")
    .settings.add("0", "nicht jede Woche", "1", "2", "3", "4", "5", "6", "7")
    .settings.log()
,    
newDropDown("interactioninbcms-daysinaweek-workschool","auswählen")
    .settings.add("0", "nicht jede Woche", "1", "2", "3", "4", "5", "6", "7")
    .settings.log()
,    
newDropDown("interactioninbcms-daysinaweek-localcommunity","auswählen")
    .settings.add("0", "nicht jede Woche", "1", "2", "3", "4", "5", "6", "7")
    .settings.log()
,    
newDropDown("interactioninbcms-daysinaweek-freetime","auswählen")
    .settings.add("0", "nicht jede Woche", "1", "2", "3", "4", "5", "6", "7")
    .settings.log()
,    
newText("interactioninbcms-hours","Wie viele Stunden verbringen Sie<br> an einem typischen Tag zusammen,<br> wenn Sie mit diesen Personen zusammen sind?</br>")
,
newDropDown("interactioninbcms-hours-familyinhousehold","auswählen")
    .settings.add("weniger als 1", "1", "2", "3", "4", "5", "6", "7", "8", "mehr als 8")
    .settings.log()
,    
newDropDown("interactioninbcms-hours-familyoutsidehousehold","auswählen")
    .settings.add("weniger als 1", "1", "2", "3", "4", "5", "6", "7", "8", "mehr als 8")
    .settings.log()
,    
newDropDown("interactioninbcms-hours-workschool","auswählen")
    .settings.add("weniger als 1", "1", "2", "3", "4", "5", "6", "7", "8", "mehr als 8")
    .settings.log()
,    
newDropDown("interactioninbcms-hours-localcommunity","auswählen")
    .settings.add("weniger als 1", "1", "2", "3", "4", "5", "6", "7", "8", "mehr als 8")
    .settings.log()
,    
newDropDown("interactioninbcms-hours-freetime","auswählen")
    .settings.add("weniger als 1", "1", "2", "3", "4", "5", "6", "7", "8", "mehr als 8")
    .settings.log()
,    
newText("interactioninbcms-personsspeakbcms","Wie viele von diesen Personen sprechen gut BKMS?")
,
newDropDown("interactioninbcms-personsspeakbcms-familyinhousehold","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6-8", "9-11", "12-14", "15-17", "18-20", "mehr als 20")
    .settings.log()
,    
newDropDown("interactioninbcms-personsspeakbcms-familyoutsidehousehold","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6-8", "9-11", "12-14", "15-17", "18-20", "mehr als 20")
    .settings.log()
,    
newDropDown("interactioninbcms-personsspeakbcms-workschool","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6-8", "9-11", "12-14", "15-17", "18-20", "mehr als 20")
    .settings.log()
,    
newDropDown("interactioninbcms-personsspeakbcms-localcommunity","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6-8", "9-11", "12-14", "15-17", "18-20", "mehr als 20")
    .settings.log()
,    
newDropDown("interactioninbcms-personsspeakbcms-freetime","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6-8", "9-11", "12-14", "15-17", "18-20", "mehr als 20")
    .settings.log()
,    
newText("interactioninbcms-personsspeakbcmsbest","Für wie viele von diesen Personen ist BKMS <br> die Sprache, die sie am besten sprechen?</br>")
,
newDropDown("interactioninbcms-personsspeakbcmsbest-familyinhousehold","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6-8", "9-11", "12-14", "15-17", "18-20", "mehr als 20")
    .settings.log()
,    
newDropDown("interactioninbcms-personsspeakbcmsbest-familyoutsidehousehold","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6-8", "9-11", "12-14", "15-17", "18-20", "mehr als 20")
    .settings.log()
,    
newDropDown("interactioninbcms-personsspeakbcmsbest-workschool","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6-8", "9-11", "12-14", "15-17", "18-20", "mehr als 20")
    .settings.log()
,    
newDropDown("interactioninbcms-personsspeakbcmsbest-localcommunity","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6-8", "9-11", "12-14", "15-17", "18-20", "mehr als 20")
    .settings.log()
,    
newDropDown("interactioninbcms-personsspeakbcmsbest-freetime","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6-8", "9-11", "12-14", "15-17", "18-20", "mehr als 20")
    .settings.log()
,    

newCanvas("frequencycanvas", 1400, 500)
        .settings.add(350,70, getText("interactioninbcms-familyinhousehold"))
        .settings.add(550,70, getText("interactioninbcms-familyoutsidehousehold"))
        .settings.add(750,70, getText("interactioninbcms-workschool"))
        .settings.add(950,70, getText("interactioninbcms-localcommunity"))
        .settings.add(1150,70, getText("interactioninbcms-freetime"))
        .settings.add(0,140, getText("interactioninbcms-numberofpeople"))
        .settings.add(350,140, getDropDown("interactioninbcms-numberofpeople-familyinhousehold"))
        .settings.add(550,140, getDropDown("interactioninbcms-numberofpeople-familyoutsidehousehold"))
        .settings.add(750,140, getDropDown("interactioninbcms-numberofpeople-workschool"))
        .settings.add(950,140, getDropDown("interactioninbcms-numberofpeople-localcommunity"))
        .settings.add(1150,140, getDropDown("interactioninbcms-numberofpeople-freetime"))
        .settings.add(0,210, getText("interactioninbcms-daysinaweek"))
        .settings.add(350,210, getDropDown("interactioninbcms-daysinaweek-familyinhousehold"))
        .settings.add(550,210, getDropDown("interactioninbcms-daysinaweek-familyoutsidehousehold"))
        .settings.add(750,210, getDropDown("interactioninbcms-daysinaweek-workschool"))
        .settings.add(950,210, getDropDown("interactioninbcms-daysinaweek-localcommunity"))
        .settings.add(1150,210, getDropDown("interactioninbcms-daysinaweek-freetime"))
        .settings.add(0,280, getText("interactioninbcms-hours"))
        .settings.add(350,280, getDropDown("interactioninbcms-hours-familyinhousehold"))
        .settings.add(550,280, getDropDown("interactioninbcms-hours-familyoutsidehousehold"))
        .settings.add(750,280, getDropDown("interactioninbcms-hours-workschool"))
        .settings.add(950,280, getDropDown("interactioninbcms-hours-localcommunity"))
        .settings.add(1150,280, getDropDown("interactioninbcms-hours-freetime"))
        .settings.add(0,350, getText("interactioninbcms-personsspeakbcms"))
        .settings.add(350,350, getDropDown("interactioninbcms-personsspeakbcms-familyinhousehold"))
        .settings.add(550,350, getDropDown("interactioninbcms-personsspeakbcms-familyoutsidehousehold"))
        .settings.add(750,350, getDropDown("interactioninbcms-personsspeakbcms-workschool"))
        .settings.add(950,350, getDropDown("interactioninbcms-personsspeakbcms-localcommunity"))
        .settings.add(1150,350, getDropDown("interactioninbcms-personsspeakbcms-freetime"))
        .settings.add(0,420, getText("interactioninbcms-personsspeakbcmsbest"))
        .settings.add(350,420, getDropDown("interactioninbcms-personsspeakbcmsbest-familyinhousehold"))
        .settings.add(550,420, getDropDown("interactioninbcms-personsspeakbcmsbest-familyoutsidehousehold"))
        .settings.add(750,420, getDropDown("interactioninbcms-personsspeakbcmsbest-workschool"))
        .settings.add(950,420, getDropDown("interactioninbcms-personsspeakbcmsbest-localcommunity"))
        .settings.add(1150,420, getDropDown("interactioninbcms-personsspeakbcmsbest-freetime"))
        .center()
        .print()
,
newButton("next", "Weiter")
   .center()
    .print()
    .wait()

)

newTrial("pageeight",
newText("interactioningerman","Denken Sie an alle Personen, mit denen Sie in einer typischen Woche auf Deutsch in verschiedenen Kontexten, inklusive direkte und online Kommunikation, interagieren.")
    .center()
    .print()
,
newText("interactioningerman-familyinhousehold","Familie im Haushalt")
,
newText("interactioningerman-familyoutsidehousehold","Familie außerhalb <br>des Haushalts</br>")
,
newText("interactioningerman-workschool","Arbeit oder Schule")
,
newText("interactioningerman-localcommunity","lokale Gemeinde (Geschäfte,<br> Organisationen, etc.)</br>")
,
newText("interactioningerman-freetime","Freizeit (Treffen mit <br>Freunden, Mitbewohnern, Hobbys)</br>")
,
newText("interactioningerman-numberofpeople","Mit wie vielen Personen verwenden Sie<br> das Deutsche?</br>")
,
newDropDown("interactioningerman-numberofpeople-familyinhousehold","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6", "7", "8", "9-11", "12-14", "15-17", "18-20", "mehr als 20", "ich weiß es nicht")
    .settings.log()
,    
newDropDown("interactioningerman-numberofpeople-familyoutsidehousehold","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6", "7", "8", "9-11", "12-14", "15-17", "18-20", "mehr als 20", "ich weiß es nicht")
    .settings.log()
,    
newDropDown("interactioningerman-numberofpeople-workschool","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6", "7", "8", "9-11", "12-14", "15-17", "18-20", "mehr als 20", "ich weiß es nicht")
    .settings.log()
,    
newDropDown("interactioningerman-numberofpeople-localcommunity","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6", "7", "8", "9-11", "12-14", "15-17", "18-20", "mehr als 20", "ich weiß es nicht")
    .settings.log()
,    
newDropDown("interactioningerman-numberofpeople-freetime","auswählen")
    .settings.add("0", "1", "2", "3", "4", "5", "6", "7", "8", "9-11", "12-14", "15-17", "18-20", "mehr als 20", "ich weiß es nicht")
    .settings.log()
,    
newText("interactioningerman-daysinaweek","Wie viele Tage pro Woche sind Sie mit diesen <br> Personen zusammen <br>(wenigstens einigen von diesen)?</br>")
,
newDropDown("interactioningerman-daysinaweek-familyinhousehold","auswählen")
    .settings.add("0", "nicht jede Woche", "1", "2", "3", "4", "5", "6", "7")
    .settings.log()
,    
newDropDown("interactioningerman-daysinaweek-familyoutsidehousehold","auswählen")
    .settings.add("0", "nicht jede Woche", "1", "2", "3", "4", "5", "6", "7")
    .settings.log()
,    
newDropDown("interactioningerman-daysinaweek-workschool","auswählen")
    .settings.add("0", "nicht jede Woche", "1", "2", "3", "4", "5", "6", "7")
    .settings.log()
,    
newDropDown("interactioningerman-daysinaweek-localcommunity","auswählen")
    .settings.add("0", "nicht jede Woche", "1", "2", "3", "4", "5", "6", "7")
    .settings.log()
,    
newDropDown("interactioningerman-daysinaweek-freetime","auswählen")
    .settings.add("0", "nicht jede Woche", "1", "2", "3", "4", "5", "6", "7")
    .settings.log()
,    
newText("interactioningerman-hours","Wie viele Stunden verbringen Sie<br> an einem typischen Tag zusammen,<br> wenn Sie mit diesen Personen zusammen sind?</br>")
,
newDropDown("interactioningerman-hours-familyinhousehold","auswählen")
    .settings.add("weniger als 1", "1", "2", "3", "4", "5", "6", "7", "8", "mehr als 8")
    .settings.log()
,    
newDropDown("interactioningerman-hours-familyoutsidehousehold","auswählen")
    .settings.add("weniger als 1", "1", "2", "3", "4", "5", "6", "7", "8", "mehr als 8")
    .settings.log()
,    
newDropDown("interactioningerman-hours-workschool","auswählen")
    .settings.add("weniger als 1", "1", "2", "3", "4", "5", "6", "7", "8", "mehr als 8")
    .settings.log()
,    
newDropDown("interactioningerman-hours-localcommunity","auswählen")
    .settings.add("weniger als 1", "1", "2", "3", "4", "5", "6", "7", "8", "mehr als 8")
    .settings.log()
,    
newDropDown("interactioningerman-hours-freetime","auswählen")
    .settings.add("weniger als 1", "1", "2", "3", "4", "5", "6", "7", "8", "mehr als 8")
    .settings.log()
,    
newCanvas("frequencycanvas", 1400, 500)
        .settings.add(350,70, getText("interactioningerman-familyinhousehold"))
        .settings.add(550,70, getText("interactioningerman-familyoutsidehousehold"))
        .settings.add(750,70, getText("interactioningerman-workschool"))
        .settings.add(950,70, getText("interactioningerman-localcommunity"))
        .settings.add(1150,70, getText("interactioningerman-freetime"))
        .settings.add(0,140, getText("interactioningerman-numberofpeople"))
        .settings.add(350,140, getDropDown("interactioningerman-numberofpeople-familyinhousehold"))
        .settings.add(550,140, getDropDown("interactioningerman-numberofpeople-familyoutsidehousehold"))
        .settings.add(750,140, getDropDown("interactioningerman-numberofpeople-workschool"))
        .settings.add(950,140, getDropDown("interactioningerman-numberofpeople-localcommunity"))
        .settings.add(1150,140, getDropDown("interactioningerman-numberofpeople-freetime"))
        .settings.add(0,210, getText("interactioningerman-daysinaweek"))
        .settings.add(350,210, getDropDown("interactioningerman-daysinaweek-familyinhousehold"))
        .settings.add(550,210, getDropDown("interactioningerman-daysinaweek-familyoutsidehousehold"))
        .settings.add(750,210, getDropDown("interactioningerman-daysinaweek-workschool"))
        .settings.add(950,210, getDropDown("interactioningerman-daysinaweek-localcommunity"))
        .settings.add(1150,210, getDropDown("interactioningerman-daysinaweek-freetime"))
        .settings.add(0,280, getText("interactioningerman-hours"))
        .settings.add(350,280, getDropDown("interactioningerman-hours-familyinhousehold"))
        .settings.add(550,280, getDropDown("interactioningerman-hours-familyoutsidehousehold"))
        .settings.add(750,280, getDropDown("interactioningerman-hours-workschool"))
        .settings.add(950,280, getDropDown("interactioningerman-hours-localcommunity"))
        .settings.add(1150,280, getDropDown("interactioningerman-hours-freetime"))
        .center()
        .print()
,
newButton("next", "Weiter")
   .center()
    .print()
    .wait()

)

newTrial("pagenine",
newText("speakinglistening","Denken Sie an alle Interaktionen innerhalb einer typischen Woche. Beachten Sie für jeden Kontext die direkte und online Kommunikation. Wie viel sprechen Sie auf jeder Sprache in jedem Kontext? Wie viel hören Sie jede Sprache in jedem Kontext? <br> Je mehr Sie eine Sprache sprechen, desto näher sollte der Schieberegler daran positioniert werden. Wenn der Schieberegler in der Mitte liegt, heißt das, dass Sie BKMS und Deutsch gleichermaßen sprechen. <br>Ziehen Sie den Schieberegler ganz nach links, wenn Sie nur BKMS und kein Deutsch in diesem Kontext sprechen.<br> Ziehen Sie den Schieberegler nach links aber nicht ganz zum Ende wenn Sie in diesem Kontext am meisten BKMS, aber manchmal auch Deutsch, benutzen.</br>")
    .center()
    .print()
,
newText("speakonlybcms","Ich spreche nur BKMS.")
,
newText("hearmostlybcms","Ich höre meistens BKMS und etwas Deutsch.")
,
newScale("exampleslider1",   100)
    .slider()
    .before(newText("left1", "nur BKMS"))
    .after(newText("right1", "nur Deutsch"))
    .default(0)
    .log()
,
newScale("exampleslider2",   100)
    .slider()
    .before( newText("left2", "nur BKMS"))
    .after( newText("right2", "nur Deutsch"))
    .default(20)
    .log()
,
newCanvas("exampleslidercanvas", 1400, 150)
        .settings.add(300,40, getScale("exampleslider1"))
        .settings.add(800,40, getScale("exampleslider2"))
        .settings.add(400,80, getText("speakonlybcms"))
        .settings.add(800,80, getText("hearmostlybcms"))
        .center()
        .print()
,
newText("speakinglistening-speaking", "Sprechen")
,
newText("speakinglistening-listening","Hören")
,
newText("speakinglistening-familyinhousehold","Familie im <br> Haushalt</br>")
,
newText("speakinglistening-familyoutsidehousehold", "Familie außerhalb<br> des Haushalts</br>")
,
newText("speakinglistening-workorschool","Arbeit oder Schule")
,
newText("speakinglistening-localcommunity","lokale Gemeinde<br> (Geschäfte, Organisationen, etc.)</br>")
,
newText("speakinglistening-freetime","Freizeit (Treffen mit<br> Freunden, Mitbewohnern, Hobbys)</br>")
,
newScale("scale-speakinglistening-speaking-familyinhousehold",   100)
    .slider()
    .before(newText("left3", "nur BKMS"))
    .after(newText("right3", "nur Deutsch"))
    .log()
,
newScale("scale-speakinglistening-speaking-familyoutsidehousehold",   100)
    .slider()
    .before(newText("left4", "nur BKMS"))
    .after(newText("right4", "nur Deutsch"))
    .log()
,
newScale("scale-speakinglistening-speaking-workorschool",   100)
    .slider()
    .before(newText("left5", "nur BKMS"))
    .after(newText("right5", "nur Deutsch"))
    .log()
,
newScale("scale-speakinglistening-speaking-localcommunity",   100)
    .slider()
    .before(newText("left6", "nur BKMS"))
    .after(newText("right6", "nur Deutsch"))
    .log()
,
newScale("scale-speakinglistening-speaking-freetime",   100)
    .slider()
    .before(newText("left7", "nur BKMS"))
    .after(newText("right7", "nur Deutsch"))
    .log()
,
newScale("scale-speakinglistening-listening-familyinhousehold",   100)
    .slider()
    .before(newText("left8", "nur BKMS"))
    .after(newText("right8", "nur Deutsch"))
    .log()
,
newScale("scale-speakinglistening-listening-familyoutsidehousehold",   100)
    .slider()
    .before(newText("left9", "nur BKMS"))
    .after(newText("right9", "nur Deutsch"))
    .log()
,
newScale("scale-speakinglistening-listening-workorschool",   100)
    .slider()
    .before(newText("left10", "nur BKMS"))
    .after(newText("right10", "nur Deutsch"))
    .log()
,
newScale("scale-speakinglistening-listening-localcommunity",   100)
    .slider()
    .before(newText("left11", "nur BKMS"))
    .after(newText("right11", "nur Deutsch"))
    .log()
,
newScale("scale-speakinglistening-listening-freetime",   100)
    .slider()
    .before(newText("left12", "nur BKMS"))
    .after(newText("right12", "nur Deutsch"))
    .log()
,
newCanvas("speakinglisteningcanvas", 1400, 380)
        .settings.add(430,0, getText("speakinglistening-speaking"))
        .settings.add(940,0, getText("speakinglistening-listening"))
        .settings.add(0,40, getText("speakinglistening-familyinhousehold"))
        .settings.add(0,100, getText("speakinglistening-familyoutsidehousehold"))
        .settings.add(0,160, getText("speakinglistening-workorschool"))
        .settings.add(0,220, getText("speakinglistening-localcommunity"))
        .settings.add(0,280, getText("speakinglistening-freetime"))
        .settings.add(300,40, getScale("scale-speakinglistening-speaking-familyinhousehold"))
        .settings.add(300,100, getScale("scale-speakinglistening-speaking-familyoutsidehousehold"))
        .settings.add(300,160, getScale("scale-speakinglistening-speaking-workorschool"))
        .settings.add(300,220, getScale("scale-speakinglistening-speaking-localcommunity"))
        .settings.add(300,280, getScale("scale-speakinglistening-speaking-freetime"))
        .settings.add(800,40, getScale("scale-speakinglistening-listening-familyinhousehold"))
        .settings.add(800,100, getScale("scale-speakinglistening-listening-familyoutsidehousehold"))
        .settings.add(800,160, getScale("scale-speakinglistening-listening-workorschool"))
        .settings.add(800,220, getScale("scale-speakinglistening-listening-localcommunity"))
        .settings.add(800,280, getScale("scale-speakinglistening-listening-freetime"))
        .center()
        .print()
,
newButton("next", "Weiter")
   .center()
    .print()
    .wait()
)

newTrial("pageten",
newText("events", "Denken Sie an alle Ereignisse in Ihrem Leben, die auf eine Änderung in Ihrer Spracherfahrung zugeführt haben (z.B. Umzug in ein anderes Land, Schulanfang, Schuljahr im  Studierendenaustausch, Jobanfang, Heirat, Rente, Enkelkinder, neuer Job, etc.).<br> Angefangen von Ihrer Geburt an: Schreiben Sie bei jedem Ereignis Ihr Alter auf und beschreiben Sie Ihre Spracherfahrung für den Zeitraum vor dem Ereignis. <br> Stellen Sie den Schieberegler näher an die Sprache, die Sie am meisten gesprochen oder gehört haben.</br>")
    .center()
    .print()
,
newCanvas("spacecanvas1",100,20)
    .print()
,    
newScale("exampleslider1",   100)
    .slider()
    .before(newText("left1", "nur BKMS"))
    .after(newText("right1", "nur andere Sprache(n)"))
    .default(20)
    .log()
    .center()
    .print()
,
newCanvas("spacecanva2",100,10)
    .print()
,    
newText("events-example","Ich habe meistens BKMS und manchmal auch andere Sprachen gehört.")
    .center()
    .print()
,
newText("events-ageofchange","Alter in<bg> dem die <br>Änderung vorkam</br>")
,
newText("events-land","Land in dem<br> Sie wohnten</br>")
,
newText("events-ichsprach","Ich sprach")
,
newText("events-ichhoerte","Ich hörte")
,
newText("events-didyouspeakgerman","Haben Sie in diesem<br> Zeitraum Deutsch <br> gesprochen?</br>")
,
newText("events-didyouheargerman","Haben Sie in diesem<br> Zeitraum Deutsch<br> gehört?<br>")
,
newText("events-toage1","von Geburt bis<br> (zum Alter<br> von) __ Jahr(en)</br>")
,
newText("events-toage2","bis __ Jahr(en)")
,
newText("events-toage3","bis __ Jahr(en)")
,
newText("events-toage4","bis __ Jahr(en)")
,
newText("events-toage5","bis __ Jahr(en)")
,
newText("events-toage6","bis __ Jahr(en)")
,
newText("events-toage7","bis __ Jahr(en)")
,
newText("events-toage8","bis __ Jahr(en)")
,
newText("events-toage9","bis __ Jahr(en)")
,
newText("events-toage10","bis __ Jahr(en)")
,
newDropDown("events-ageofchange1","auswählen")
    .settings.add("1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100")
    .settings.log()
,    
newDropDown("events-ageofchange2","auswählen")
    .settings.add("1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100")
    .settings.log()
,    
newDropDown("events-ageofchange3","auswählen")
    .settings.add("1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100")
    .settings.log()
,    
newDropDown("events-ageofchange4","auswählen")
    .settings.add("1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100")
    .settings.log()
,    
newDropDown("events-ageofchange5","auswählen")
    .settings.add("1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100")
    .settings.log()
,    
newDropDown("events-ageofchange6","auswählen")
    .settings.add("1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100")
    .settings.log()
,    
newDropDown("events-ageofchange7","auswählen")
    .settings.add("1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100")
    .settings.log()
,    
newDropDown("events-ageofchange8","auswählen")
    .settings.add("1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100")
    .settings.log()
,    
newDropDown("events-ageofchange9","auswählen")
    .settings.add("1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100")
    .settings.log()
,    
newDropDown("events-ageofchange10","auswählen")
    .settings.add("1", "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100")
    .settings.log()
,    
newTextInput("events-land1")
    .log()
    .size(80,30)
,
newTextInput("events-land2")
    .log()
    .size(80,30)
,
newTextInput("events-land3")
    .log()
    .size(80,30)
,
newTextInput("events-land4")
    .log()
    .size(80,30)
,
newTextInput("events-land5")
    .log()
    .size(80,30)
,
newTextInput("events-land6")
    .log()
    .size(80,30)
,
newTextInput("events-land7")
    .log()
    .size(80,30)
,
newTextInput("events-land8")
    .log()
    .size(80,30)
,
newTextInput("events-land9")
    .log()
    .size(80,30)
,
newTextInput("events-land10")
    .log()
    .size(80,30)
,
newScale("scale-events-ichsprach1",   100)
    .slider()
    .before(newText("left101", "nur BKMS"))
    .after(newText("right101", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichsprach2",   100)
    .slider()
    .before(newText("left102", "nur BKMS"))
    .after(newText("right102", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichsprach3",   100)
    .slider()
    .before(newText("left103", "nur BKMS"))
    .after(newText("right103", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichsprach4",   100)
    .slider()
    .before(newText("left104", "nur BKMS"))
    .after(newText("right104", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichsprach5",   100)
    .slider()
    .before(newText("left105", "nur BKMS"))
    .after(newText("right105", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichsprach6",   100)
    .slider()
    .before(newText("left106", "nur BKMS"))
    .after(newText("right106", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichsprach7",   100)
    .slider()
    .before(newText("left107", "nur BKMS"))
    .after(newText("right107", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichsprach8",   100)
    .slider()
    .before(newText("left108", "nur BKMS"))
    .after(newText("right108", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichsprach9",   100)
    .slider()
    .before(newText("left109", "nur BKMS"))
    .after(newText("right109", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichsprach10",   100)
    .slider()
    .before(newText("left1010", "nur BKMS"))
    .after(newText("right1010", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichhoerte1",   100)
    .slider()
    .before(newText("left1011", "nur BKMS"))
    .after(newText("right1011", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichhoerte2",   100)
    .slider()
    .before(newText("left1012", "nur BKMS"))
    .after(newText("right1012", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichhoerte3",   100)
    .slider()
    .before(newText("left1013", "nur BKMS"))
    .after(newText("right1013", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichhoerte4",   100)
    .slider()
    .before(newText("left1014", "nur BKMS"))
    .after(newText("right1014", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichhoerte5",   100)
    .slider()
    .before(newText("left1015", "nur BKMS"))
    .after(newText("right1015", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichhoerte6",   100)
    .slider()
    .before(newText("left1016", "nur BKMS"))
    .after(newText("right1016", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichhoerte7",   100)
    .slider()
    .before(newText("left1017", "nur BKMS"))
    .after(newText("right1017", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichhoerte8",   100)
    .slider()
    .before(newText("left1018", "nur BKMS"))
    .after(newText("right1018", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichhoerte9",   100)
    .slider()
    .before(newText("left1019", "nur BKMS"))
    .after(newText("right1019", "nur andere Sprache(n)"))
    .log()
,
newScale("scale-events-ichhoerte10",   100)
    .slider()
    .before(newText("left10110", "nur BKMS"))
    .after(newText("right10110", "nur andere Sprache(n)"))
    .log()
,
newDropDown("events-didyouspeakgerman1","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouspeakgerman2","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouspeakgerman3","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouspeakgerman4","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouspeakgerman5","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouspeakgerman6","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouspeakgerman7","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouspeakgerman8","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouspeakgerman9","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouspeakgerman10","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouheargerman1","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouheargerman2","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouheargerman3","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouheargerman4","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouheargerman5","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouheargerman6","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouheargerman7","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouheargerman8","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouheargerman9","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,    
newDropDown("events-didyouheargerman10","auswählen")
    .settings.add("ja","nein","ich weiß es nicht")
    .log()
,  
newCanvas("speakinglisteningcanvas", 1500, 700)
        .settings.add(150,20, getText("events-ageofchange"))
        .settings.add(300,20, getText("events-land"))
        .settings.add(520,50, getText("events-ichsprach"))
        .settings.add(930,50, getText("events-ichhoerte"))
        .settings.add(1200,20, getText("events-didyouspeakgerman"))
        .settings.add(1350,20, getText("events-didyouheargerman"))
        .settings.add(50,90, getText("events-toage1"))
        .settings.add(50,160, getText("events-toage2"))
        .settings.add(50,220, getText("events-toage3"))
        .settings.add(50,280, getText("events-toage4"))
        .settings.add(50,340, getText("events-toage5"))
        .settings.add(50,400, getText("events-toage6"))
        .settings.add(50,460, getText("events-toage7"))
        .settings.add(50,520, getText("events-toage8"))
        .settings.add(50,580, getText("events-toage9"))
        .settings.add(50,640, getText("events-toage10"))
        .settings.add(150,90, getDropDown("events-ageofchange1"))
        .settings.add(150,160, getDropDown("events-ageofchange2"))
        .settings.add(150,220, getDropDown("events-ageofchange3"))
        .settings.add(150,280, getDropDown("events-ageofchange4"))
        .settings.add(150,340, getDropDown("events-ageofchange5"))
        .settings.add(150,400, getDropDown("events-ageofchange6"))
        .settings.add(150,460, getDropDown("events-ageofchange7"))
        .settings.add(150,520, getDropDown("events-ageofchange8"))
        .settings.add(150,580, getDropDown("events-ageofchange9"))
        .settings.add(150,640, getDropDown("events-ageofchange10"))
        .settings.add(300,90, getTextInput("events-land1"))
        .settings.add(300,160, getTextInput("events-land2"))
        .settings.add(300,220, getTextInput("events-land3"))
        .settings.add(300,280, getTextInput("events-land4"))
        .settings.add(300,340, getTextInput("events-land5"))
        .settings.add(300,400, getTextInput("events-land6"))
        .settings.add(300,460, getTextInput("events-land7"))
        .settings.add(300,520, getTextInput("events-land8"))
        .settings.add(300,580, getTextInput("events-land9"))
        .settings.add(300,640, getTextInput("events-land10"))
        .settings.add(400,90, getScale("scale-events-ichsprach1"))
        .settings.add(400,160, getScale("scale-events-ichsprach2"))
        .settings.add(400,220, getScale("scale-events-ichsprach3"))
        .settings.add(400,280, getScale("scale-events-ichsprach4"))
        .settings.add(400,340, getScale("scale-events-ichsprach5"))
        .settings.add(400,400, getScale("scale-events-ichsprach6"))
        .settings.add(400,460, getScale("scale-events-ichsprach7"))
        .settings.add(400,520, getScale("scale-events-ichsprach8"))
        .settings.add(400,580, getScale("scale-events-ichsprach9"))
        .settings.add(400,640, getScale("scale-events-ichsprach10"))
        .settings.add(800,90, getScale("scale-events-ichhoerte1"))
        .settings.add(800,160, getScale("scale-events-ichhoerte2"))
        .settings.add(800,220, getScale("scale-events-ichhoerte3"))
        .settings.add(800,280, getScale("scale-events-ichhoerte4"))
        .settings.add(800,340, getScale("scale-events-ichhoerte5"))
        .settings.add(800,400, getScale("scale-events-ichhoerte6"))
        .settings.add(800,460, getScale("scale-events-ichhoerte7"))
        .settings.add(800,520, getScale("scale-events-ichhoerte8"))
        .settings.add(800,580, getScale("scale-events-ichhoerte9"))
        .settings.add(800,640, getScale("scale-events-ichhoerte10"))
        .settings.add(1200,90, getDropDown("events-didyouspeakgerman1"))
        .settings.add(1200,160, getDropDown("events-didyouspeakgerman2"))
        .settings.add(1200,220, getDropDown("events-didyouspeakgerman3"))
        .settings.add(1200,280, getDropDown("events-didyouspeakgerman4"))
        .settings.add(1200,340, getDropDown("events-didyouspeakgerman5"))
        .settings.add(1200,400, getDropDown("events-didyouspeakgerman6"))
        .settings.add(1200,460, getDropDown("events-didyouspeakgerman7"))
        .settings.add(1200,520, getDropDown("events-didyouspeakgerman8"))
        .settings.add(1200,580, getDropDown("events-didyouspeakgerman9"))
        .settings.add(1200,640, getDropDown("events-didyouspeakgerman10"))
        .settings.add(1350,90, getDropDown("events-didyouheargerman1"))
        .settings.add(1350,160, getDropDown("events-didyouheargerman2"))
        .settings.add(1350,220, getDropDown("events-didyouheargerman3"))
        .settings.add(1350,280, getDropDown("events-didyouheargerman4"))
        .settings.add(1350,340, getDropDown("events-didyouheargerman5"))
        .settings.add(1350,400, getDropDown("events-didyouheargerman6"))
        .settings.add(1350,460, getDropDown("events-didyouheargerman7"))
        .settings.add(1350,520, getDropDown("events-didyouheargerman8"))
        .settings.add(1350,580, getDropDown("events-didyouheargerman9"))
        .settings.add(1350,640, getDropDown("events-didyouheargerman10"))
        .center() 
        .print()
,
newButton("next", "Weiter")
   .center()
    .print()
    .wait()
)

newTrial("pageeleven",
newText("languagemixing-you","In diesem Abschnitt werden Sie über Sprachmischung befragt. Sprachmischung bedeutet die Benutzung von mehr als einer Sprache im gleichen Gespräch oder in einem Satz.<br> Forschung über verschiedenen Gruppen zeigt, dass Sprachmischung in zweisprachigen/mehrsprachigen Gruppen ganz natürlich ist.<br> Denken Sie an <b>Ihr</b> Sprachverhalten in einer typischen Woche, bezogen auf persönliche und online Kommunikation.</br> ")
    .center()
    .print()
,
newText("languagemixing-you-familyinhousehold","Familie im Haushalt")
,
newText("languagemixing-you-familyoutsidehousehold", "Familie außerhalb<br> des Haushalts</br>")
,
newText("languagemixing-you-workorschool","Arbeit oder Schule")
,
newText("languagemixing-you-localcommunity","lokale Gemeinde (Geschäfte,<br> Organisationen, etc.)</br>")
,
newText("languagemixing-you-freetime","Freizeit (Treffen mit<br> Freunden, Mitbewohnern, Hobbys)</br>")
,
newText("languagemixing-you-switchtogerman","Wenn <b>Sie</b> auf <b>BKMS</b> reden,<br> wie oft wechseln Sie ins <b>Deutsche</b>?</br>")
,
newDropDown("languagemixing-you-switchtogerman-familyinhousehold","auswählen")
    .settings.add("ich spreche kein BKMS in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-switchtogerman-familyoutsidehousehold","auswählen")
    .settings.add("ich spreche kein BKMS in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-switchtogerman-workorschool","auswählen")
    .settings.add("ich spreche kein BKMS in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-switchtogerman-localcommunity","auswählen")
    .settings.add("ich spreche kein BKMS in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-switchtogerman-freetime","auswählen")
    .settings.add("ich spreche kein BKMS in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newText("languagemixing-you-switchtobcms","Wie oft wechseln Sie zum <b>BKMS</b>, <br>wenn <b>Sie</b> <b>Deutsch</b> sprechen?</br>")
,
newDropDown("languagemixing-you-switchtobcms-familyinhousehold","auswählen")
    .settings.add("ich spreche kein Deutsch in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche","in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-switchtobcms-familyoutsidehousehold","auswählen")
    .settings.add("ich spreche kein Deutsch in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche","in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-switchtobcms-workorschool","auswählen")
    .settings.add("ich spreche kein Deutsch in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche","in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-switchtobcms-localcommunity","auswählen")
    .settings.add("ich spreche kein Deutsch in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche","in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-switchtobcms-freetime","auswählen")
    .settings.add("ich spreche kein Deutsch in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche","in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newText("languagemixing-you-oneword","Wie oft benutzen <b>Sie</b> ein Wort aus einer anderen <br> Sprache, wenn Sie eine bestimmte Sprache sprechen? <br> Zum  Beispiel: <em>Moram da kupim Brötchen za sutra</em>.</br>")
,
newDropDown("languagemixing-you-oneword-familyinhousehold","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-oneword-familyoutsidehousehold","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-oneword-workorschool","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-oneword-localcommunity","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-oneword-freetime","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newText("languagemixing-you-morewords","Wie oft benutzen <b>Sie</b> zwei oder drei Worte aus <br> einer anderen Sprache, wenn Sie in einer bestimmten<br> Sprache sprechen? Zum Beispiel: <br> <em>Hoćeš li Kabeljau oder Lachs?</em></br>")
,
newDropDown("languagemixing-you-morewords-familyinhousehold","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-morewords-familyoutsidehousehold","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-morewords-workorschool","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-morewords-localcommunity","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-morewords-freetime","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newText("languagemixing-you-sentence","Wie oft sagen <b>Sie</b> einen Satz in einer Sprache<br> und dann den nächsten Satz in einer anderen <br> Sprache? Zum Beispiel: <em>Moram da ustanem rano.<br> Morgen  wird ein anstrengender Tag.</em></br>")
,
newDropDown("languagemixing-you-sentence-familyinhousehold","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-sentence-familyoutsidehousehold","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-sentence-workorschool","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-sentence-localcommunity","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-you-sentence-freetime","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    

newCanvas("canvas-langagemixing-you", 1400, 550)
        .settings.add(350,70, getText("languagemixing-you-familyinhousehold"))
        .settings.add(550,70, getText("languagemixing-you-familyoutsidehousehold"))
        .settings.add(750,70, getText("languagemixing-you-workorschool"))
        .settings.add(950,70, getText("languagemixing-you-localcommunity"))
        .settings.add(1150,70, getText("languagemixing-you-freetime"))
        .settings.add(0,150, getText("languagemixing-you-switchtogerman"))
        .settings.add(350,150, getDropDown("languagemixing-you-switchtogerman-familyinhousehold"))
        .settings.add(550,150, getDropDown("languagemixing-you-switchtogerman-familyoutsidehousehold"))
        .settings.add(750,150, getDropDown("languagemixing-you-switchtogerman-workorschool"))
        .settings.add(950,150, getDropDown("languagemixing-you-switchtogerman-localcommunity"))
        .settings.add(1150,150, getDropDown("languagemixing-you-switchtogerman-freetime"))
        .settings.add(0,230, getText("languagemixing-you-switchtobcms"))
        .settings.add(350,230, getDropDown("languagemixing-you-switchtobcms-familyinhousehold"))
        .settings.add(550,230, getDropDown("languagemixing-you-switchtobcms-familyoutsidehousehold"))
        .settings.add(750,230, getDropDown("languagemixing-you-switchtobcms-workorschool"))
        .settings.add(950,230, getDropDown("languagemixing-you-switchtobcms-localcommunity"))
        .settings.add(1150,230, getDropDown("languagemixing-you-switchtobcms-freetime"))
        .settings.add(0,310, getText("languagemixing-you-oneword"))
        .settings.add(350,310, getDropDown("languagemixing-you-oneword-familyinhousehold"))
        .settings.add(550,310, getDropDown("languagemixing-you-oneword-familyoutsidehousehold"))
        .settings.add(750,310, getDropDown("languagemixing-you-oneword-workorschool"))
        .settings.add(950,310, getDropDown("languagemixing-you-oneword-localcommunity"))
        .settings.add(1150,310, getDropDown("languagemixing-you-oneword-freetime"))
        .settings.add(0,390, getText("languagemixing-you-morewords"))
        .settings.add(350,390, getDropDown("languagemixing-you-morewords-familyinhousehold"))
        .settings.add(550,390, getDropDown("languagemixing-you-morewords-familyoutsidehousehold"))
        .settings.add(750,390, getDropDown("languagemixing-you-morewords-workorschool"))
        .settings.add(950,390, getDropDown("languagemixing-you-morewords-localcommunity"))
        .settings.add(1150,390, getDropDown("languagemixing-you-morewords-freetime"))
        .settings.add(0,470, getText("languagemixing-you-sentence"))
        .settings.add(350,470, getDropDown("languagemixing-you-sentence-familyinhousehold"))
        .settings.add(550,470, getDropDown("languagemixing-you-sentence-familyoutsidehousehold"))
        .settings.add(750,470, getDropDown("languagemixing-you-sentence-workorschool"))
        .settings.add(950,470, getDropDown("languagemixing-you-sentence-localcommunity"))
        .settings.add(1150,470, getDropDown("languagemixing-you-sentence-freetime"))
        .center()
        .print()
,
newButton("next", "Weiter")
    .center()
    .print()
    .wait()
)
    
newTrial("pagetwelve",
newText("languagemixing-others","Denken Sie an das Sprachmischen von <b>anderen Personen</b>, die Sie in verschiedenen Kontexten innerhalb einer Woche treffen, sowohl in persönlicher, als auch in online Kommunikation.")
    .center()
    .print()
,
newText("languagemixing-others-familyinhousehold","Familie im Haushalt")
,
newText("languagemixing-others-familyoutsidehousehold", "Familie außerhalb<br> des Haushalts</br>")
,
newText("languagemixing-others-workorschool","Arbeit oder Schule")
,
newText("languagemixing-others-localcommunity","lokale Gemeinde (Geschäfte,<br> Organisationen, etc.)</br>")
,
newText("languagemixing-others-freetime","Freizeit (Treffen mit<br> Freunden, Mitbewohnern, Hobbys)</br>")
,
newText("languagemixing-others-switchtogerman","Wie oft wechseln sie zum <b>Deutschen</b>,<br> wenn die Personen <b>BKMS</b> sprechen?</br>")
,
newDropDown("languagemixing-others-switchtogerman-familyinhousehold","auswählen")
    .settings.add("sie sprechen kein BKMS in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-switchtogerman-familyoutsidehousehold","auswählen")
    .settings.add("sie sprechen kein BKMS in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-switchtogerman-workorschool","auswählen")
    .settings.add("sie sprechen kein BKMS in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-switchtogerman-localcommunity","auswählen")
    .settings.add("sie sprechen kein BKMS in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-switchtogerman-freetime","auswählen")
    .settings.add("sie sprechen kein BKMS in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newText("languagemixing-others-switchtobcms","Wie oft wechseln sie zum <b>BKMS</b>,<br> wenn die Personen <b>Deutsch</b> sprechen?</br>")
,
newDropDown("languagemixing-others-switchtobcms-familyinhousehold","auswählen")
    .settings.add("sie sprechen kein Deutsch in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-switchtobcms-familyoutsidehousehold","auswählen")
    .settings.add("sie sprechen kein Deutsch in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-switchtobcms-workorschool","auswählen")
    .settings.add("sie sprechen kein Deutsch in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-switchtobcms-localcommunity","auswählen")
    .settings.add("sie sprechen kein Deutsch in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-switchtobcms-freetime","auswählen")
    .settings.add("sie sprechen kein Deutsch in diesem Kontext", "(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newText("languagemixing-others-oneword","Wie oft benutzen sie ein Wort aus einer anderen<br> Sprache, wenn Sie eine bestimmte Sprache sprechen?<br> Zum  Beispiel: <em>Moram da kupim Brötchen za sutra</em>.</br>")
,
newDropDown("languagemixing-others-oneword-familyinhousehold","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-oneword-familyoutsidehousehold","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-oneword-workorschool","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-oneword-localcommunity","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-oneword-freetime","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newText("languagemixing-others-morewords","Wie oft benutzen sie zwei oder drei Worte aus<br> einer anderen Sprache, wenn Sie in einer bestimmten<br> Sprache sprechen?  Zum Beispiel:<br> <em>Hoćeš li Kabeljau oder Lachs?</em></br>")
,
newDropDown("languagemixing-others-morewords-familyinhousehold","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-morewords-familyoutsidehousehold","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-morewords-workorschool","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-morewords-localcommunity","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-morewords-freetime","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newText("languagemixing-others-sentence","Wie oft sagen sie einen Satz in einer Sprache<br> und dann den nächsten Satz in der anderen <br> Sprache? Zum Beispiel: <em>Moram da ustanem rano.<br> Morgen  wird ein anstrengender Tag.</em></br>")
,
newDropDown("languagemixing-others-sentence-familyinhousehold","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-sentence-familyoutsidehousehold","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-sentence-workorschool","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-sentence-localcommunity","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-others-sentence-freetime","auswählen")
    .settings.add("(fast) nie", "in einem oder zwei Gespräch(en) pro Woche", "in einem oder zwei Gespräch(en) täglich", "in (fast) jedem Gespräch", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newCanvas("canvas-langagemixing-others", 1400, 550)
        .settings.add(350,70, getText("languagemixing-others-familyinhousehold"))
        .settings.add(550,70, getText("languagemixing-others-familyoutsidehousehold"))
        .settings.add(750,70, getText("languagemixing-others-workorschool"))
        .settings.add(950,70, getText("languagemixing-others-localcommunity"))
        .settings.add(1150,70, getText("languagemixing-others-freetime"))
        .settings.add(0,150, getText("languagemixing-others-switchtogerman"))
        .settings.add(350,150, getDropDown("languagemixing-others-switchtogerman-familyinhousehold"))
        .settings.add(550,150, getDropDown("languagemixing-others-switchtogerman-familyoutsidehousehold"))
        .settings.add(750,150, getDropDown("languagemixing-others-switchtogerman-workorschool"))
        .settings.add(950,150, getDropDown("languagemixing-others-switchtogerman-localcommunity"))
        .settings.add(1150,150, getDropDown("languagemixing-others-switchtogerman-freetime"))
        .settings.add(0,230, getText("languagemixing-others-switchtobcms"))
        .settings.add(350,230, getDropDown("languagemixing-others-switchtobcms-familyinhousehold"))
        .settings.add(550,230, getDropDown("languagemixing-others-switchtobcms-familyoutsidehousehold"))
        .settings.add(750,230, getDropDown("languagemixing-others-switchtobcms-workorschool"))
        .settings.add(950,230, getDropDown("languagemixing-others-switchtobcms-localcommunity"))
        .settings.add(1150,230, getDropDown("languagemixing-others-switchtobcms-freetime"))
        .settings.add(0,310, getText("languagemixing-others-oneword"))
        .settings.add(350,310, getDropDown("languagemixing-others-oneword-familyinhousehold"))
        .settings.add(550,310, getDropDown("languagemixing-others-oneword-familyoutsidehousehold"))
        .settings.add(750,310, getDropDown("languagemixing-others-oneword-workorschool"))
        .settings.add(950,310, getDropDown("languagemixing-others-oneword-localcommunity"))
        .settings.add(1150,310, getDropDown("languagemixing-others-oneword-freetime"))
        .settings.add(0,390, getText("languagemixing-others-morewords"))
        .settings.add(350,390, getDropDown("languagemixing-others-morewords-familyinhousehold"))
        .settings.add(550,390, getDropDown("languagemixing-others-morewords-familyoutsidehousehold"))
        .settings.add(750,390, getDropDown("languagemixing-others-morewords-workorschool"))
        .settings.add(950,390, getDropDown("languagemixing-others-morewords-localcommunity"))
        .settings.add(1150,390, getDropDown("languagemixing-others-morewords-freetime"))
        .settings.add(0,470, getText("languagemixing-others-sentence"))
        .settings.add(350,470, getDropDown("languagemixing-others-sentence-familyinhousehold"))
        .settings.add(550,470, getDropDown("languagemixing-others-sentence-familyoutsidehousehold"))
        .settings.add(750,470, getDropDown("languagemixing-others-sentence-workorschool"))
        .settings.add(950,470, getDropDown("languagemixing-others-sentence-localcommunity"))
        .settings.add(1150,470, getDropDown("languagemixing-others-sentence-freetime"))
        .center()
        .print()
,
newButton("next", "Weiter")
    .center()
    .print()
    .wait()
)

newTrial("pagethirteen",
newText("languagemixing-attitudes","Denken Sie über Ihre Einstellung zur Sprachmischung in Gesprächen in verschiedenen Kontexten nach.")
    .center()
    .print()
,
newText("languagemixing-attitudes-familyinhousehold","Familie im Haushalt")
,
newText("languagemixing-attitudes-familyoutsidehousehold", "Familie außerhalb<br> des Haushalts</br>")
,
newText("languagemixing-attitudes-workorschool","Arbeit oder Schule")
,
newText("languagemixing-attitudes-localcommunity","lokale Gemeinde (Geschäfte,<br> Organisationen, etc.)</br>")
,
newText("languagemixing-attitudes-freetime","Freizeit (Treffen mit<br> Freunden, Mitbewohnern, Hobbys)</br>")
,
newText("languagemixing-attitudes-youropinion","Was denken <b>Sie</b> über Sprachmischung?")
,
newDropDown("languagemixing-attitudes-youropinion-familyinhousehold","auswählen")
    .settings.add("sollte vermieden werden", "ich habe keine Meinung", "es ist in Ordnung", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-attitudes-youropinion-familyoutsidehousehold","auswählen")
    .settings.add("sollte vermieden werden", "ich habe keine Meinung", "es ist in Ordnung", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-attitudes-youropinion-workorschool","auswählen")
    .settings.add("sollte vermieden werden", "ich habe keine Meinung", "es ist in Ordnung", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-attitudes-youropinion-localcommunity","auswählen")
    .settings.add("sollte vermieden werden", "ich habe keine Meinung", "es ist in Ordnung", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-attitudes-youropinion-freetime","auswählen")
    .settings.add("sollte vermieden werden", "ich habe keine Meinung", "es ist in Ordnung", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newText("languagemixing-attitudes-othersopinion","Was denken <b>andere Leute</b> über Sprachmischung?")
,
newDropDown("languagemixing-attitudes-othersopinion-familyinhousehold","auswählen")
    .settings.add("sollte vermieden werden", "sie habe keine Meinung", "es ist in Ordnung", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-attitudes-othersopinion-familyoutsidehousehold","auswählen")
    .settings.add("sollte vermieden werden", "sie habe keine Meinung", "es ist in Ordnung", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-attitudes-othersopinion-workorschool","auswählen")
    .settings.add("sollte vermieden werden", "sie habe keine Meinung", "es ist in Ordnung", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-attitudes-othersopinion-localcommunity","auswählen")
    .settings.add("sollte vermieden werden", "sie habe keine Meinung", "es ist in Ordnung", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newDropDown("languagemixing-attitudes-othersopinion-freetime","auswählen")
    .settings.add("sollte vermieden werden", "sie habe keine Meinung", "es ist in Ordnung", "ich weiß es nicht")
    .size(180,20)
    .settings.log()
,    
newCanvas("canvas-langagemixing-attitudes", 1400, 550)
        .settings.add(350,70, getText("languagemixing-attitudes-familyinhousehold"))
        .settings.add(550,70, getText("languagemixing-attitudes-familyoutsidehousehold"))
        .settings.add(750,70, getText("languagemixing-attitudes-workorschool"))
        .settings.add(950,70, getText("languagemixing-attitudes-localcommunity"))
        .settings.add(1150,70, getText("languagemixing-attitudes-freetime"))
        .settings.add(0,150, getText("languagemixing-attitudes-youropinion"))
        .settings.add(350,150, getDropDown("languagemixing-attitudes-youropinion-familyinhousehold"))
        .settings.add(550,150, getDropDown("languagemixing-attitudes-youropinion-familyoutsidehousehold"))
        .settings.add(750,150, getDropDown("languagemixing-attitudes-youropinion-workorschool"))
        .settings.add(950,150, getDropDown("languagemixing-attitudes-youropinion-localcommunity"))
        .settings.add(1150,150, getDropDown("languagemixing-attitudes-youropinion-freetime"))
        .settings.add(0,230, getText("languagemixing-attitudes-othersopinion"))
        .settings.add(350,230, getDropDown("languagemixing-attitudes-othersopinion-familyinhousehold"))
        .settings.add(550,230, getDropDown("languagemixing-attitudes-othersopinion-familyoutsidehousehold"))
        .settings.add(750,230, getDropDown("languagemixing-attitudes-othersopinion-workorschool"))
        .settings.add(950,230, getDropDown("languagemixing-attitudes-othersopinion-localcommunity"))
        .settings.add(1150,230, getDropDown("languagemixing-attitudes-othersopinion-freetime"))
        .center()
        .print()
,
newButton("next", "Weiter")
    .center()
    .print()
    .wait()
)

newTrial("pagefourteen",
newText("identity","Inwiefern fühlen <b>Sie</b>, dass eine Sprache Ihre <b>Identität</b> formt? Um den folgenden Aussagen zuzstimmen, ziehen Sie den Schieberegler nach rechts;  um nicht zuzustimmen, schieben Sie ihn nach links. ")
    .center()
    .print()
,
newScale("identity-example",   100)
    .slider()
    .before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
    .after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newText("identity-identifyasbkms","Ich identifiziere mich als Bosnier(in)/Kroate(in)/Montenegriner(in)/Serbe(in).")
,
newScale("scale-identity-identifyasbkms",   100)
    .slider()
//.before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
//.after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newText("identity-feelmyself","Ich fühle mich wie ich selbst wenn ich BKMS rede.")
,
newScale("scale-identity-feelmyself",   100)
    .slider()
//.before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
//.after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newText("identity-transferbkmsknowledge","Es is mir wichtig, dass ich meine Kenntnisse des BKMS an meine Kinder und zukünftige Generationen weitergebe.")
,
newScale("scale-identity-transferbkmsknowledge",   100)
    .slider()
//.before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
//.after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newText("identity-childrenlearnbcms","Es ist mir wichtig, dass meine Kinder BKMS zu einem hohen Grad lernen.")
,
newScale("scale-identity-childrenlearnbcms",   100)
    .slider()
//.before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
//.after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newText("identity-speakunderstandlikemonolingual","Es ist mir wichtig, BKMS so zu sprechen und verstehen, wie die Sprecher die in Bosnien/Kroatien/Montenegro/Serbien wohnen.")
,
newScale("scale-identity-speakunderstandlikemonolingual",   100)
    .slider()
//.before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
//.after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newText("identity-readwritelikemonolingual","Es ist mir wichtig, BKMS so zu lesen und schreiben, wie die Sprecher die in Bosnien/Kroatien/Montenegro/Serbien wohnen.")
,
newScale("scale-identity-readwritelikemonolingual",   100)
    .slider()
//.before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
//.after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newText("identity-keephighlevel","Es ist mir wichtig, BKMS auf einem hohem Niveau zu erhalten.")
,
newScale("scale-identity-keephighlevel",   100)
    .slider()
//.before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
//.after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newText("identity-perceivedasnativespeaker","Ich möchte, dass andere denken, dass ich ein(e) Muttersprachler/Muttersprachlerin vom BKMS bin.")
,
newScale("scale-identity-perceivedasnativespeaker",   100)
    .slider()
//.before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
//.after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newText("identity-knowinghistory","Es ist mir wichtig, die Geschichte, Kultur und Tradition von Bosnien/Kroatien/Montenegro/Serbien zu kennen.")
,
newScale("scale-identity-knowinghistory",   100)
    .slider()
//.before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
//.after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newText("identity-currentknowledgesatisfaction","Ich bin mit meinen momentanen allgemeinen Sprachkenntnissen des BKMS zufrieden.")
,
newScale("scale-identity-currentknowledgesatisfaction",   100)
    .slider()
//.before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
//.after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newCanvas("canvas-identity", 1400, 550)
    .settings.add(800, 0, getScale("identity-example"))
    .settings.add(100,50, getText("identity-identifyasbkms"))
    .settings.add(950,50, getScale("scale-identity-identifyasbkms"))
    .settings.add(100,100, getText("identity-feelmyself"))
    .settings.add(950,100, getScale("scale-identity-feelmyself"))
    .settings.add(100,150, getText("identity-transferbkmsknowledge"))
    .settings.add(950,150, getScale("scale-identity-transferbkmsknowledge"))
    .settings.add(100,200, getText("identity-childrenlearnbcms"))
    .settings.add(950,200, getScale("scale-identity-childrenlearnbcms"))
    .settings.add(100,250, getText("identity-speakunderstandlikemonolingual"))
    .settings.add(950,250, getScale("scale-identity-speakunderstandlikemonolingual"))
    .settings.add(100,300, getText("identity-readwritelikemonolingual"))
    .settings.add(950,300, getScale("scale-identity-readwritelikemonolingual"))
    .settings.add(100,350, getText("identity-keephighlevel"))
    .settings.add(950,350, getScale("scale-identity-keephighlevel"))
    .settings.add(100,400, getText("identity-perceivedasnativespeaker"))
    .settings.add(950,400, getScale("scale-identity-perceivedasnativespeaker"))
    .settings.add(100,450, getText("identity-knowinghistory"))
    .settings.add(950,450, getScale("scale-identity-knowinghistory"))
    .settings.add(100,500, getText("identity-currentknowledgesatisfaction"))
    .settings.add(950,500, getScale("scale-identity-currentknowledgesatisfaction"))
    .center()
    .print()
,
newButton("next", "Weiter")
    .center()
    .print()
    .wait()
)

newTrial("pagefifteen",
newText("societyattitudes","Wie sind die Einstellungen der <b>Gesellschaft</b> in der Sie leben zu den Sprachen? Deuten Sie darauf hin, inwiefern Sie den Aussagen zustimmen.")
    .center()
    .print()
,
newScale("societyattitudes-example",   100)
    .slider()
    .before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
    .after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newText("societyattitudes-nativelanguagenottollerated","Ich habe die Befürchtung, dass die Benutzung meiner Muttersprache in der breiteren Gesellschaft nicht toleriert/willkommen ist.")
,
newScale("scale-societyattitudes-nativelanguagenottollerated",   100)
    .slider()
//.before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
//.after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newText("societyattitudes-enoughsupport","Es gibt genügend Unterstützung von der Politik und Gesellschaft für die Erhaltung meiner Muttersprache.")
,
newScale("scale-societyattitudes-enoughsupport",   100)
    .slider()
//.before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
//.after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newText("societyattitudes-externalpressure","Ich fühle externen Druck (von Kollegen, Freunden, etc.), die dominante Sprache der Gesellschaft zu sprechen.")
,
newScale("scale-societyattitudes-externalpressure",   100)
    .slider()
//.before(newText("identityexampleleft", "trifft überhaupt nicht zu"))
//.after(newText("identityexampleright", "trifft vollkommen zu"))
    .log()
,
newCanvas("canvas-societyattitudes", 1400, 550)
    .settings.add(800, 0, getScale("societyattitudes-example"))
    .settings.add(60,50, getText("societyattitudes-nativelanguagenottollerated"))
    .settings.add(950,50, getScale("scale-societyattitudes-nativelanguagenottollerated"))
    .settings.add(100,100, getText("societyattitudes-enoughsupport"))
    .settings.add(950,100, getScale("scale-societyattitudes-enoughsupport"))
    .settings.add(100,150, getText("societyattitudes-externalpressure"))
    .settings.add(950,150, getScale("scale-societyattitudes-externalpressure"))
    .center()
    .print()
,
newButton("next", "Weiter")
    .center()
    .print()
    .wait()
)

newTrial("pagesixteen",
newText("educationlanguage","In welchen Sprachen war Ihre formale Bildung? (Sprachschulen sind hiervon ausgeschlossen.)")
    .center()
    .print()
,
newText("educationlanguage-kindergarden","im Kindergarten")
,
newText("educationlanguage-primaryschool","in der Grundschule")
,
newText("educationlanguage-secondaryschool", "in der Mittelschule/Sekundarschule/Gymnasium")
,
newText("educationlanguage-postsecondary","während der Hochschulbildung (Universität,<br> Hochschule) oder Ausbildung</br>")
,
newText("educationlanguage-postgraduate","nach dem Grundstudium (MA, Promotion)")
,
newText("educationlanguage-bcms","BKMS")
,
newText("educationlanguage-german","Deutsch")
,
newText("educationlanguage-other","andere Sprachen")
,
newDropDown("educationlanguage-bcms-kindergarden","auswählen")
    .settings.add("nur BKMS", "meistens BKMS", "halb BKMS", "etwas BKMS", "kein BKMS", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newDropDown("educationlanguage-bcms-primaryschool","auswählen")
    .settings.add("nur BKMS", "meistens BKMS", "halb BKMS", "etwas BKMS", "kein BKMS", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newDropDown("educationlanguage-bcms-secondaryschool","auswählen")
    .settings.add("nur BKMS", "meistens BKMS", "halb BKMS", "etwas BKMS", "kein BKMS", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newDropDown("educationlanguage-bcms-postsecondary","auswählen")
    .settings.add("nur BKMS", "meistens BKMS", "halb BKMS", "etwas BKMS", "kein BKMS", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newDropDown("educationlanguage-bcms-postgraduate","auswählen")
    .settings.add("nur BKMS", "meistens BKMS", "halb BKMS", "etwas BKMS", "kein BKMS", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newDropDown("educationlanguage-german-kindergarden","auswählen")
    .settings.add("nur Deutsch", "meistens Deutsch", "halb Deutsch", "etwas Deutsch", "kein Deutsch", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newDropDown("educationlanguage-german-primaryschool","auswählen")
    .settings.add("nur Deutsch", "meistens Deutsch", "halb Deutsch", "etwas Deutsch", "kein Deutsch", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newDropDown("educationlanguage-german-secondaryschool","auswählen")
    .settings.add("nur Deutsch", "meistens Deutsch", "halb Deutsch", "etwas Deutsch", "kein Deutsch", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newDropDown("educationlanguage-german-postsecondary","auswählen")
    .settings.add("nur Deutsch", "meistens Deutsch", "halb Deutsch", "etwas Deutsch", "kein Deutsch", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newDropDown("educationlanguage-german-postgraduate","auswählen")
    .settings.add("nur Deutsch", "meistens Deutsch", "halb Deutsch", "etwas Deutsch", "kein Deutsch", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newDropDown("educationlanguage-other-kindergarden","auswählen")
    .settings.add("nur andere Sprache(n)", "meistens andere Sprache(n)", "halb andere Sprache(n)", "keine andere Sprache(n)", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newDropDown("educationlanguage-other-primaryschool","auswählen")
    .settings.add("nur andere Sprache(n)", "meistens andere Sprache(n)", "halb andere Sprache(n)", "keine andere Sprache(n)", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newDropDown("educationlanguage-other-secondaryschool","auswählen")
    .settings.add("nur andere Sprache(n)", "meistens andere Sprache(n)", "halb andere Sprache(n)", "keine andere Sprache(n)", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newDropDown("educationlanguage-other-postsecondary","auswählen")
    .settings.add("nur andere Sprache(n)", "meistens andere Sprache(n)", "halb andere Sprache(n)", "keine andere Sprache(n)", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newDropDown("educationlanguage-other-postgraduate","auswählen")
    .settings.add("nur andere Sprache(n)", "meistens andere Sprache(n)", "halb andere Sprache(n)", "keine andere Sprache(n)", "ich habe diese Bildungsstufe nicht besucht")
    .size(180,20)
    .settings.log()
,
newCanvas("canvas-educationlanguage",1000,500)
    .settings.add(400,50, getText("educationlanguage-bcms"))
    .settings.add(600,50, getText("educationlanguage-german"))
    .settings.add(800,50, getText("educationlanguage-other"))
    .settings.add(50,120, getText("educationlanguage-kindergarden"))
    .settings.add(50,190, getText("educationlanguage-primaryschool"))
    .settings.add(50,260, getText("educationlanguage-secondaryschool"))
    .settings.add(50,330, getText("educationlanguage-postsecondary"))
    .settings.add(50,400, getText("educationlanguage-postgraduate"))
    .settings.add(400,120, getDropDown("educationlanguage-bcms-kindergarden"))
    .settings.add(400,190, getDropDown("educationlanguage-bcms-primaryschool"))
    .settings.add(400,260, getDropDown("educationlanguage-bcms-secondaryschool"))
    .settings.add(400,330, getDropDown("educationlanguage-bcms-postsecondary"))
    .settings.add(400,400, getDropDown("educationlanguage-bcms-postgraduate"))
    .settings.add(600,120, getDropDown("educationlanguage-german-kindergarden"))
    .settings.add(600,190, getDropDown("educationlanguage-german-primaryschool"))
    .settings.add(600,260, getDropDown("educationlanguage-german-secondaryschool"))
    .settings.add(600,330, getDropDown("educationlanguage-german-postsecondary"))
    .settings.add(600,400, getDropDown("educationlanguage-german-postgraduate"))
    .settings.add(800,120, getDropDown("educationlanguage-other-kindergarden"))
    .settings.add(800,190, getDropDown("educationlanguage-other-primaryschool"))
    .settings.add(800,260, getDropDown("educationlanguage-other-secondaryschool"))
    .settings.add(800,330, getDropDown("educationlanguage-other-postsecondary"))
    .settings.add(800,400, getDropDown("educationlanguage-other-postgraduate"))
    .center()
    .print()
,
newButton("next", "Weiter")
    .center()
    .print()
    .wait()
)

newTrial("pageseventeen",
newText("bcmsclasses","Hatten Sie außerhalb der regulären Schule zusätzliche BKMS-Unterricht (inklusive lesen/schreiben), z.B. Sonntagsschule?")
    .center()
    .print()
,
newText("bcmsclasses-type","nennen Sie die Art (z.B. Sonntagsschule)")
,
newText("bcmsclasses-agebegun","In welchem Alter<br> haben Sie angefangen?</br>")
,
newText("bcmsclasses-ageended","In welchem Alter<br> haben Sie aufgehört?</br>")
,
newText("bcmsclasses-daysaweek","Wie viele Tage<br> in der Woche?</br>")
,
newTextInput("bcmsclasses-type-1",)
    .size(250,20)
    .log()
,
newTextInput("bcmsclasses-type-2",)
    .size(250,20)
    .log()
,
newTextInput("bcmsclasses-type-3",)
    .size(250,20)
    .log()
,
newTextInput("bcmsclasses-type-4",)
    .size(250,20)
    .log()
,
newTextInput("bcmsclasses-type-5",)
    .size(250,20)
    .log()
,
newDropDown("bcmsclasses-agebegun-type-1","auswählen")
    .settings.add("1","2", "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12" , "13" , "14" , "15" , "16" , "17" , "18" , "19" , "20" , "21" , "22" , "23" , "24" , "25" , "26" , "27" , "28" , "29" , "30" , "31" , "32" , "33" , "34" , "35" , "36" , "37" , "38" , "39" , "40" , "41" , "42" , "43" , "44" , "45" , "46" , "47" , "48" , "49" , "50" , "51" , "52" , "53" , "54" , "55" , "56" , "57" , "58" , "59" , "60" , "61" , "62" , "63" , "64" , "65" , "66" , "67" , "68" , "69" , "70" , "71" , "72" , "73" , "74" , "75" , "76" , "77" , "78" , "79" , "80" , "81" , "82" , "83" , "84" , "85" , "86" , "87" , "88" , "89" , "90" , "91" , "92" , "93" , "94" , "95" , "96" , "97" , "98" , "99" , "100")
    .size(180,20)
    .log()
,    
newDropDown("bcmsclasses-agebegun-type-2","auswählen")
    .settings.add("1","2", "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12" , "13" , "14" , "15" , "16" , "17" , "18" , "19" , "20" , "21" , "22" , "23" , "24" , "25" , "26" , "27" , "28" , "29" , "30" , "31" , "32" , "33" , "34" , "35" , "36" , "37" , "38" , "39" , "40" , "41" , "42" , "43" , "44" , "45" , "46" , "47" , "48" , "49" , "50" , "51" , "52" , "53" , "54" , "55" , "56" , "57" , "58" , "59" , "60" , "61" , "62" , "63" , "64" , "65" , "66" , "67" , "68" , "69" , "70" , "71" , "72" , "73" , "74" , "75" , "76" , "77" , "78" , "79" , "80" , "81" , "82" , "83" , "84" , "85" , "86" , "87" , "88" , "89" , "90" , "91" , "92" , "93" , "94" , "95" , "96" , "97" , "98" , "99" , "100")
    .size(180,20)
    .log()
,    
newDropDown("bcmsclasses-agebegun-type-3","auswählen")
    .settings.add("1","2", "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12" , "13" , "14" , "15" , "16" , "17" , "18" , "19" , "20" , "21" , "22" , "23" , "24" , "25" , "26" , "27" , "28" , "29" , "30" , "31" , "32" , "33" , "34" , "35" , "36" , "37" , "38" , "39" , "40" , "41" , "42" , "43" , "44" , "45" , "46" , "47" , "48" , "49" , "50" , "51" , "52" , "53" , "54" , "55" , "56" , "57" , "58" , "59" , "60" , "61" , "62" , "63" , "64" , "65" , "66" , "67" , "68" , "69" , "70" , "71" , "72" , "73" , "74" , "75" , "76" , "77" , "78" , "79" , "80" , "81" , "82" , "83" , "84" , "85" , "86" , "87" , "88" , "89" , "90" , "91" , "92" , "93" , "94" , "95" , "96" , "97" , "98" , "99" , "100")
    .size(180,20)
    .log()
,    
newDropDown("bcmsclasses-agebegun-type-4","auswählen")
    .settings.add("1","2", "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12" , "13" , "14" , "15" , "16" , "17" , "18" , "19" , "20" , "21" , "22" , "23" , "24" , "25" , "26" , "27" , "28" , "29" , "30" , "31" , "32" , "33" , "34" , "35" , "36" , "37" , "38" , "39" , "40" , "41" , "42" , "43" , "44" , "45" , "46" , "47" , "48" , "49" , "50" , "51" , "52" , "53" , "54" , "55" , "56" , "57" , "58" , "59" , "60" , "61" , "62" , "63" , "64" , "65" , "66" , "67" , "68" , "69" , "70" , "71" , "72" , "73" , "74" , "75" , "76" , "77" , "78" , "79" , "80" , "81" , "82" , "83" , "84" , "85" , "86" , "87" , "88" , "89" , "90" , "91" , "92" , "93" , "94" , "95" , "96" , "97" , "98" , "99" , "100")
    .size(180,20)
    .log()
,    
newDropDown("bcmsclasses-agebegun-type-5","auswählen")
    .settings.add("1","2", "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12" , "13" , "14" , "15" , "16" , "17" , "18" , "19" , "20" , "21" , "22" , "23" , "24" , "25" , "26" , "27" , "28" , "29" , "30" , "31" , "32" , "33" , "34" , "35" , "36" , "37" , "38" , "39" , "40" , "41" , "42" , "43" , "44" , "45" , "46" , "47" , "48" , "49" , "50" , "51" , "52" , "53" , "54" , "55" , "56" , "57" , "58" , "59" , "60" , "61" , "62" , "63" , "64" , "65" , "66" , "67" , "68" , "69" , "70" , "71" , "72" , "73" , "74" , "75" , "76" , "77" , "78" , "79" , "80" , "81" , "82" , "83" , "84" , "85" , "86" , "87" , "88" , "89" , "90" , "91" , "92" , "93" , "94" , "95" , "96" , "97" , "98" , "99" , "100")
    .size(180,20)
    .log()
,    
newDropDown("bcmsclasses-ageended-type-1","auswählen")
    .settings.add("1","2", "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12" , "13" , "14" , "15" , "16" , "17" , "18" , "19" , "20" , "21" , "22" , "23" , "24" , "25" , "26" , "27" , "28" , "29" , "30" , "31" , "32" , "33" , "34" , "35" , "36" , "37" , "38" , "39" , "40" , "41" , "42" , "43" , "44" , "45" , "46" , "47" , "48" , "49" , "50" , "51" , "52" , "53" , "54" , "55" , "56" , "57" , "58" , "59" , "60" , "61" , "62" , "63" , "64" , "65" , "66" , "67" , "68" , "69" , "70" , "71" , "72" , "73" , "74" , "75" , "76" , "77" , "78" , "79" , "80" , "81" , "82" , "83" , "84" , "85" , "86" , "87" , "88" , "89" , "90" , "91" , "92" , "93" , "94" , "95" , "96" , "97" , "98" , "99" , "100")
    .size(180,20)
    .log()
,    
newDropDown("bcmsclasses-ageended-type-2","auswählen")
    .settings.add("1","2", "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12" , "13" , "14" , "15" , "16" , "17" , "18" , "19" , "20" , "21" , "22" , "23" , "24" , "25" , "26" , "27" , "28" , "29" , "30" , "31" , "32" , "33" , "34" , "35" , "36" , "37" , "38" , "39" , "40" , "41" , "42" , "43" , "44" , "45" , "46" , "47" , "48" , "49" , "50" , "51" , "52" , "53" , "54" , "55" , "56" , "57" , "58" , "59" , "60" , "61" , "62" , "63" , "64" , "65" , "66" , "67" , "68" , "69" , "70" , "71" , "72" , "73" , "74" , "75" , "76" , "77" , "78" , "79" , "80" , "81" , "82" , "83" , "84" , "85" , "86" , "87" , "88" , "89" , "90" , "91" , "92" , "93" , "94" , "95" , "96" , "97" , "98" , "99" , "100")
    .size(180,20)
    .log()
,    
newDropDown("bcmsclasses-ageended-type-3","auswählen")
    .settings.add("1","2", "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12" , "13" , "14" , "15" , "16" , "17" , "18" , "19" , "20" , "21" , "22" , "23" , "24" , "25" , "26" , "27" , "28" , "29" , "30" , "31" , "32" , "33" , "34" , "35" , "36" , "37" , "38" , "39" , "40" , "41" , "42" , "43" , "44" , "45" , "46" , "47" , "48" , "49" , "50" , "51" , "52" , "53" , "54" , "55" , "56" , "57" , "58" , "59" , "60" , "61" , "62" , "63" , "64" , "65" , "66" , "67" , "68" , "69" , "70" , "71" , "72" , "73" , "74" , "75" , "76" , "77" , "78" , "79" , "80" , "81" , "82" , "83" , "84" , "85" , "86" , "87" , "88" , "89" , "90" , "91" , "92" , "93" , "94" , "95" , "96" , "97" , "98" , "99" , "100")
    .size(180,20)
    .log()
,    
newDropDown("bcmsclasses-ageended-type-4","auswählen")
    .settings.add("1","2", "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12" , "13" , "14" , "15" , "16" , "17" , "18" , "19" , "20" , "21" , "22" , "23" , "24" , "25" , "26" , "27" , "28" , "29" , "30" , "31" , "32" , "33" , "34" , "35" , "36" , "37" , "38" , "39" , "40" , "41" , "42" , "43" , "44" , "45" , "46" , "47" , "48" , "49" , "50" , "51" , "52" , "53" , "54" , "55" , "56" , "57" , "58" , "59" , "60" , "61" , "62" , "63" , "64" , "65" , "66" , "67" , "68" , "69" , "70" , "71" , "72" , "73" , "74" , "75" , "76" , "77" , "78" , "79" , "80" , "81" , "82" , "83" , "84" , "85" , "86" , "87" , "88" , "89" , "90" , "91" , "92" , "93" , "94" , "95" , "96" , "97" , "98" , "99" , "100")
    .size(180,20)
    .log()
,    
newDropDown("bcmsclasses-ageended-type-5","auswählen")
    .settings.add("1","2", "3" , "4" , "5" , "6" , "7" , "8" , "9" , "10" , "11" , "12" , "13" , "14" , "15" , "16" , "17" , "18" , "19" , "20" , "21" , "22" , "23" , "24" , "25" , "26" , "27" , "28" , "29" , "30" , "31" , "32" , "33" , "34" , "35" , "36" , "37" , "38" , "39" , "40" , "41" , "42" , "43" , "44" , "45" , "46" , "47" , "48" , "49" , "50" , "51" , "52" , "53" , "54" , "55" , "56" , "57" , "58" , "59" , "60" , "61" , "62" , "63" , "64" , "65" , "66" , "67" , "68" , "69" , "70" , "71" , "72" , "73" , "74" , "75" , "76" , "77" , "78" , "79" , "80" , "81" , "82" , "83" , "84" , "85" , "86" , "87" , "88" , "89" , "90" , "91" , "92" , "93" , "94" , "95" , "96" , "97" , "98" , "99" , "100")
    .size(180,20)
    .log()
,    
newDropDown("bcmsclasses-daysaweek-type-1","auswählen")
    .settings.add("1", "2", "3", "4", "5", "6", "7", "einmal in zwei Wochen", "einmal im Monat", "weniger als einmal im Monat")
    .size(180,20)
    .log()
,    
newDropDown("bcmsclasses-daysaweek-type-2","auswählen")
    .settings.add("1", "2", "3", "4", "5", "6", "7", "einmal in zwei Wochen", "einmal im Monat", "weniger als einmal im Monat")
    .size(180,20)
    .log()
,    
newDropDown("bcmsclasses-daysaweek-type-3","auswählen")
    .settings.add("1", "2", "3", "4", "5", "6", "7", "einmal in zwei Wochen", "einmal im Monat", "weniger als einmal im Monat")
    .size(180,20)
    .log()
,    
newDropDown("bcmsclasses-daysaweek-type-4","auswählen")
    .settings.add("1", "2", "3", "4", "5", "6", "7", "einmal in zwei Wochen", "einmal im Monat", "weniger als einmal im Monat")
    .size(180,20)
    .log()
,    
newDropDown("bcmsclasses-daysaweek-type-5","auswählen")
    .settings.add("1", "2", "3", "4", "5", "6", "7", "einmal in zwei Wochen", "einmal im Monat", "weniger als einmal im Monat")
    .size(180,20)
    .log()
,    
newCanvas("canvas-educationlanguage",1000,500)
    .settings.add(50,50, getText("bcmsclasses-type"))
    .settings.add(400,50, getText("bcmsclasses-agebegun"))
    .settings.add(600,50, getText("bcmsclasses-ageended"))
    .settings.add(800,50, getText("bcmsclasses-daysaweek"))
    .settings.add(50,100, getTextInput("bcmsclasses-type-1"))
    .settings.add(50,150, getTextInput("bcmsclasses-type-2"))
    .settings.add(50,200, getTextInput("bcmsclasses-type-3"))
    .settings.add(50,250, getTextInput("bcmsclasses-type-4"))
    .settings.add(50,300, getTextInput("bcmsclasses-type-5"))
    .settings.add(400,100, getDropDown("bcmsclasses-agebegun-type-1"))
    .settings.add(400,150, getDropDown("bcmsclasses-agebegun-type-2"))
    .settings.add(400,200, getDropDown("bcmsclasses-agebegun-type-3"))
    .settings.add(400,250, getDropDown("bcmsclasses-agebegun-type-4"))
    .settings.add(400,300, getDropDown("bcmsclasses-agebegun-type-5"))
    .settings.add(600,100, getDropDown("bcmsclasses-ageended-type-1"))
    .settings.add(600,150, getDropDown("bcmsclasses-ageended-type-2"))
    .settings.add(600,200, getDropDown("bcmsclasses-ageended-type-3"))
    .settings.add(600,250, getDropDown("bcmsclasses-ageended-type-4"))
    .settings.add(600,300, getDropDown("bcmsclasses-ageended-type-5"))
    .settings.add(800,100, getDropDown("bcmsclasses-daysaweek-type-1"))
    .settings.add(800,150, getDropDown("bcmsclasses-daysaweek-type-2"))
    .settings.add(800,200, getDropDown("bcmsclasses-daysaweek-type-3"))
    .settings.add(800,250, getDropDown("bcmsclasses-daysaweek-type-4"))
    .settings.add(800,300, getDropDown("bcmsclasses-daysaweek-type-5"))
    .center()
    .print()
,    
newButton("next", "Weiter")
    .center()
    .print()
    .wait()
)
//newTrial(
 //   SendResults("sendresultstoserver","https://zoricapuskar.com/files/survey_data_collection/resultsupload.php"))

SendResults("send")

newTrial("pageeighteen",
newText("end","Das ist das Ende der Umfrage. Vielen Dank für Ihre Teilnahme!")
    .center()
    .print()
,
newCanvas("canvas-end",1000,500)
    .center()
    .print()
    .wait()
)
    


