export class ErrorHelper {

  public static getErrorMessage(error: any): string {
    //console.log('error', error);
    let errorMessage: string = '';
    if (error._body)
      errorMessage = error._body;
    else if (error.error)
      errorMessage = error.error;
    else if (error.statusText)
      errorMessage = error.statusText;

    if (error.status == 403)
      errorMessage = 'You do not have enought priviliges';

    return errorMessage;
  }

}