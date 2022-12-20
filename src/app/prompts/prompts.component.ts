import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

/*
import jsPDF from 'jspdf';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake'; */

@Component({
  selector: 'app-prompts',
  templateUrl: './prompts.component.html',
  styleUrls: ['./prompts.component.css']
})
export class PromptsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /*save() {
    var blob = new Blob(["Welcome to Websparrow.org."],
        { type: "text/plain;charset=utf-8" });
    saveAs(blob, "static.txt");
  }*/
  /*@ViewChild('writing') pdfDoc: ElementRef;

  downloadpdf () {
    console.log("downloadpdf function");
    const doc = new jsPDF();

    const pdfDoc = this.pdfDoc.nativeElement;

    var html = htmlToPdfmake(pdfDoc.innerHTML);

    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download('Shaun-Teeshad-Resume.pdf')
  }*/

  prompt = ""

  allprompts = [
    "Your favorite childhood vacation.",
    "The last words of your novel are, “As night became day, he started to understand the truth.” Now, go write the rest.",
    "Turn one of the last texts you sent into a story.",
    "Add an original scene to the last movie you watched.",
    "Two friends have a disagreement.",
    "Write about your favorite teacher.",
    "Outside the window, you see something you can’t believe.",
    "Write about the first time you held someone's hand.",
    "Write about the last thing/person that made you smile.",
    "Write about a time you were lost.",
    "Write about your first job.",
    "Write a letter to your 14-year old self.",
    "Write about why you write.",
    "Five years from now, I will be.",
    "Write about your dream vacation.",
    "Do you like to be alone or with company?",
    "You have $300 and a Prius, describe the 2,800 mile road trip from NYC to LA.",
    "Write about your biggest goal.",
    "Write about your biggest fear.",
    "A conversation you and a stranger have on a plane.",
    "A time you or someone you love was scammed.",
    "Turn the last song you listened to into a story.",
    "Describe the life of your favorite singer.",
    "Write about a piece of furniture in the room you’re in.",
    "If I knew then what I know now.",
    "If you could travel back in time, where would you go?",
    "You have a billion dollars in your bank account. How did you make it?",
    "You’ve discovered a new planet. Describe what you see.",
    "If you could do anything for work, what would you do?",
    "You live on an abandoned island, describe your morning routine.",
    "You’re in a foreign country and don’t speak the native language.",
    "Describe how you think your grandparents met.",
    "Write about a time you failed.",
    "You wake up today with the superpower of your choosing.",
    "You’re a dog, describe your interaction with a human.",
    "Write about someone you admire.",
    "Go to Twitter or Facebook and write about the first post you see.",
    "Write about a time you were uncomfortable.",
    "She tried to forget him, but never could.",
    "Just as your flight takes off, you discover a shocking note under your seat.",
    "None of your friends remember you, describe yourself to them.",
    "An island rose from the sea.",
    "Out of the ashes, arose a hero.",
    "The whales grew feet.",
    "I open the last book on earth.",
    "You knock louder and louder on the door, but nobody answers.",
    "The door you had locked, is wide open.",
    "Just as you fall asleep, the phone rings.",
    "She had the perfect party planned, only to have it ruined by her ex.",
    "She said her final words and left, there’s no turning back now.",
    "A blind man falls in love, describe his feelings.",
    "You have the power to stop time, what do you do?",
    "The sun rose for the final time.",
    "You discover that your partner is a robot.",
    "You have 10 days to live.",
    "How will cars look in 50 years?",
    "This needs to be cleaned, the police will be here any minute.",
    "For years, he carefully planned out this day.",
    "The birds didn’t go south for the winter.",
    "It’s June 13th, the snow won’t stop falling."
  ]

  getNew() {
    this.prompt = this.allprompts[Math.floor(Math.random()*this.allprompts.length)];
  }
}
