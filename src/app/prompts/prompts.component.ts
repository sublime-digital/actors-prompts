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
    "Your favorite childhood vacation.",
    "The last words of your novel are, “As night became day, he started to understand the truth.” Now, go write the rest.",
    "Turn one of the last texts you sent into a story.",
    "Add an original scene to the last movie you watched.",
    "Two friends have a disagreement.",
    "Write about your favorite teacher.",
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
