import { useState, useEffect } from "react";
import Input from "../Input";
import MethodOptions from "../MethodOptions";
import ContentBox from "../ContentBox";
import QueryStringEditor from "../editor/QueryStringEditor";
import isValidURI from "../../utils/validateURI";
import PathVariableEditor from "../editor/PathVariableEditor";
import parseQueryParameters from "../../utils/parseQueryParameters";
import parsePathVariables from "../../utils/parsePathVariables";
import mergePathVariables from "../../utils/mergePathVariables";
import RequestBodyEditor from "../editor/RequestBodyEditor";
import ResponseBodyEditor from "../editor/ResponseBodyEditor";
import { updateApi } from "../../apis/api";
import Button from "../button/Button";
import GroupSelect from "../GroupSelect";
import { useModalStore, useProjectStore } from "../../store";
import { getProjectDetail } from "../../apis/project";

export default function ApiUpdateModal() {
  const { project, setProject } = useProjectStore();
  const { closeModal, state } = useModalStore();
  const [document, setDocument] = useState(state.document);
  console.log(document);
  const [groupId, setGroupId] = useState(document.groupId);
  const [parameters, setParameters] = useState(document.apiPathVariable);
  const uriChangeHandler = (e) => {
    setDocument((document) => {
      return { ...document, apiUri: e.target.value };
    });
  };

  const setPathVariableType = (idx, type) => {
    setDocument((document) => {
      const newPathVariable = [...document.apiPathVariable];
      newPathVariable[idx].type = type;
      return {
        ...document,
        apiPathVariable: newPathVariable,
      };
    });
  };

  const onClickButton = () => {
    const commonUri = project.groups.filter(
      (group) => group.groupId == groupId,
    )[0]?.groupUri;

    const convertedDocument = {
      ...document,
      apiUri: (commonUri || "") + document.apiUri,
    };

    updateApi({
      projectId: project.projectId,
      document: convertedDocument,
      apiId: document.apiId,
      groupId,
    }).then(() => {
      getProjectDetail(project.projectId).then((data) => {
        setProject(data);
        closeModal();
      });
    });
  };

  useEffect(() => {
    if (!isValidURI(document.apiUri)) return;

    setParameters(parseQueryParameters(document.apiUri));
    const newPathVariableArr = parsePathVariables(document.apiUri);
    const mergedPathVariable = mergePathVariables(
      document.apiPathVariable,
      newPathVariableArr,
    );
    setDocument((prev) => {
      return { ...prev, apiPathVariable: mergedPathVariable };
    });
  }, [document.apiUri]);

  useEffect(() => {
    setDocument({
      ...document,
      apiResponseSize: document.apiResponseIsArray ? 5 : -1,
    });
  }, [document.apiResponseIsArray]);

  return (
    <div className="flex flex-col space-y-[27px] overflow-y-scroll px-5">
      <ContentBox title="API Name" description="">
        <Input
          isFull
          value={document.name}
          changeHandler={(e) => {
            setDocument({
              ...document,
              name: e.target.value,
            });
          }}
        />
      </ContentBox>
      <ContentBox title="API Description" description="">
        <Input
          isFull
          value={document.description}
          changeHandler={(e) => {
            setDocument({
              ...document,
              description: e.target.value,
            });
          }}
        />
      </ContentBox>
      <ContentBox
        title="Group Select"
        description="When a group is selected, the group's common URI is added to the beginning of the API path."
      >
        <GroupSelect
          groupId={groupId}
          setGroupId={setGroupId}
          setDocument={setDocument}
        />
      </ContentBox>
      <ContentBox
        title="API Path URL"
        description="Enter meaningful resource name, it will be used to generate API
            endpoints."
      >
        <div className="relative w-full">
          <Input
            placeHolder="ex) /user/projects"
            isFull
            value={document.apiUri}
            changeHandler={uriChangeHandler}
            isValid={isValidURI(document.apiUri)}
            useBorder
          />
          <MethodOptions
            className="absolute right-2 top-1/2 -translate-y-1/2 font-Akshar"
            apiMethod={document.apiMethod}
            setApiMethod={(selectedApiMethod) => {
              setDocument((document) => {
                return { ...document, apiMethod: selectedApiMethod };
              });
            }}
          />
        </div>
      </ContentBox>
      <ContentBox
        title="Query Parameters"
        description="Define the data types for the query string parameters."
      >
        <QueryStringEditor
          parameters={parameters}
          apiUri={document.apiUri}
          setApiUri={(newApiUri) => {
            setDocument((document) => {
              return { ...document, apiUri: newApiUri };
            });
          }}
        />
      </ContentBox>
      <ContentBox
        title="Path Variables"
        description="Define the data types for the path variables."
      >
        <PathVariableEditor
          pathVariable={document.apiPathVariable}
          setPathVariableType={setPathVariableType}
        />
      </ContentBox>
      {document.apiMethod !== "GET" && (
        <ContentBox
          title="Request Body"
          description="Define Resource template, it will be used to generate mock data."
        >
          <RequestBodyEditor
            apiRequest={document.apiRequest}
            setApiRequest={(apiRequest) => {
              setDocument((document) => {
                return {
                  ...document,
                  apiRequest,
                };
              });
            }}
          />
        </ContentBox>
      )}
      <ContentBox
        title="Response Body"
        description="Define Resource template, it will be used to generate mock data."
      >
        <ResponseBodyEditor
          apiResponse={document.apiResponse}
          apiResponseIsArray={document.apiResponseIsArray}
          apiResponseSize={document.apiResponseSize}
          setApiResponse={(apiResponse) => {
            setDocument((document) => {
              return {
                ...document,
                apiResponse,
              };
            });
          }}
          setApiResponseIsArray={(apiResponseIsArray) => {
            setDocument((document) => {
              return {
                ...document,
                apiResponseIsArray,
              };
            });
          }}
          setApiResponseSize={(apiResponseSize) => {
            setDocument((document) => {
              return {
                ...document,
                apiResponseSize,
              };
            });
          }}
        />
      </ContentBox>
      <div className="h-10 w-full" />
      <div className="flex w-full justify-end">
        <Button type="Apply" onClick={onClickButton} />
      </div>
      <div className="h-2 w-full" />
    </div>
  );
}