import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import jsPDF from 'jspdf';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import { Prompts } from './prompts';

@Component({
  selector: 'app-prompts',
  templateUrl: './prompts.component.html',
  styleUrls: ['./prompts.component.css']
})
export class PromptsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('pdfDoc') pdfDoc!: ElementRef;

  downloadpdf () {
    console.log("downloadpdf");
    const doc = new jsPDF();

    const pdfDoc = this.pdfDoc.nativeElement;

    var html = htmlToPdfmake(pdfDoc.innerHTML + this.mywriting);

    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download('story.pdf')
  }

  prompt = ""
  mywriting = ""

  allprompts = [
    "Retell the story of your favorite childhood vacation.",
    "“As daylight became dusk, she began to understand the truth..” Now, go write the rest.",
    "Turn the last text you sent into the first line of a story.",
    "Recall the last TV show you watched and add an original next episode",
    "Three siblings have a disagreement...",
    "Write about a teacher who taught you something valuable.",
  ]

  getNew() {
    this.prompt = this.allprompts[Math.floor(Math.random()*this.allprompts.length)];
  }

  powers = ['Life', 'Work',
  'Friends', 'Money', 'Travel', 'Childhood', 'Adulthood', 'Fiction', 'Pets'];

model = new Prompts(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

submitted = false;


onSubmit() { this.submitted = true; }
}
