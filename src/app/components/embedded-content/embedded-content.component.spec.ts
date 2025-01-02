import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedContentComponent } from './embedded-content.component';

describe('EmbeddedContentComponent', () => {
  let component: EmbeddedContentComponent;
  let fixture: ComponentFixture<EmbeddedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmbeddedContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmbeddedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
