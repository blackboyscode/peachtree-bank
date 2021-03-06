import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestIdPipe } from '../test-id.pipe';
import { getElementByTestId, runOnPushChangeDetection } from '../test-utils';
import { LoaderComponent } from './loader.component';
describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderComponent, TestIdPipe],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    await runOnPushChangeDetection(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show default message', () => {
    const messageElement = getElementByTestId(fixture, 'loader.message');
    expect(messageElement.textContent).toBe('Loading...');
  });

  it('should update the message', async () => {
    const customMessage = 'Custom message';
    component.message = customMessage;
    await runOnPushChangeDetection(fixture);
    const messageElement = getElementByTestId(fixture, 'loader.message');
    expect(messageElement.textContent).toBe(component.message);
  });
});
