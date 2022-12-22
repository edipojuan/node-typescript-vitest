import { Request, Response } from 'express'

class FirsController {
    public home(req: Request, res: Response) {
        res.json({
            message: 'test',
        })
    }
}

export const firsController = new FirsController()
