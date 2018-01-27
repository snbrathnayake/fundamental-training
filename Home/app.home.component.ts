import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

describe('AppComponent ', () => {

  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent], // declare the test component
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    // de = fixture.debugElement.query(By.css('h1'));
    // el = de.nativeElement;
  });

  afterEach(() => {
    fixture = null;
    comp = null;
    el =null;
  });


  xit('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

  it('should display diff  title', () => {
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    comp.title = 'Test Title';
   
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

  it('should display a original test title', () => {
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    fixture.detectChanges();


    expect(el.textContent).toContain('test');
  });

  it('should display a original test title', () => {
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
    fixture.detectChanges();


    expect(el.textContent).toContain('test');
  });

  it('should display navigation link ', () => {
 

    de = fixture.debugElement.query(By.css('a[href*="#/home"]'));
    el = de.nativeElement;
    // fixture.detectChanges();
    console.log(el.getElementsByTagNameNS , '*********************');
    expect(el.tagName).toEqual('A');

  });
});


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/