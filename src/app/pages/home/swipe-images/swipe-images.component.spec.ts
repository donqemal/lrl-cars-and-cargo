import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeImagesComponent } from './swipe-images.component';

describe('SwipeImagesComponent', () => {
  let component: SwipeImagesComponent;
  let fixture: ComponentFixture<SwipeImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwipeImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SwipeImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
