export default function profileFilter() {
  return function profileFn(profile) {
    if (!profile) {
      return '';
    }

    let result = `${profile.firstName || ''} ${profile.lastName || ''}`.trim();
    if (profile.userName) {
      if (result) {
        result += ` (${profile.userName || ''})`;
      } else {
          result = profile.userName || '';
      }
    }
    return result;
  }
}
