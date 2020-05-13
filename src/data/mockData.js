const data = {
	user: {
		age: 31,
		ambassador: false,
		autoStrideEnabled: true,
		avatar: 'https://static0.fitbit.com/images/profile/defaultProfile_100.png',
		avatar150:
			'https://static0.fitbit.com/images/profile/defaultProfile_150.png',
		avatar640:
			'https://static0.fitbit.com/images/profile/defaultProfile_640.png',
		averageDailySteps: 8936,
		clockTimeDisplayFormat: '12hour',
		corporate: false,
		corporateAdmin: false,
		dateOfBirth: '1901-10-04',
		displayName: 'Tony N.',
		displayNameSetting: 'name',
		distanceUnit: 'en_US',
		encodedId: '3GTZLF',
		familyGuidanceEnabled: false,
		features: {
			exerciseGoal: true,
		},
		firstName: 'Tony',
		foodsLocale: 'en_US',
		fullName: 'Tony Nicola',
		gender: 'MALE',
		glucoseUnit: 'en_US',
		height: 182.8,
		heightUnit: 'en_US',
		isChild: false,
		isCoach: false,
		lastName: 'Nicola',
		locale: 'en_US',
		memberSince: '2015-05-28',
		mfaEnabled: false,
		offsetFromUTCMillis: -14400000,
		startDayOfWeek: 'SUNDAY',
		strideLengthRunning: 117.10000000000001,
		strideLengthRunningType: 'manual',
		strideLengthWalking: 75.9,
		strideLengthWalkingType: 'default',
		swimUnit: 'en_US',
		timezone: 'America/New_York',
		topBadges: [
			{
				badgeGradientEndColor: '00D3D6',
				badgeGradientStartColor: '007273',
				badgeType: 'DAILY_STEPS',
				category: 'Daily Steps',
				cheers: [],
				dateTime: '2020-05-12',
				description: '15,000 steps in a day',
				earnedMessage: 'Congrats on earning your first Urban Boot badge!',
				encodedId: '228TMK',
				image100px:
					'https://static0.fitbit.com/images/badges_new/100px/badge_daily_steps15k.png',
				image125px:
					'https://static0.fitbit.com/images/badges_new/125px/badge_daily_steps15k.png',
				image300px:
					'https://static0.fitbit.com/images/badges_new/300px/badge_daily_steps15k.png',
				image50px:
					'https://static0.fitbit.com/images/badges_new/badge_daily_steps15k.png',
				image75px:
					'https://static0.fitbit.com/images/badges_new/75px/badge_daily_steps15k.png',
				marketingDescription:
					"You've walked 15,000 steps  And earned the Urban Boot badge!",
				mobileDescription:
					"With a number that's almost three times more than the national average, your step count is really heating up.",
				name: 'Urban Boot (15,000 steps in a day)',
				shareImage640px:
					'https://static0.fitbit.com/images/badges_new/386px/shareLocalized/en_US/badge_daily_steps15k.png',
				shareText:
					'I took 15,000 steps and earned the Urban Boot badge! #Fitbit',
				shortDescription: '15,000 steps',
				shortName: 'Urban Boot',
				timesAchieved: 7,
				value: 15000,
			},
			{
				badgeGradientEndColor: 'FFDB01',
				badgeGradientStartColor: 'D99123',
				badgeType: 'LIFETIME_DISTANCE',
				category: 'Lifetime Distance',
				cheers: [],
				dateTime: '2020-05-12',
				description: '990 lifetime miles',
				earnedMessage: "Whoa! You've earned the New Zealand badge!",
				encodedId: '22B8MD',
				image100px:
					'https://static0.fitbit.com/images/badges_new/100px/badge_lifetime_miles990.png',
				image125px:
					'https://static0.fitbit.com/images/badges_new/125px/badge_lifetime_miles990.png',
				image300px:
					'https://static0.fitbit.com/images/badges_new/300px/badge_lifetime_miles990.png',
				image50px:
					'https://static0.fitbit.com/images/badges_new/badge_lifetime_miles990.png',
				image75px:
					'https://static0.fitbit.com/images/badges_new/75px/badge_lifetime_miles990.png',
				marketingDescription:
					"By reaching 990 lifetime miles, you've earned the New Zealand badge!",
				mobileDescription: "You've walked the entire length of New Zealand.",
				name: 'New Zealand (990 lifetime miles)',
				shareImage640px:
					'https://static0.fitbit.com/images/badges_new/386px/shareLocalized/en_US/badge_lifetime_miles990.png',
				shareText:
					'I covered 990 miles with my #Fitbit and earned the New Zealand badge.',
				shortDescription: '990 miles',
				shortName: 'New Zealand',
				timesAchieved: 1,
				unit: 'MILES',
				value: 990,
			},
			{
				badgeGradientEndColor: '38D7FF',
				badgeGradientStartColor: '2DB4D7',
				badgeType: 'DAILY_FLOORS',
				category: 'Daily Climb',
				cheers: [],
				dateTime: '2018-01-31',
				description: '200 floors in a day',
				earnedMessage: 'Congrats on earning your first Castle badge!',
				encodedId: '228TC9',
				image100px:
					'https://static0.fitbit.com/images/badges_new/100px/badge_daily_floors200.png',
				image125px:
					'https://static0.fitbit.com/images/badges_new/125px/badge_daily_floors200.png',
				image300px:
					'https://static0.fitbit.com/images/badges_new/300px/badge_daily_floors200.png',
				image50px:
					'https://static0.fitbit.com/images/badges_new/badge_daily_floors200.png',
				image75px:
					'https://static0.fitbit.com/images/badges_new/75px/badge_daily_floors200.png',
				marketingDescription:
					"You've climbed 200 floors to earn the Castle badge!",
				mobileDescription:
					'With this kind of stronghold on the stairs, we proclaim you to be a knight in shining steppage!',
				name: 'Castle (200 floors in a day)',
				shareImage640px:
					'https://static0.fitbit.com/images/badges_new/386px/shareLocalized/en_US/badge_daily_floors200.png',
				shareText:
					'I climbed 200 flights of stairs and earned the Castle badge! #Fitbit',
				shortDescription: '200 floors',
				shortName: 'Castle',
				timesAchieved: 1,
				value: 200,
			},
			{
				badgeGradientEndColor: '00D3D6',
				badgeGradientStartColor: '007273',
				badgeType: 'LIFETIME_FLOORS',
				category: 'Lifetime Climb',
				cheers: [],
				dateTime: '2019-05-25',
				description: '2,000 lifetime floors',
				earnedMessage: "Yipee! You've earned the Hot Air Balloon badge!",
				encodedId: '228T9T',
				image100px:
					'https://static0.fitbit.com/images/badges_new/100px/badge_lifetime_floors2k.png',
				image125px:
					'https://static0.fitbit.com/images/badges_new/125px/badge_lifetime_floors2k.png',
				image300px:
					'https://static0.fitbit.com/images/badges_new/300px/badge_lifetime_floors2k.png',
				image50px:
					'https://static0.fitbit.com/images/badges_new/badge_lifetime_floors2k.png',
				image75px:
					'https://static0.fitbit.com/images/badges_new/75px/badge_lifetime_floors2k.png',
				marketingDescription:
					"By climbing 2000 lifetime floors, you've earned the Hot Air Balloon badge!",
				mobileDescription:
					"That's as high as a hot air balloon! You are really blowing up the lifetime badges list.",
				name: 'Hot Air Balloon (2,000 lifetime floors)',
				shareImage640px:
					'https://static0.fitbit.com/images/badges_new/386px/shareLocalized/en_US/badge_lifetime_floors2k.png',
				shareText:
					'I climbed 2,000 floors with my #Fitbit and earned the Hot Air Balloon badge.',
				shortDescription: '2,000 floors',
				shortName: 'Hot Air Balloon',
				timesAchieved: 1,
				value: 2000,
			},
		],
		waterUnit: 'en_US',
		waterUnitName: 'fl oz',
		weight: 86.1,
		weightUnit: 'en_US',
	},
};

export { data };
