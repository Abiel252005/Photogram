import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagUsersPage } from './tag-users.page';

describe('TagUsersPage', () => {
  let component: TagUsersPage;
  let fixture: ComponentFixture<TagUsersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TagUsersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
