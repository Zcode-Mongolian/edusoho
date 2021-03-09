<?php

namespace AppBundle\Component\Export\Classroom;

use AppBundle\Component\Export\Exporter;
use Biz\Classroom\Service\ClassroomService;

class ClassroomSignStatisticsExporter extends Exporter
{
    protected $classroomId;

    protected $orderBy;

    //定义导出标题
    public function getTitles()
    {
        return [
            'classroom.manage.sign_statictics.nickname_th',
            'classroom.manage.sign_statictics.role_th',
            'classroom.manage.sign_statictics.join_time_th',
            'classroom.manage.sign_statictics.sign_days_th',
            'classroom.manage.sign_statictics.keep_days_th',
        ];
    }

    //获得导出正文内容
    public function getContent($start, $limit)
    {
        $members = $this->getClassroomService()->searchMembersSignStatistics(
            $this->classroomId,
            $this->conditions,
            [],
            $start,
            $limit
        );

        $users = empty($members) ? [] : $this->getUserService()->findUsersByIds(array_column($members, 'userId'));

        $content = [];
        foreach ($members as $member) {
            $role = '';
            if (in_array('headTeacher', $member['role'])) {
                $role = $this->container->get('translator')->trans('classroom.manage.sign_statictics.role.head_teacher');
            } elseif (in_array('teacher', $member['role'])) {
                $role = $this->container->get('translator')->trans('classroom.manage.sign_statictics.role.teacher');
            } elseif (in_array('assistant', $member['role'])) {
                $role = $this->container->get('translator')->trans('classroom.manage.sign_statictics.role.assistant');
            } elseif (in_array('auditor', $member['role'])) {
                $role = $this->container->get('translator')->trans('classroom.manage.sign_statictics.role.auditor');
            } else {
                $role = $this->container->get('translator')->trans('classroom.manage.sign_statictics.role.student');
            }
            $content[] = [
                empty($users[$member['userId']]) ? '--' : $users[$member['userId']]['nickname'],
                $role,
                date('Y-m-d H:i:s', $member['createdTime']),
                $member['signDays'],
                $member['keepDays'],
            ];
        }

        return $content;
    }

    //下载权限判断
    public function canExport()
    {
        if (empty($this->classroomId)) {
            return false;
        }

        if ($this->getClassroomService()->canManageClassroom($this->classroomId)) {
            return true;
        }

        return false;
    }

    //获得导出总条数
    public function getCount()
    {
        return $this->getClassroomService()->countClassrooms($this->conditions);
    }

    //构建查询条件
    public function buildCondition($conditions)
    {
        $this->classroomId = $conditions['classroomId'];

        return $conditions;
    }

    protected function fillOrgCode($conditions)
    {
        if ($this->getSettingService()->node('magic.enable_org')) {
            if (!isset($conditions['orgCode'])) {
                $conditions['likeOrgCode'] = $this->getUser()->getSelectOrgCode();
            } else {
                $conditions['likeOrgCode'] = $conditions['orgCode'];
                unset($conditions['orgCode']);
            }
        } else {
            if (isset($conditions['orgCode'])) {
                unset($conditions['orgCode']);
            }
        }

        return $conditions;
    }

    /**
     * @return ClassroomService
     */
    protected function getClassroomService()
    {
        return $this->getBiz()->service('Classroom:ClassroomService');
    }
}
