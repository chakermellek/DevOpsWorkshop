/**
 * Created by Chaker on 22/01/2017.
 */


import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';
import { Component } from '@angular/core';
import {
  BaseRequestOptions,
  ConnectionBackend,
  Http
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { AppState } from '../app.service';
import { HomeComponent } from './home.component';

import {Calculator} from './home.service';


describe(`Home`, () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Calculator
    ]
  }));

  it('sum testing' , inject([Calculator],(calculator :Calculator) => {
    const a =3;
    const b = 4;
    expect(calculator.additionner(a,b)).toEqual(7);
  }));
  it('mul testing' , inject([Calculator],(calculator :Calculator) => {
    const a =3;
    const b = 4;
    expect(calculator.multiplication(a,b)).toEqual(12);
  }));
  it('div testing' , inject([Calculator],(calculator :Calculator) => {
    const a =16;
    const b = 2;
    expect(calculator.division(a,b)).toEqual(8);
  }));
  it('minus testing' , inject([Calculator],(calculator :Calculator) => {
    const a =15;
    const b = 3;
    expect(calculator.minus(a,b)).toEqual(12);
  }));
});
