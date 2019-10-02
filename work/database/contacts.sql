USE run4it_db;

CREATE TABLE contacts
       (
		contact_id INT NOT NULL AUTO_INCREMENT,
		contact_fname VARCHAR(256) NOT NULL,
        contact_lname VARCHAR(256) NOT NULL,
		contact_email VARCHAR(256) NOT NULL,
		contact_comment VARCHAR(256) NOT NULL,
        PRIMARY KEY (contact_id)
       );
       
INSERT INTO contacts(contact_fname, contact_lname, contact_email, contact_comment)
VALUES
('Basilio', 'Dealy', 'bdealy0@paypal.com', "I purchased the spurs sweatpants. They're overpriced and bad'"),
('Greg', 'Sawdy' , 'gsawdy1@bloglovin.com', "I found the spurs sweatpants wonderful and not at all overpriced."),
('Eric', 'Lampett', 'elampett2@bloglines.com', "I don't even like sports apparal."),
('Jessica', 'Souch', 'jsouch3@epa.gov', "Your women's selection is bad and you should feel bad"),
('Daven', 'Nannizzi', 'dnannizzi4@blogger.com', "The video background is amazing!!"),
('Dean', 'Aughton', 'daughton5@hugedomains.com', "I liked the Steady Freddy t"),
('Becca', 'Spittles', 'bspittlesc@etsy.com', "All your stuff is ripped off nike. What is the point of this?"),
('Natalia', 'Beneyto', 'nbeneyto8@google.es	', "I dig these pants"),
('Emilia', 'Elgood', 'eelgood5@npr.org', 'first!'),
('Tami', 'Rontree', 'trontreec@homestead.com', 'I really enjoyed browsing the 4 womens products you have available.');

SELECT * FROM contacts;	

 
