export interface ICourse {
	_id?: string;
	projectId: string;
	name: string;
	description: string;
	thumbnail?: string;
	chapters: IChapter[];
	createdAt: Date;
	updatedAt: Date;
}

export interface IChapter {
	id: string;
	courseId: string;
	name?: string;
	lessons: ILesson[];
	setNewLessonsToDraft: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export interface ILesson {
	id: string;
	name?: string;
	url?: string;
	quizHtml?: string;
	additionalText?: string;
	createdAt: Date;
	updatedAt: Date;
}

