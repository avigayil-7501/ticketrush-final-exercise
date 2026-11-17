// פונקציה המחזירה את מכסת הכרטיסים המקסימלית בהתאם לחברות מועדון
function maxTickets(isMember) {
  return isMember ? 4 : 8;
}

// פונקציה לחישוב הסכום הכולל של ההזמנה
function calcTotal(qty, isMember = false) {
  const max = maxTickets(isMember);
  
  // בדיקה האם הכמות חוקית (פחות מ-1, או חורגת מהמכסה המותרת)
  if (qty < 1 || qty > max) {
    return null;
  }
  
  // הגדרת מחיר כרטיס לפי זכאות להנחה ועמלת שירות קבועה
  const ticketPrice = isMember ? 280 : 350; // חברת מועדון מקבלת הנחה ל-280 ₪ (במקום 350 ₪)
  const serviceFee = 12; // עמלת שירות לכל כרטיס
  
  // חישוב סופי
  return qty * (ticketPrice + serviceFee);
}

if (typeof module !== 'undefined') {
  module.exports = { maxTickets, calcTotal };
}