import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component'
import { AddMrPipe } from './app.pipe';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PersonComponent,
        AddMrPipe
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
