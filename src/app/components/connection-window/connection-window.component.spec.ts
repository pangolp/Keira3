import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { instance, reset } from 'ts-mockito';

import { ConnectionWindowComponent } from './connection-window.component';
import { MockedMysqlService } from '../../test-utils/mocks';
import { CommonTestModule } from '../../test-utils/common-test.module';
import { MysqlService } from '../../services/mysql.service';

describe('ConnectionWindowComponent', () => {
  let component: ConnectionWindowComponent;
  let fixture: ComponentFixture<ConnectionWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectionWindowComponent ],
      imports: [
        CommonTestModule,
      ],
      providers: [
        { provide : MysqlService, useValue: instance(MockedMysqlService) },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    fixture.debugElement.nativeElement.remove();
    reset(MockedMysqlService);
  });
});
