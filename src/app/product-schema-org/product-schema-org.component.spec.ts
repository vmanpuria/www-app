import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSchemaOrgComponent } from './product-schema-org.component';

describe('ProductSchemaOrgComponent', () => {
  let component: ProductSchemaOrgComponent;
  let fixture: ComponentFixture<ProductSchemaOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSchemaOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSchemaOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
