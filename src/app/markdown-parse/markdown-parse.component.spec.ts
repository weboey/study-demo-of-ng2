import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownParseComponent } from './markdown-parse.component';

describe('MarkdownParseComponent', () => {
  let component: MarkdownParseComponent;
  let fixture: ComponentFixture<MarkdownParseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownParseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownParseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
