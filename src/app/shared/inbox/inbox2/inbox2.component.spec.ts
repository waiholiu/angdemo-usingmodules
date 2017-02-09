/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Inbox2Component } from './inbox2.component';

describe('Inbox2Component', () => {
  let component: Inbox2Component;
  let fixture: ComponentFixture<Inbox2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Inbox2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Inbox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
