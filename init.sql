CREATE TABLE IF NOT EXISTS Enemies (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    img_url VARCHAR(255),
    type VARCHAR(100),
    description TEXT,
    strategy TEXT,
    unlocked BOOLEAN
);

--this is for deleting data in the table VVVV
TRUNCATE TABLE Enemies RESTART IDENTITY;

INSERT INTO Enemies (name, img_url, type, unlocked, description, strategy) VALUES
('Filth', 'assets/filth.png', 'Lesser Husk', TRUE,
'Husks are physical manifestations of the souls of the damned. The physical form is based on the value of the original soul, which is determined by the strength of its will and its prevalence in public consciousness: the living souls that remember it. Filth are the lowest form of Husk, whose souls were too weak and unimportant to even form a complete physical body. Even among Husks, they have the lowest intelligence, driven purely by hunger.', 
' - Most weapons are easily capable of taking down Filth, but their powerful jaws and sheer numbers can overwhelm a target quickly if underestimated. - Explosives are the most effective way to take down swarms, but any weapon that can hit more than one target will be efficient.'),
('Stray', 'assets/stray.png', 'Lesser Husk', TRUE,
'While their tall stature may seem intimidating, Strays are afraid of most danger and will try to stay at a safe distance, only attacking via projectiles formed with Hell Energy. Although controlling and manifesting this energy is a complicated task, Strays have very low intelligence and are only able to do so via pure instinct. Nevertheless, humans were unable to replicate this level of accuracy and control, particularily the Strays ability to cause the energy orbs to selectively ignore other Husks.', 
' - Most weapons will be effective against them, but a Revolver headshot is the quickest and surest way to eliminate a Stray. - Due to their static nature and slow rate of attacking, they are an excellent target for projectile parrying.');
/* ("", "", "", , 
"", 
""); */

/*
CREATE TABLE IF NOT EXISTS Weapons (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    info TEXT,
    strategy TEXT,
    advStrategy TEXT,
    unlocked BOOLEAN
);

TRUNCATE TABLE Weapons RESTART IDENTITY,

INSERT INTO Weapons (name, unlocked, info, strategy, advStrategy) VALUES
("Revolver", 1, 
"A weapon created during the Final War for medium-to-long distance combat. Uses electric pulses to fire microscopic pieces of metal at incredibly high speeds. Weapons that use this technology have been dubbed 'electric guns', and it quickly became the new standard, replacing bullet guns. Due to still requiring a microscopic projectile, its ammo is not actually infinite, but it would take weeks of non-stop firing to run out and refilling is as easy as just scraping some flakes from scrap metal or even the gun's surface. In fact, a rough, uneven surface from scraping flakes is considered a point of pride for wielders of electric guns, as it shows the weapon has been reliable and used for a long time. Many users even shave off flakes just for this reason, rather than for actual ammunition, making 'unflaked' electric weapons an outlier. Although an electric gun requires some time to recharge its battery between shots, the revolver-style design bypasses that issue by including a multi-battery cylinder that rotates after each shot, allowing each battery time to charge without slowing down the fire-rate. A common modification is to allow for the charges of all batteries to be released simultaneously for greater power, though this requires a longer recharge time.",
"- The revolver's precision and the instant travel time of its shots make it an excellent and reliable way to deal damage at a range, as it's unlikely anything could have reaction times fast enough to dodge it. - Headshots deal 2x damage, limbshots 1.5x",
"- When hit with precise timing during its flash, the Marksman variation's coin can split a shot in two, causing it to hit two targets instead of just one. Although the timing is tight, there is a second much longer window if the coin remains airborne for an extended period of time, recognisable[sic] by its continuous whistling sound. - The Marksman variation's coin can be punched after it has flashed, launching it into the nearest target without breaking the coin, increasing its damage further for subsequent punches or shots. - The Piercer's charged shot can also ricochet off of the Marksman variation's coins."),
("", "", , 
"", 
"",
""),
("", "", , 
"", 
"",
""),
*/
