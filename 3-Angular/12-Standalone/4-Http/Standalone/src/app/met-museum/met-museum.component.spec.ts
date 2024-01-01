import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetMuseumComponent } from './met-museum.component';

describe('MetMuseumComponent', () => {
  let component: MetMuseumComponent;
  let fixture: ComponentFixture<MetMuseumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetMuseumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetMuseumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
