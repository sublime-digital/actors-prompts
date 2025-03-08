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
    "What's your biggest act of self-love?",
    "What are the first and last lines of your memoir?",
    "What's a recent cherished memory you've lived?",
    "Write three different versions of your life story in 3 years’ time",
    "You’re deserted on a remote island alone... What's your escape plan?",
    "You've been granted the opportunity to change one critical attribute of all humans on Earth... what are you altering?",
    "Four friends set out on an expedition through the woods on a hot summer day…",
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
