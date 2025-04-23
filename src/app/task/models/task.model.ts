export type TaskStatus = 'pending' | 'in-progress' | 'completed'

export interface Task {
  id: string
  description: string
  createdBy: string
  assignedTo: string
  requestedBy: string
  status: TaskStatus
  createdAt: Date
  updatedAt?: Date
}
