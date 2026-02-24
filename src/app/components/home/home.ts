import { Component } from '@angular/core';
import { Header } from "../header/header"
import { NgOptimizedImage } from '@angular/common';
import {BtnPrimary} from "../btn-primary/btn-primary"
import {NewsletterForm} from "../newsletter-form/newsletter-form"

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, NgOptimizedImage, BtnPrimary, NewsletterForm],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {}