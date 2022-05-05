INSERT INTO `admin` (adminID, adminUsername, adminPassword) VALUES ('1', 'admin1', 'adminPassword1');
INSERT INTO `admin` (adminID, adminUsername, adminPassword) VALUES ('2', 'admin2', 'adminPassword2');
INSERT INTO `admin` (adminID, adminUsername, adminPassword) VALUES ('3', 'admin3', 'adminPassword3');
INSERT INTO `admin` (adminID, adminUsername, adminPassword) VALUES ('4', 'admin4', 'adminPassword4');
INSERT INTO `admin` (adminID, adminUsername, adminPassword) VALUES ('5', 'admin5', 'adminPassword5');
select * from `admin`;

INSERT INTO `charity` (charityID, charityName, location, category ) VALUES ('1', 'charity1', 'Towson1', 'category1');
INSERT INTO `charity` (charityID, charityName, location, category ) VALUES ('2', 'charity2', 'Towson2', 'category2');
INSERT INTO `charity` (charityID, charityName, location, category ) VALUES ('3', 'charity3', 'Towson3', 'category3');
INSERT INTO `charity` (charityID, charityName, location, category ) VALUES ('4', 'charity4', 'Towson4', 'category4');
INSERT INTO `charity` (charityID, charityName, location, category ) VALUES ('5', 'charity5', 'Towson5', 'category5');
select * from `charity`;

INSERT INTO `user` (userID, username, userPassword, fname, lname, email, dob ) VALUES ('1', 'user1', 'userPassword1', 'userFName1', 'userLName1', 'email1', '01/01/2001');
INSERT INTO `user` (userID, username, userPassword, fname, lname, email, dob ) VALUES ('2', 'user2', 'userPassword2', 'userFName2', 'userLName2', 'email2', '01/01/2002');
INSERT INTO `user` (userID, username, userPassword, fname, lname, email, dob ) VALUES ('3', 'user3', 'userPassword3', 'userFName3', 'userLName3', 'email3', '01/01/2003');
INSERT INTO `user` (userID, username, userPassword, fname, lname, email, dob ) VALUES ('4', 'user4', 'userPassword4', 'userFName4', 'userLName4', 'email4', '01/01/2004');
INSERT INTO `user` (userID, username, userPassword, fname, lname, email, dob ) VALUES ('5', 'user5', 'userPassword5', 'userFName5', 'userLName5', 'email5', '01/01/2005');
select * from `user`;

INSERT INTO `approval` (date, adminID, charityID) VALUES (01/01/2001, '1', '1');
INSERT INTO `approval` (date, adminID, charityID) VALUES (01/01/2002, '2', '2');
INSERT INTO `approval` (date, adminID, charityID) VALUES (01/01/2003, '3', '3');
INSERT INTO `approval` (date, adminID, charityID) VALUES (01/01/2004, '4', '4');
INSERT INTO `approval` (date, adminID, charityID) VALUES (01/01/2005, '5', '5');
select * from `approval`;

INSERT INTO `payment` (paymentID, cardNum, exDate, cvv, userID) VALUES ('1', 'cardNum1', 'expirationDate1', 'cvv1', '1');
INSERT INTO `payment` (paymentID, cardNum, exDate, cvv, userID) VALUES ('2', 'cardNum2', 'expirationDate2', 'cvv2', '2');
INSERT INTO `payment` (paymentID, cardNum, exDate, cvv, userID) VALUES ('3', 'cardNum3', 'expirationDate3', 'cvv3', '3');
INSERT INTO `payment` (paymentID, cardNum, exDate, cvv, userID) VALUES ('4', 'cardNum4', 'expirationDate4', 'cvv4', '4');
INSERT INTO `payment` (paymentID, cardNum, exDate, cvv, userID) VALUES ('5', 'cardNum5', 'expirationDate5', 'cvv5', '5');
select * from `payment`;

INSERT INTO `donation` (donationID, donationAmount, userID, paymentID, charityID) VALUES ('1', '$1', '1', '1', '1');
INSERT INTO `donation` (donationID, donationAmount, userID, paymentID, charityID) VALUES ('2', '$2', '2', '2', '2');
INSERT INTO `donation` (donationID, donationAmount, userID, paymentID, charityID) VALUES ('3', '$3', '3', '3', '3');
INSERT INTO `donation` (donationID, donationAmount, userID, paymentID, charityID) VALUES ('4', '$4', '4', '4', '4');
INSERT INTO `donation` (donationID, donationAmount, userID, paymentID, charityID) VALUES ('5', '$5', '5', '5', '5');
select * from `donation`;
