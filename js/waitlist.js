function joinWaitlist(list, email) {
  const result = Array.isArray(list) ? [...list] : [];

  if (typeof email !== 'string') {
    return result;
  }

  const normalizedEmail = email.trim().toLowerCase();
  const atIndex = normalizedEmail.indexOf('@');
  const dotIndex = normalizedEmail.indexOf('.', atIndex + 1);

  if (
    atIndex <= 0 ||
    dotIndex <= atIndex + 1 ||
    dotIndex === normalizedEmail.length - 1
  ) {
    return result;
  }

  const alreadyJoined = result.some(function (entry) {
    return typeof entry === 'string' &&
      entry.trim().toLowerCase() === normalizedEmail;
  });

  if (!alreadyJoined) {
    result.push(normalizedEmail);
  }

  return result;
}

module.exports = { joinWaitlist };
