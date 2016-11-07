import profileModule from './profile.module';

describe('ProfileFilter', function () {
  let profileFilter;

  beforeEach(function () {
    angular.mock.module(profileModule);
    angular.mock.inject(function ($filter) {
      profileFilter = $filter('profile');
    });
  });

  it('should be defined', function () {
    expect(profileFilter).toBeDefined();
  });

  describe('when profile is not defined', function () {
    it('should return empty string', function () {
      expect(profileFilter()).toBe('');
    });
  });

  describe('when profile is defined', function () {
    let profileObj;

    beforeEach(function () {
      profileObj = {};
    });

    describe('and has firstName', function () {
      beforeEach(function () {
        profileObj.firstName = 'Random first name';
      });

      it('should include first name in the result', function () {
        expect(profileFilter(profileObj)).toBe('Random first name');
      });

      describe('and has lastName', function () {
        beforeEach(function () {
          profileObj.lastName = 'Random last name';
        });

        it('should include last name in the result', function () {
          expect(profileFilter(profileObj)).toBe('Random first name Random last name');
        });

        describe('and has userName', function () {
          beforeEach(function () {
            profileObj.userName = 'Random user name';
          });

          it('should include user name in the result', function () {
            expect(profileFilter(profileObj)).toBe('Random first name Random last name (Random user name)');
          });
        });
      });

      describe('and has no lastName', function () {
        describe('and has userName', function () {
          beforeEach(function () {
            profileObj.userName = 'Random user name';
          });

          it('should include user name in the result', function () {
            expect(profileFilter(profileObj)).toBe('Random first name (Random user name)');
          });
        });
      });
    });

    describe('and has no firstName', function () {
      describe('and has lastName', function () {
        beforeEach(function () {
          profileObj.lastName = 'Random last name';
        });

        it('should include last name in the result', function () {
          expect(profileFilter(profileObj)).toBe('Random last name');
        });

        describe('and has userName', function () {
          beforeEach(function () {
            profileObj.userName = 'Random user name';
          });

          it('should include user name in the result', function () {
            expect(profileFilter(profileObj)).toBe('Random last name (Random user name)');
          });
        });
      });

      describe('and has no lastName', function () {
        describe('and has userName', function () {
          beforeEach(function () {
            profileObj.userName = 'Random user name';
          });

          it('should include user name in the result', function () {
            expect(profileFilter(profileObj)).toBe('Random user name');
          });
        });

        describe('and has no userName', function () {
          it('should return empty string', function () {
            expect(profileFilter(profileObj)).toBe('');
          });
        });
      });
    });
  });
});
